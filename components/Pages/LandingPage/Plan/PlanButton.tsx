const PlanButton = ({ onClick = () => {} }) => (
  <button
    type="button"
    className="bg-green w-fit px-5 py-2 rounded-full text-center rounded-[15px] bg-black
        border border-black_3 
        transition duration-[300ms] hover:scale-[1.01]"
    onClick={onClick}
  >
    <p className="font-seoge text-xl font-900 tracking-[2px] px-1"> Whitepaper</p>
  </button>
)

export default PlanButton
