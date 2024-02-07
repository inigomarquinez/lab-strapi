"use client"
import {getPageData} from "@/app/actions/getPageData";
import {NextPage} from "next";
// @ts-ignore
import {FormBuilder} from "@guidesmiths/react-form-builder"
import Header from "@/src/components/Header";
import React, {useEffect} from "react";
import {PageDataModel} from "@/app/actions/models";
import {useGetStrapiData} from "@/app/hooks/useGetStrapiData";

const StrapiPage: NextPage = () => {
  const [locale, setLocale] = React.useState("en")
  const {formData, isLoaded} = useGetStrapiData(locale)
  return (
    <>
      {!isLoaded ? <div>Loading...</div> : (
        <>
          {formData && <div className="flex flex-col items-center justify-center">
            <Header img={formData.backgroundImage} title={formData?.title}
                    onLanguageChange={(locale) => setLocale(locale)}/>

            <div className="flex flex-col w-1/2 mx-3 ">
              {formData?.form && <FormBuilder form={formData?.form} onSubmit={() => console.log("sent")}/>}
            </div>
          </div>
          }
        </>
      )
      }
    </>
  )
}


export default StrapiPage