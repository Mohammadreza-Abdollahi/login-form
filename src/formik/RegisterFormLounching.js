import * as Yup from 'yup'
export const initialValues = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    loginWith: 'mobile',
};
export const onSubmit = (values)=>{
    alert(values);
};
export const validationSchema = Yup.object({
    email: Yup.string().when('loginWith',{
        is: 'email',
        then: Yup.string().required('ایمیل نمیتواند خالی باشد!')
                 .email('قالب ایمیل صحیح نیست!')
    }),
    mobile: Yup.number().when('loginWith',{
        is: 'mobile',
        then: Yup.number().required('شماره همراه نمیتواند خالی باشد!')
                 .min(10,'شماره همراه باید 10 رقمی باشد!')
    }),
    password: Yup.string()
                 .required('رمزعبور نمیتواند خالی باشد!')
                 .min(8,'رمزعبور باید حداقل هاوی 8 کاراکتر باشد!')
                 .matches(/^(?=.*[A-Z])/g,'رمزعبور باید ترکیبی از حروف کوچک و بزرگ باشد!')
                 .matches(/(?=.*[0-9])/g,'رمز عبور باید هاوی اعداد باشد!')
                 .matches(/(?=.*[-_!@#$%^&*])/g,'رمزعبور باید هاوی یک کاراکتر خاص باشد'),
    confirmPassword: Yup.string()
                        .oneOf([Yup.ref('password') , ''] , 'رمز عبور با تکرار رمز عبور مطابقت ندارد!')
                        .required('تکرار رمز عبور نمیتواند خالی باشد!')
    })