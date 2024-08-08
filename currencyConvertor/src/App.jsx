import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
<<<<<<< HEAD
            backgroundImage: `url('https://media.istockphoto.com/id/157308559/photo/money-pile-100-dollar-bills.jpg?s=1024x1024&w=is&k=20&c=IJjHV-iEIwB70mHWbfSxhXNeywhlL4S5pAYNHiDKSZg=')`,
=======
            backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
>>>>>>> f5883512544d4b7a435ef5086867a0f68b66cb9f
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
<<<<<<< HEAD
                    <div className="w-full mb-1 ">
=======
                    <div className="w-full mb-1">
>>>>>>> f5883512544d4b7a435ef5086867a0f68b66cb9f
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setAmount(amount)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
<<<<<<< HEAD
                    <div className="relative w-full h-0.5 ">
=======
                    <div className="relative w-full h-0.5">
>>>>>>> f5883512544d4b7a435ef5086867a0f68b66cb9f
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={from}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
<<<<<<< HEAD
    </div>
=======
        <h1 className='text-center'> Hello</h1>
<<<<<<< HEAD
    </div>
    
>>>>>>> f5883512544d4b7a435ef5086867a0f68b66cb9f
=======
    </div> 
>>>>>>> 6fcb680eb6af0ab40a00dc5b667509fb6125c6bd
);
}

export default App
