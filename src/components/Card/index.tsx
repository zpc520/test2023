import React from "react";
import { Button, Avatar } from "antd";
import {
  DashOutlined,
  DownOutlined,
  LikeOutlined,
  MessageOutlined,
  ForkOutlined,
  FireOutlined,
  UpOutlined,
} from "@ant-design/icons";
import "./index.css";
import useCards from "./useCards";

type TuserInfo={
    img:string;
    name:string;
    time:string;
}

interface ICard {
  userInfo:TuserInfo,
  imgSrc?:string[];
  description?:React.ReactNode|string,
  viewNumber:number
}

const Card = (props:ICard) => {
  const {imgSrc,description,viewNumber,userInfo:{img,name,time}}=props
  const {isShowButton,isOpen,setIsShowButton,setisOpen}= useCards()
  return (
    <div className="main">
      <header>
        <div className="user">
          <Avatar
            size="large"
            src={img}
          />
          <div className="name">
            <div>{name}</div>
            <div> {time }</div>
          </div>
        </div>
        <DashOutlined />
      </header>

      <main>
        <div className="mainBox">
          <div className="text">
            {description}
          </div>
          {isShowButton &&<Button onClick={()=>setisOpen(!isOpen)} className="button"  icon={isOpen? <UpOutlined />:<DownOutlined />} type="link">
            展开
          </Button>}
        </div>
        <>
          <ul>
            {imgSrc?.slice(0,9).map((item:string)=>{
              return <li key={item}>
               <img width={120} src={item}  alt=''/>
               </li>
            })}
          </ul>
        </>
      </main>
      <footer>
        <div>浏览量 {viewNumber} 次</div>
        <div className="right">
          <FireOutlined />
          <LikeOutlined />
          <ForkOutlined />
          <MessageOutlined />
        </div>
      </footer>
    </div>
  );
};

export default Card;
