import FormCheckbox from './FormCheckbox';
import FormDate from './FormDate';
import FormFile from './FormFile';
import FormInput from './FormInput'
import FormPasswordInput from './FormPasswordInfo';
import FormRadio from './FormRadio';
import FormSelect from './FormSelect';
import FormTextarea from "./FormTextarea";

const FormikControler = (props) => {
    switch (props.control) {
        case 'input':
            return(
                <FormInput {...props}/>
            ) 
        case 'password':
            return(
                <FormPasswordInput {...props}/>
            ) 
        case 'textarea': 
            return(
                <FormTextarea {...props}/>
            )
        case 'select': 
            return(
                <FormSelect {...props}/>
            )
        case 'radio': 
            return(
                <FormRadio {...props}/>
            )
        case 'checkbox': 
            return(
                <FormCheckbox {...props}/>
            )
        case 'date': 
            return(
                <FormDate {...props}/>
            )
        case 'file': 
            return(
                <FormFile {...props}/>
            )
        default:
            return
    }
}
 
export default FormikControler;