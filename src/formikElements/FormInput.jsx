import { ErrorMessage, FastField } from "formik";
import FormError from "./FormError";

const FormInput = (props) => {
    const { label , name , placeholder , type , formik } = props
    console.log(props.formik);
    return ( 
        <>
            <div className='mb-5'>
                <label className='text-sm text-label-border mx-3' htmlFor={name}>{label}</label>
                <div className="relative">
                    <FastField name={name}>
                        {props=><input {...props.field} type={type} id={name} placeholder={formik.errors[name] ? formik.errors[name] : null} className={`${formik.errors[name] ? 'ring-red-500 focus:ring-red-500': 'ring-label-border focus:ring-sub-2'} transition duration-200 block m-auto w-full rounded-xl outline-none px-3 py-3 text-heading ring-2 ring-inset ring-label-border placeholder:text-gray-400 focus:ring-2 text-xl`}/>}
                    </FastField>
                    {
                        formik.errors[name] ? (
                        <div className="-translate-y-1/2 -translate-x-1/2 top-1/2 left-6 absolute w-7 h-7 text-center">
                            <i title={formik.errors[name]} className="fa-solid fa-circle-exclamation text-red-500 align-top text-2xl"></i>
                        </div>
                        ) : (
                            null
                        )
                    }
                </div>
                {/* <ErrorMessage name={name} component={FormError}/> */}
            </div>
        </>
    );
}
 
export default FormInput;