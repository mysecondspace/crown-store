import { useState } from 'react'
import { useSelector } from 'react-redux'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

import Button, { BUTTON_TYPES_CLASSES } from '../Button'

import { selectTotal } from '../../store/cart/cart.selector'
import { selectCurrentUser } from '../../store/user/user.selector'

import styles from './styles.module.scss'

const Payment = () => {
  const stripe = useStripe()
  const elements = useElements()
  const amount = useSelector(selectTotal)
  const currentUser = useSelector(selectCurrentUser)
  const [isProcessingPayment, setIsProcessingPayment] = useState(false)

  const paymentHandler = async (e) => {
    e.preventDefault()

    if (!stripe || !elements) return

    setIsProcessingPayment(true)

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: amount * 100,
      }),
    }).then((res) => {
      return res.json()
    })

    const clientSecret = response.paymentIntent.client_secret

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : 'Guest',
        },
      },
    })

    setIsProcessingPayment(false)

    if (paymentResult.error) {
      alert(paymentResult.error.message)
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment Successful!')
      }
    }
  }

  return (
    <div className={styles.payment}>
      <form className={styles.form} onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <Button
          buttonType={BUTTON_TYPES_CLASSES.reversed}
          isLoading={isProcessingPayment}
        >
          Pay now
        </Button>
      </form>
    </div>
  )
}

export default Payment
