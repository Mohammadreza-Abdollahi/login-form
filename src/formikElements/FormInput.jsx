import { Tooltip, Zoom } from "@mui/material";
import { FastField } from "formik";

const FormInput = (props) => {
    const { label , name , type , placeholder , formik } = props
    return ( 
        <>
            <div>
                <label className={`${formik.errors[name] ? 'text-red-500' : 'text-label-border'} text-sm mx-3`} htmlFor={name}>{label}</label>
                <div className="relative">
                    <FastField name={name}>
                        {props=><input {...props.field} type={type} id={name} placeholder={formik.errors[name] ? formik.errors[name] : placeholder} className={`${formik.errors[name] ? 'ring-red-500 focus:ring-red-500  placeholder:text-red-500': 'ring-label-border focus:ring-sub-2 placeholder:text-lg  placeholder:text-gray-400'} transition duration-200 block m-auto w-full rounded-xl outline-none px-3 py-3 text-heading ring-2 ring-inset ring-label-border focus:ring-2 text-xl`}/>}
                    </FastField>
                    {
                        formik.errors[name] ? (
                        <Tooltip className="text-lg" placement="left" arrow TransitionComponent={Zoom} title={
                            <>
                                <span className="text-base">{formik.errors[name]}</span>
                            </>
                        }>
                            <div className="-translate-y-4 -translate-x-1/2 top-1/2 left-6 absolute w-7 h-7 text-center">
                                <i className="fa-solid fa-circle-exclamation text-red-500 align-top text-2xl"></i>
                            </div>
                        </Tooltip>
                        ) : (
                            null
                        )
                    }
                </div>
            </div>
        </>
    );
}
 
export default FormInput;