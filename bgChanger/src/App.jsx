import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"    //backgroundColor : '#f4acb7'
    style={{backgroundColor : color}}>

    </div>
  )
}

export default App
