import Container from "@/components/Container"
import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import GifImage from "@/components/GifImage"
import Media from "@/shared/Media"
import Lists from "./RoadLists.json"

const RoadMap = () => (
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
          Roadmap
        </p>
        <p
          className="font-seoge text-black_3 font-300 text-xl text-center 
                          py-4 leading-[150%] tracking-[3px] "
        >
          {`Bitbot's Odyssey:`} <br /> Revolutionizing Trading in 2024 and Beyond.
        </p>
      </div>
      <div className="grid grid-cols-3 justify-center gap-[20px] items-center mt-[50px]  md-[100px]">
        {Lists.map((list) => (
          <div
            key={list.image}
            className="col-span-1 p-10 bg-dark_green_2 rounded-[15px] flex flex-col justify-center items-center"
          >
            <GifImage source={list.image} size="150" />
            <p className="text-white mt-2 font-seoge text-3xl text-green_3 tracking-[2px] text-left">
              {list.title}
            </p>
            <div className="text-white mt-3">
              {list.content.map((data, index) => (
                <p key={index}>
                  <span className="text-sm md:text-base text-blue_2 px-2 transfrom translate-y-[-3px]">
                    •
                  </span>{" "}
                  {data}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </FadeInWhenVisible>
  </Container>
)

export default RoadMap
