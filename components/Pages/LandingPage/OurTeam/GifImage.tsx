import Image from "next/image"

const GifImage = ({ source }) => (
  <div className="w-[200px]">
    <Image src={`/images/landing/${source}`} width={200} height={200} alt="Picture of the author" />
  </div>
)

export default GifImage
