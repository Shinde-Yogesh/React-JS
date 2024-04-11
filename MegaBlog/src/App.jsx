import {useDispatch} from 'react-redux'
import { useEffect, useState } from 'react'
import './App.css'
import authService from "./appwrite/auth"
function App() {
  
  const [loading ,setLoading]  = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {})

  return (
    <>
      <h1>A Blog app with appwrite</h1>
    </>
  )
}

export default App
