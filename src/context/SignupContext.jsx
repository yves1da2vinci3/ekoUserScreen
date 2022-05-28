import React,{createContext, useState} from 'react'

export const SignupContext = createContext()
export default  ({children}) => {
    const [FieldInfo,setFieldInfo] = useState({})
  return (
    <SignupContext.Provider value={{
      FieldInfo,
      setFieldInfo,
    }} >
      {children}
        </SignupContext.Provider>
  )
}

