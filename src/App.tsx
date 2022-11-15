import { lazy, Suspense, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import { checkUserSession } from './store/user/user.action'

import Spinner from './components/Spinner'

import './app.scss'

const Home = lazy(() => import('./routes/Home'))
const Shop = lazy(() => import('./routes/Shop'))
const Checkout = lazy(() => import('./routes/Checkout'))
const Navigation = lazy(() => import('./routes/Navigation'))
const Authentication = lazy(() => import('./routes/Authentication'))

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch])

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='auth' element={<Authentication />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
