import GradientSpan from "../GradientSpan"

const GradientButton = ({ children, containerClasses = "", onClick = () => {} }) => (
  <GradientSpan
    className={`px-[30px] h-[60px] 
      flex items-center justify-center 
      rounded-[12px] text-white cursor-pointer 
      transition duration-[300ms] hover:scale-[1.1] ${containerClasses}`}
  >
    <button type="button" onClick={onClick}>
      {children}
    </button>
  </GradientSpan>
)

export default GradientButton
