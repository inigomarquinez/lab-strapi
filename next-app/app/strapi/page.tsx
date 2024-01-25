"use client"
import {getForm} from "@/app/actions/getForm";
// @ts-ignore

import {FormBuilder} from "@guidesmiths/react-form-builder"

const StrapiPage = async () => {
    const {form} = await getForm()
    return (
        <div className="flex items-center justify-center max-h-full h-screen">
            <div className="flex">
                {form && <FormBuilder form={form} onSubmit={(submittedData:any) => console.log(submittedData)}/>}
            </div>
        </div>
    )
}


export default StrapiPage