import Link from "next/link"

const DesktopMenu = () => (
  <div>
    <div className="flex font-overpass_meno m-auto gap-[30px] xl:gap-[45px]">
      <Link href="/#">
        <div className="cursor-pointer text-sm leading-[30px] text-white_2">Buy Now</div>
      </Link>
      <Link href="/#">
        <div className="cursor-pointer  text-sm leading-[30px] text-white_2">About</div>
      </Link>
      <Link href="/#">
        <div className="cursor-pointer text-sm leading-[30px] text-white_2">Whitepaper</div>
      </Link>
      <Link href="/#">
        <div className="cursor-pointer text-sm leading-[30px] text-white_2">Support</div>
      </Link>
      <Link href="/#">
        <div className="cursor-pointer text-sm leading-[30px] text-white_2">Media</div>
      </Link>
      <Link href="/#">
        <div className="cursor-pointer text-sm leading-[30px] text-white_2">Socials</div>
      </Link>
      <Link href="/#">
        <div className="cursor-pointer text-sm leading-[30px] text-white_2">How to buy</div>
      </Link>
    </div>
  </div>
)

export default DesktopMenu
