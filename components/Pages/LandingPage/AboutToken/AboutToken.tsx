import Container from "@/components/Container"
import Explanation from "./Explanation"

const AboutToken = () => (
  <Container>
    <div className="w-full mt-[250px] flex flex-col justify-center items-center text-white">
      <p className="font-fixedsys font-bold text-green text-3xl">Trade, Earn, Retire</p>
      <p className="font-overpass_meno font-bold text-green text-[56px] mt-3">$BITBOT Token</p>
      <p
        className="font-seoge text-black_3 font-300 text-xl text-center 
                    py-4 leading-[150%] tracking-[3px]"
      >
        Receive the best revenue share, enjoy exclusive <br />
        {` perks, early presale access, and steer Bitbot's`} <br />
        strategy alongside top traders.
      </p>
    </div>
    <Explanation />
  </Container>
)

export default AboutToken
