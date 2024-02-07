import React, {useEffect} from "react";
import {PageDataModel} from "@/app/actions/models";
import {getPageData} from "@/app/actions/getPageData";

export const useGetStrapiData = (locale: string) => {
  const [formData, setFormData] = React.useState<PageDataModel | null>()
  const [isLoaded, setIsLoaded] = React.useState(false)
  useEffect(() => {
    getPageData(locale).then((formData) => {
      setFormData(formData)
      setIsLoaded(true)
    })
  }, [locale])
  return {formData, isLoaded}
}