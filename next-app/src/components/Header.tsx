import React from "react";

export interface HeaderModel {
  img: string
  title: string,
  children?: React.ReactNode
}

const Header: React.FC<HeaderModel> = ({img, title}) => {
  return (
    <div className="flex items-center justify-center w-1/2">
      <div className="flex flex-col">
        <h1 className={"text-4xl text-center"}>{title}</h1>
        <figure className="flex justify-center">
          <img className="w-screen" src={img} alt="logo"/>
        </figure>
      </div>
    </div>
  )
}
export default Header