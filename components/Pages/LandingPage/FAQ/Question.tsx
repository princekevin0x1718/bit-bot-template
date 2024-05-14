import { motion } from "framer-motion"
import { useState } from "react"

const Question = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      className="w-[600px]
        flex justify-center py-2"
    >
      <div className={`w-full px-4 md:px-0 border border-white_2 rounded-[15px] overflow-hidden `}>
        <div className={`w-full flex items-center justify-between p
        y-1 text-base md:!text-lg md:!text-[27px]
        ${ isExpanded ? "bg-black text-white hover:bg-black_3" : "bg-dark_green_1 text-green"} `}>
          <button
            type="button"
            className="w-full mrounded-[10px] p-4 text-left text-sm md:text-[18px] leading-[120%]"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {data.title}
          </button>
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            animate={{
              rotate: isExpanded ? "180deg" : "0deg",
            }}
            initial={{
              rotate: isExpanded ? "0deg" : "180deg",
            }}
            transition={{
              duration: 0.25,
            }}
          >
            <span className="px-4">{isExpanded? "-" : "+"}</span>
          </motion.button>
        </div>
        <motion.div
          animate={{
            height: isExpanded ? "auto" : "0px",
          }}
          initial={{
            height: "0px",
          }}
          transition={{
            duration: 0.5,
          }}
          className="overflow-hidden h-fit"
        >
          <motion.p
            className="md:p-4 leading-[1.5]
                    font-radikal_light text-sm md:text-[16px]
                    text-black_3 px-4"
            animate={{
              opacity: isExpanded ? 1 : 0,
            }}
            initial={{
              opacity: isExpanded ? 0 : 1,
            }}
            transition={{
              delay: isExpanded ? 0.5 : 0,
              duration: 0.5,
            }}
          >
            {data.answer}
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}

export default Question
