import Container from "@/components/Container"
import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import Media from "@/shared/Media"

const Genesis = () => (
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
        <p className="font-seoge text-green font-bold text-6xl text-center leading-[130%]">
          Genesis $Bitbot Allocation
        </p>
        <p
          className="font-seoge text-black_3 font-300 text-xl text-center 
                    py-4 leading-[150%] tracking-[3px]"
        >
          $BITBOT token holders will receive up to 50% of the <br /> platform revenue share
        </p>
      </div>
      <div className="w-full flex mt-[50px]">
        <Media
          link="/images/landing/pieChart.webp"
          blurLink="/images/landing/pieChart.webp"
          containerClasses="w-[750px] aspect-[750/514] rounded-full mx-auto"
        />
      </div>
    </FadeInWhenVisible>
  </Container>
)

export default Genesis
