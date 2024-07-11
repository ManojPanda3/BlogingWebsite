"use client"
import { useCallback, useEffect, useState } from 'react'

const SizeChecker = ({setSize}) => {
  const [size, setSize] = useState({height:window.innerHeight,width:window.innerWidth});
  // let device ;
  // if 
  useEffect(() => {
    window.addEventListener('resize',()=>setSize({height:window.innerHeight,width:window.innerWidth}));
    return () => {
      window.removeEventListener('resize',()=>setSize({height:window.innerHeight,width:window.innerWidth}));
    }
  }, [])
  return <></>;
}

export default SizeChecker