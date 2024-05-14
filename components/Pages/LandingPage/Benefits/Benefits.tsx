import Container from "@/components/Container"
import Card from "./Card"
import lists from "./BenefitList.json"

const Benefit = () => (
  <Container>
    <div className="w-[300px] md:w-[850px] mx-auto mt-[50px] grid grid-cols-1 justify-center items-center md:grid-cols-2 gap-[30px]">
      {lists.map((list) => (
        <Card key={list.image} data={list} />
      ))}
    </div>
  </Container>
)

export default Benefit
