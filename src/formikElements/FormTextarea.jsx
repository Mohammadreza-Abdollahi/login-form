import { ErrorMessage, FastField } from "formik";
import FormError from "./FormError";

const FormTextarea = (props) => {
    const { label , name , placeholder , control } = props
    return ( 
        <>
            <div className='mb-6'>
                <label className='text-lg' htmlFor={name}>{label}</label>
                <FastField name={name} placeholder={placeholder} type={control} as={control} className="mt-2 transition duration-200 block m-auto w-full rounded-md outline-none px-3 py-3 text-slate-800 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-purple-500 text-xl"/>
                <ErrorMessage name={name} component={FormError}/>
            </div>
        </>
    );
}
 
export default FormTextarea;