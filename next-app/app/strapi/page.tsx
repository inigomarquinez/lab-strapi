"use client"
import {getPageData} from "@/app/actions/getPageData";
import {NextPage} from "next";
// @ts-ignore
import {FormBuilder} from "@guidesmiths/react-form-builder"
import Header from "@/src/components/Header";
import React from "react";

const StrapiPage: NextPage = async () => {
  const {form, backgroundImage, title} = await getPageData()
  return (
    <div className="flex flex-col items-center justify-center">
      <Header img={backgroundImage} title={title}/>
      <div className="flex flex-col w-1/2 mx-3 ">
        {form && <FormBuilder form={form} onSubmit={() => console.log("sent")}/>}
      </div>
    </div>
  )
}


export default StrapiPage