import Footer from "../Footer"
import Header from "../Header"
import SeoHead from "../SeoHead"
import { ILayout } from "./types"

const BaseLayout = ({ children }: ILayout) => (
  <div className="w-screen bg-bg_color_dark">
    <div className="w-full fixed top-0 left-0 z-[10]">
      <SeoHead title="BitBot" description="BitBot" image="/images/Logo/logo-title.webp" />
      <Header />
    </div>
    {children}
    <Footer />
  </div>
)

export default BaseLayout
