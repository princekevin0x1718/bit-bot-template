import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import GifImage from "./GifImage"
import lists from "./InfoLists.json"

const TeamInfo = () => (
  <FadeInWhenVisible className="w-fit">
    <div className="w-full grid grid-cols-3 bg-dark_green_2 p-10 rounded-[15px] mt-12">
      {lists.map((list) => (
        <div
          key={list.image}
          className="col-span-1 p-2 flex flex-col justify-center px-10 items-center"
        >
          <GifImage source={list.image} />
          <p className="text-white mt-4 font-seoge text-base tracking-[2px] text-left">
            {list.content}
          </p>
        </div>
      ))}
    </div>
  </FadeInWhenVisible>
)

export default TeamInfo
