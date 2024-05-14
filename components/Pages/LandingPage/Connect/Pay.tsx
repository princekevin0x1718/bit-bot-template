import { useState } from "react"

const Pay = () => {
  const [payAmount, setPayAmount] = useState(0)
  const onChangePayAmount = (e) => {
    const temp = parseInt(e.target.value, 10)
    if (Number.isNaN(temp)) {
      setPayAmount(0)
      return
    }
    setPayAmount(temp)
  }
  return (
    <div className="w-full h-[150px] p-3 bg-white rounded-[15px] flex justify-between items-center">
      <div className="flex flex-col text-white_1 font-overpass_meno">
        <p className="text-xs text-black_3">You pay</p>
        <input
          type="text"
          value={payAmount}
          className="w-[150px] !outline-none !border-none !ring-0 focus:outline-none focus:border-none focus:ring-0
                        font-pragmatica_bold text-4xl font-bold"
          onChange={onChangePayAmount}
        />
      </div>
      <button
        type="button"
        className="bg-green_3 px-4 py-1 rounded-full text-black font-bold
           transition duration-[300ms] hover:scale-[1.01]"
      >
        Select payment
      </button>
    </div>
  )
}

export default Pay
