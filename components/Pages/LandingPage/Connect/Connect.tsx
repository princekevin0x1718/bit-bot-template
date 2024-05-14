import Container from "@/components/Container"
import CurrentPrice from "./CurrentPrice"
import Pay from "./Pay"
import Receive from "./Receive"
import ConnectButton from "./ConnectButton"

const Connect = () => (
  <Container>
    <div
      className="flex flex-col justify-center items-center 
      md:w-[460px] h-[505px] gap-[15px] bg-white_0 p-3 mx-auto rounded-[15px]
        center text-white transform translate-y-[50px]"
    >
      <CurrentPrice />
      <Pay />
      <Receive />
      <ConnectButton />
    </div>
  </Container>
)

export default Connect
