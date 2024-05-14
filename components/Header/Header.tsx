import { useMediaQuery } from "usehooks-ts"
import Link from "next/link"
import AuthButtons from "@/components/AuthButtons"
import Logo from "./Logo"
import useIsMobile from "@/hooks/useIsMobile"
import MobileMenu from "../MobileMenu"
import DesktopMenu from "../DesktopMenu"

const Header = () => {
  const isMacbook = useMediaQuery("(max-width: 1060px)")
  const isMobile = useIsMobile()
  return (
    <div className="bg-white_1 flex justify-between items-center px-4 z-[10]">
      <Link href="/">
        <div>
          <Logo />
        </div>
      </Link>
      {isMacbook ? <MobileMenu /> : <DesktopMenu />}
      {!isMobile && <AuthButtons />}
    </div>
  )
}

export default Header
