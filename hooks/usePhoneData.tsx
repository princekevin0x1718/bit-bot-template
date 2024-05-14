import { useState } from "react"
import { toast } from "react-toastify"
// import getPhoneNumber from "@/lib/getPhoneNumber"
// import services from "@/components/EarnModal/services"

const usePhoneData = () => {
  const projectId = "SMS"
  const [isOpenPhoneModal, setIsOpenPhoneModal] = useState(false)
  const togglePhoneModalVisible = () => {
    setIsOpenPhoneModal(!isOpenPhoneModal)
  }
  const [phoneAmount, setPhoneAmount] = useState(0)
  // const [appName, setAppName] = useState(services[0])
  const [serviceName, setServiceName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState([])
  const [loading, setLoading] = useState(false)

  const givePhoneNumber = async () => {
    setLoading(true)
    if (!phoneAmount || !serviceName) {
      setPhoneNumber([`Please enter everything!!!`])
      setLoading(false)
      return
    }
    // let response = await getPhoneNumber(serviceName, projectId, phoneAmount)
  //   const { error } = response as any
  //   if (error) return
  //   setPhoneNumber(response.data)
  //   toast.success("Success!")
  //   setIsOpenPhoneModal(!isOpenPhoneModal)
  //   setLoading(false)
  }

  return {
    phoneAmount,
    setPhoneAmount,
    // appName,
    // setAppName,
    isOpenPhoneModal,
    setIsOpenPhoneModal,
    togglePhoneModalVisible,
    phoneNumber,
    setPhoneNumber,
    givePhoneNumber,
    setServiceName,
    loading,
    setLoading,
  }
}

export default usePhoneData
