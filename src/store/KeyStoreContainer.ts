import { useState } from "react"
import { createContainer } from "unstated-next"
import { KeysType } from "../types/KeysType"

function useKeyStore() {
  const [keyState, setKeyState] = useState<KeysType>({
    clientId: "",
    clientSecret: "",
    authCode: "",
  })

  const handleKeyState = (name: string, value: string) => {
    setKeyState(prevState => ({ ...prevState, [name]: value }))
  }

  return {
    keyState,
    handleKeyState,
  }
}

const KeyStoreContainer = createContainer(useKeyStore)

export default KeyStoreContainer
