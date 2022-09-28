import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import Home from './routes/Home'
import Shop from './routes/Shop'
import Navigation from './routes/Navigation'
import Authentication from './routes/Authentication'
import Checkout from './routes/Checkout'
import { checkUserSession } from './store/user/user.action'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch])

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  )
}

export default App
