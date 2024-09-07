import { Field, Form, Formik } from 'formik';
import Vector from '../assets/img/vector.png'
import FormikControler from '../formikElements/FormikControler';
import { initialValues, onSubmit, validationSchema } from '../formik/RegisterFormLounching';

const loginWith = [
    {id: 1 , fValue: 'موبایل' , eValue: 'mobile'},
    {id: 2 , fValue: 'ایمیل' , eValue: 'email'}
]

const RegisterForm = () => {
    return ( 
        <>
            <section className="custom-bg p-10">
                <div className="bg-white w-4/5 m-auto rounded-3xl shadow-2xl shadow-slate-300 flex items-center">
                    <section className="w-1/2 inline-block align-top py-7 px-40">
                        <h1 className='text-5xl text-heading mb-3'>ثبت نام</h1>
                        <span className='text-sub-1 text-lg'>حساب کاربری دارید؟</span><a className='text-sub-2 text-lg mx-1' href="#">ورود</a>
                        <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validationSchema={validationSchema}
                        validateOnBlur={false}
                        >
                            {
                                Formik=>{
                                    return(
                                        <Form className='mt-4'>
                                            <div className='mb-3'>
                                                <FormikControler {...Field} formik={Formik} type={'text'} control={'input'} name={'firstName'} label={'نام'} placeholder={'نام خود را وارد کنید...'}/>
                                            </div>
                                            <div className='mb-3'>
                                                <FormikControler {...Field} formik={Formik} type={'text'} control={'input'} name={'lastName'} label={'نام خانوادگی'} placeholder={'نام خانوادگی خود را وارد کنید...'}/>
                                            </div>
                                            <div className='mb-3'>
                                                <FormikControler {...Field} formik={Formik} type={'text'} control={'input'} name={'userName'} label={'نام کاربری'} placeholder={'نام کاربری خود را وارد کنید...'}/>
                                            </div>
                                            <div className='mb-3'>
                                                <FormikControler option={loginWith} formik={Formik} control={'radio'} name={'loginWith'} label={'ثبت نام با :'}/>
                                            </div>
                                            {
                                                Formik.values.loginWith == 'mobile' ? (
                                                <div className='mb-3'>
                                                    <FormikControler {...Field} formik={Formik} type={'text'} control={'input'} name={'mobile'} label={'شماره همراه'} placeholder={'شماره همراه  خود را وارد کنید...'}/>
                                                </div>
                                                ) : (
                                                <div className='mb-3'>
                                                    <FormikControler {...Field} formik={Formik} type={'text'} control={'input'} name={'email'} label={'ایمیل'} placeholder={'ایمیل  خود را وارد کنید...'}/>
                                                </div>
                                                )
                                            }
                                            <div className='mb-3'>
                                                <FormikControler {...Field} formik={Formik} type={'text'} control={'password'} name={'password'} label={'رمزعبور '} placeholder={'رمز عبور خود را وارد کنید...'}/>
                                            </div>
                                            <div className='mb-3'>
                                                <FormikControler {...Field} formik={Formik} type={'text'} control={'password'} name={'confirmPassword'} label={'تکرار رمز عبور '} placeholder={'تکرار رمز عبور خود را وارد کنید...'}/>
                                            </div>
                                            <div>
                                                <button onClick={Formik.handleSubmit} className='w-full text-center transition duration-200 bg-gradient-to-r from-btn-1 to-btn-2 text-white text-xl py-4 hover:scale-110 rounded-xl mt-3 mb-3'>ثبت نام</button>
                                            </div>
                                        </Form>
                                    )
                                }
                            }
                        </Formik>
                        <a className='text-label-border text-lg' href="#">رمزعبور خود را فراموش کرده اید؟</a>
                    </section>
                    <section className="w-1/2 inline-block align-middle py-14">
                        <div>
                            <img src={Vector} alt="" className='block'/>
                        </div>
                    </section>
                </div>
            </section>
        </>
     );
}
 
export default RegisterForm;