import { Form, Formik } from 'formik';
import Vector from '../assets/img/vector.png'
import FormikControler from '../formikElements/FormikControler';
import { initialValues, onSubmit, validationSchema } from '../formik/FormikLounching';

const LoginForm = () => {
    return ( 
        <>
            <section className="custom-bg p-10">
                <div className="bg-white w-4/5 h-full m-auto rounded-3xl shadow-2xl shadow-slate-300">
                    <section className="w-1/2 inline-block align-top py-28 px-40">
                        <h1 className='text-5xl text-heading mb-3'>ورود</h1>
                        <span className='text-sub-1 text-lg'>حساب کاربری ندارید؟</span><a className='text-sub-2 text-lg mx-1' href="#">ساخت حساب کاربری</a>
                        <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validationSchema={validationSchema}
                        >
                            {
                                Formik=>{
                                    return(
                                        <Form className='mt-16'>
                                            <FormikControler formik={Formik} control={'input'} name={'email'} label={'ایمیل'}/>
                                        </Form>
                                    )
                                }
                            }
                        </Formik>
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