import Image from "next/image"

const GifImage = ({ source }) => (
  <div className="w-[76px]">
    <Image src={`/images/landing/${source}`} width={76} height={76} alt="Picture of the author" />
  </div>
)

export default GifImage
