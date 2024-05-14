import LanguageSetting from "../Header/LanguageSetting"
import ConnectedWallet from "./ConnectedWallet"

const AuthButtons = () => (
  <div className="flex gap-[25px] items-center">
    <LanguageSetting />

    <ConnectedWallet />
  </div>
)

export default AuthButtons
