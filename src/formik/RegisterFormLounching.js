import * as Yup from 'yup'
export const initialValues = {
    mobile: '',
    password: '',
    c_password: ''
};
export const onSubmit = (values)=>{
    alert(JSON.stringify(values));
};
export const validationSchema = Yup.object({
    mobile: Yup.number('فقط باید عدد وارد کنید!')
               .required('شماره همراه نمیتواند خالی باشد!'),
    password: Yup.string()
                 .required('رمزعبور نمیتواند خالی باشد!')
                 .min(8,'رمزعبور باید حداقل هاوی 8 کاراکتر باشد!')
                 .matches(/^(?=.*[A-Z])/g,'رمزعبور باید ترکیبی از حروف کوچک و بزرگ باشد!')
                 .matches(/(?=.*[0-9])/g,'رمز عبور باید هاوی اعداد باشد!')
                 .matches(/(?=.*[-_!@#$%^&*])/g,'رمزعبور باید هاوی یک کاراکتر خاص باشد'),
    c_password: Yup.string()
                   .oneOf([Yup.ref('password') , ''] , 'رمز عبور با تکرار رمز عبور مطابقت ندارد!')
                   .required('تکرار رمز عبور نمیتواند خالی باشد!')
})