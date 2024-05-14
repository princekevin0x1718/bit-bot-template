import { useState } from "react"
import Media from "@/shared/Media"

const Receive = () => {
  const [receiveAmount, setReceiveAmount] = useState(0)
  const onChangeReceiveAmount = (e) => {
    const temp = parseInt(e.target.value, 10)
    if (Number.isNaN(temp)) {
      setReceiveAmount(0)
      return
    }
    setReceiveAmount(temp)
  }
  return (
    <div className="w-full h-[150px] p-3 bg-white rounded-[15px] flex justify-between items-center">
      <div className="flex flex-col text-white_1 font-overpass_meno">
        <p className="text-xs text-black_3">You receive</p>
        <input
          type="text"
          value={receiveAmount}
          className="w-[150px] !outline-none !border-none !ring-0 focus:outline-none focus:border-none focus:ring-0
                        font-pragmatica_bold text-4xl font-bold"
          onChange={onChangeReceiveAmount}
        />
      </div>
      <button
        type="button"
        className="px-1 py-1 rounded-full text-black font-bold border border-black_3
           transition duration-[300ms] hover:scale-[1.01] 
           flex justify-between items-center gap-4"
      >
        <Media
          link="/images/logo/logo-title.webp"
          blurLink="/images/logo/logo-title.webp"
          containerClasses="w-[32px] aspect-[1/1] rounded-full"
        />
        <span className="pr-2">BITBOT</span>
      </button>
    </div>
  )
}

export default Receive
