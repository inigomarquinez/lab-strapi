import React from "react";
import LanguageMenu from "@/src/components/LanguageMenu";

export interface HeaderModel {
  img: string
  title: string,
  children?: React.ReactNode
  onLanguageChange: (locale:string) => void
}

const Header: React.FC<HeaderModel> = ({img, title, onLanguageChange}) => {
  return (
    <div className="flex items-center justify-center w-1/2">
      <div className="flex flex-col">
        <h1 className={"text-4xl text-center"}>{title}</h1>
        <figure className="flex justify-center">
          <img className="w-screen" src={img} alt="logo"/>
        </figure>
        <LanguageMenu onLanguageChange={onLanguageChange}/>
      </div>
    </div>
  )
}
export default Header