"use client"
import React from 'react'

const Button = ({children,className,style,onClick}) => {
  return (
    <button onClick={onClick} className={className} style={style}>{children}</button>
  )
}
export const Login= ({children,className}) => {
  const handleLogin=()=>{

  };
  return (
    <Button onClick={handleLogin} className={"hover:bg-gray-300  text-center cursor-pointer font-medium "+className}>{children}</Button>
  )
}
export const SingUp= ({children,className}) => {
  const handleSingup=()=>{

  };
  return (
    <button onClick={handleSingup} className={"p-3 hover:bg-gray-900 bg-black text-white text-center cursor-pointer font-medium "+ className}>{children}</button>
  )
}

export default Button;