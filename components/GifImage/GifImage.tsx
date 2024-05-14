import Image from "next/image"

const GifImage = ({ source = "", size = "" }) => (
  <div className={`w-${size}px`}>
    <Image
      src={`/images/landing/${source}`}
      width={size}
      height={size}
      alt="Picture of the author"
    />
  </div>
)

export default GifImage
