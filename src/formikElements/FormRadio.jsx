import { ErrorMessage, FastField } from "formik";
import FormError from "./FormError";

const FormRadio = (props) => {
    const { label , name , option } = props;
    return ( 
        <>
            <div>
                <label className='text-lg text-label-border' htmlFor={name}>{label}</label>
                <FastField name={name} id={name}>
                {
                    ({field})=>{
                            return option.map((item)=>(
                                    <div key={item.id} className="inline-block ms-3 text-lg text-heading">
                                        <label htmlFor={`radio${item.id}`} className="mx-2">
                                            <input {...field} name={name} value={item.eValue} checked={field.value == item.eValue} id={`radio${item.id}`} type="radio" className="align-middle me-1 before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-label-border text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-9 before:w-9 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-white checked:outline-sub-2 checked:before:bg-sub-2 checked:bg-sub-2 checked:ring-2 checked:ring-sub-1 hover:before:opacity-10"/>
                                            {item.fValue}
                                        </label>
                                    </div>                            
                            )
                    )}        
                }
                </FastField>
                <ErrorMessage name={name} component={FormError}/>
            </div>
        </>
    );
}
 
export default FormRadio;