import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import GifImage from "./GifImage"

const Card = ({ data }) => (
  <FadeInWhenVisible className="w-fit">
    <div className="flex flex-col w-[400px] h-[400px] bg-dark_green p-10 rounded-[15px]">
      <GifImage source={data.image} />
      <p className="text-white text-3xl font-fixedsys my-6">{data.title}</p>
      <p className="text-white mt-4 font-seoge text-base tracking-[2px]">{data.content}</p>
    </div>
  </FadeInWhenVisible>
)

export default Card
