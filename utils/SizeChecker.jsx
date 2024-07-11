// "use client"
import { useEffect, useState } from 'react'

const SizeChecker = ({setSize}) => {
  useEffect(() => {
    window.addEventListener('resize',()=>setSize({height:window.innerHeight,width:window.innerWidth}));
    return () => {
      window.removeEventListener('resize',()=>setSize({height:window.innerHeight,width:window.innerWidth}));
    }
  }, [])
  return <></>;
}

export default SizeChecker