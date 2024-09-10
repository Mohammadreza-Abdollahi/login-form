import { Field, Form, Formik } from 'formik';
import Vector from '../assets/img/vector.png'
import FormikControler from '../formikElements/FormikControler';
import { initialValues, onSubmit, validationSchema } from '../formik/LoginFormLounching';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    return ( 
        <>
            <section className="custom-bg p-10">
                <div className="bg-white w-4/5 m-auto rounded-3xl shadow-2xl shadow-slate-300 flex items-center">
                    <section className="w-1/2 inline-block align-top py-20 px-40">
                        <h1 className='text-5xl text-heading mb-3'>ورود</h1>
                        <span className='text-sub-1 text-lg'>حساب کاربری ندارید؟</span><Link to={'/register'} className='text-sub-2 text-lg mx-1' href="#">ساخت حساب کاربری</Link>
                        <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validationSchema={validationSchema}
                        validateOnBlur={false}
                        // validateOnChange={false}
                        >
                            {
                                Formik=>{
                                    return(
                                        <Form className='mt-8'>
                                            <div className='mb-3'>
                                                <FormikControler {...Field} formik={Formik} type={'text'} control={'input'} name={'email'} label={'ایمیل'} placeholder={'ایمیل خود را وارد کنید...'}/>
                                            </div>
                                            <div className='mb-3'>
                                                <FormikControler formik={Formik} type={'password'} control={'password'} name={'password'} label={'رمزعبور'} placeholder={'رمزعبور خود را وارد کنید...'}/>
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
 
export default LoginForm;