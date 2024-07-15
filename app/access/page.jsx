"use client"
import Button from '@/components/Buttons';
import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react'

const Access = () => {
  const {data: session}= useSession();
  if(session && session.user){
    return <Button onClick={()=>{signOut()}}>SingOut</Button>
  }
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <Button onClick={()=>signIn()} className="bg-orange-500 font-bold text-xl w-[12rem] h-[5rem] shadow-sm shadow-black rounded-1">Google</Button>
    </div>
  )
}

export default Access;