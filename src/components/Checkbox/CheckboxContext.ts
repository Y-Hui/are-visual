import { createContext } from 'react'

export interface CheckedContextProps {
  GROUPVALUE: any[]
  disabledGroup: boolean
  updateGroup: (name: any) => void
  removeCheckbox: (name: any) => void
}

export default createContext<CheckedContextProps>({
  GROUPVALUE: [],
  disabledGroup: false,
  updateGroup: () => {
    //
  },
  removeCheckbox: () => {
    //
  },
})
