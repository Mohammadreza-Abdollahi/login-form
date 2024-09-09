import * as Yup from 'yup'
export const initialValues = {
    email: '',
    password: '',
    // date: '',
    image: null
};
export const onSubmit = (values , submitProps)=>{
    alert(JSON.stringify(values))
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
                 .matches(/(?=.*[-_!@#$%^&*])/,'رمزعبور باید هاوی یک کاراکتر خاص باشد'),
    // date: Yup.string().required('تاریخ نمیتواند خالی باشد!'),
    image: Yup.mixed()
              .required('شما باید تصویر خود را اپلود کنبد!')
              .test('fileSize' , 'حجم فایل باید کمتر از 200 کیلوبایت باشد!' , value=> value.size <= (200 * 1024))
              .test('fileFormat' , 'فرمت فایل باید Jpeg باشد!' , value=> value.type === 'image/jpeg')
    })