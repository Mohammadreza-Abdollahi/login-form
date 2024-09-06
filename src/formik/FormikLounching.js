import * as Yup from 'yup'
export const initialValues = {
    email: '',
    password: '',
};
export const onSubmit = (values , submitProps)=>{
    setTimeout(()=>{
        console.log(submitProps);
        submitProps.resetForm();
    },5000)
};
export const validationSchema = Yup.object({
    email: Yup.string()
              .required('ایمیل نمیتواند خالی باشد!')
              .email('قالب ایمیل صحیح نیست!'),
    password: Yup.string('')
                 .required('رمزعبور نمیتواند خالی باشد!')
                 .min(8,'رمزعبور باید حداقل هاوی 8 کاراکتر باشد!')
                 .matches(/^(?=.*[A-Z])/g,'رمزعبور باید ترکیبی از حروف کوچک و بزرگ باشد!')
                 .matches(/(?=.*[0-9])/g,'رمز عبور باید هاوی اعداد باشد!')
                 .matches(/(?=.*[-_!@#$%^&*])/,'رمزعبور باید هاوی یک کاراکتر خاص باشد')
    })