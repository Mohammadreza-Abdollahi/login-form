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
    alert(JSON.stringify(values));
};
export const validationSchema = Yup.object({
    userName: Yup.string()
                 .required('نام کاربری نمیتواند خالی باشد!')
                 .min(6,'نام کاربری باید حداقل هاوی 8 کاراکتر باشد!')
                 .matches(/(?=.*[0-9])/g,'نام کاربری باید هاوی اعداد باشد!')
                 .matches(/^[^$%@#^&*()+="':?></|]+/g,'نام کاربری فقط میتواند هاوی کاراکتر های (- و _) باشد!'),

    email: Yup.string().when('loginWith',{
        is: (loginWith)=>loginWith === 'email',
        then: ()=>(
            Yup.string()
               .required('ایمیل نمیتواند خالی باشد!')
               .email('قالب ایمیل صحیح نیست!')
        )
    }),
    mobile: Yup.number('فقط باید عدد ها را وارد کنید!').when('loginWith',{
        is: (loginWith)=> loginWith ==='mobile',
        then: ()=>(
            Yup.number('فقط باید عدد ها را وارد کنید!')
               .required('شماره همراه نمیتواند خالی باشد!')
               .min(10,'شماره همراه باید 10 رقمی باشد!')
        )
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