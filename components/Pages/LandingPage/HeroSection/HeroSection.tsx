import Container from "@/components/Container"
import FadeInWhenVisible from "@/components/FadeInWhenVisible"

const HeroSection = () => (
  <Container>
    <div className="relative mt-[200px]">
      <FadeInWhenVisible className="flex flex-col jusitify-center items-center w-full relative z-[1]">
        <p className="font-fixedsys font-bold text-green text-4xl">The world’s first</p>
        <p className="font-overpass_meno font-bold text-green text-[64px]">
          AI POWERED TRADING BOT
        </p>
      </FadeInWhenVisible>
    </div>
  </Container>
)

export default HeroSection
