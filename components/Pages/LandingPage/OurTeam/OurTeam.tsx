import Container from "@/components/Container"
import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import Media from "@/shared/Media"
import TeamInfo from "./TeamInfo"
import TeamDetail from "./TeamDetail"

const OurTeam = () => (
  <Container>
    <FadeInWhenVisible className="flex flex-col justify-center items-center pt-[100px]">
      <div className="w-full flex">
        <Media
          link="/images/logo/logo.webp"
          blurLink="/images/logo/logo.webp"
          containerClasses="w-[80px] md:w-[142px] aspect-[142/65] rounded-full mx-auto"
        />
      </div>
      <div className="w-full pt-5 pb-1 mx-auto">
        <p className="font-seoge text-green font-bold text-5xl text-center leading-[130%] tracking-[3px]">
          Our Team
        </p>
        <p
          className="font-seoge text-black_3 font-300 text-xl text-center 
                      py-4 leading-[150%] tracking-[3px]"
        >
          It’s an arms race. We’re passionate in racing against <br /> the institutions. That’s why
          we’re bringing the A team.
        </p>
      </div>
      <TeamInfo />
      <TeamDetail />
    </FadeInWhenVisible>
  </Container>
)

export default OurTeam
