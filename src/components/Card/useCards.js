import { useState } from "react"

const useCards= ()=>{
  const [isShowButton,setIsShowButton]=useState(true)
  const [isOpen,setisOpen]=useState(false)
  //处理逻辑
  //根据条件控制展示 省略。。。。。


  
  return {
    isShowButton,
    isOpen,
    setIsShowButton,
    setisOpen,
  }
}

export default useCards