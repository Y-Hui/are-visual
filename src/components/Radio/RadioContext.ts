import { createContext } from 'react'

export interface RadioContextProps {
  GROUPVALUE: any
  disabledGroup: boolean
  updateGroup: (value: any) => void
}

export default createContext<RadioContextProps>({
  GROUPVALUE: undefined,
  disabledGroup: false,
  updateGroup: () => {
    //
  },
})
