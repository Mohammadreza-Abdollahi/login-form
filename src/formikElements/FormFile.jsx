import { Tooltip, Zoom } from "@mui/material";

const FormFile = (props) => {
    const { label , name , placeholder , formik } = props
    console.log(formik)
    return ( 
        <>
            <div>
                <label className={`${formik.errors[name] ? 'text-red-500' : 'text-label-border'} text-sm mx-3`} htmlFor={name}>{label}</label>
                <div className="relative">
                    <Tooltip arrow placement="top" TransitionComponent={Zoom} title={
                        <>
                            <span className="text-base">برای اپلود فایل کلیک کنید!</span>
                        </>
                    }>
                        <input type="text" value={formik.values[name] ? formik.values[name].name : null} className={`${formik.errors[name] ? 'ring-red-500 focus:ring-red-500  placeholder:text-red-500': 'ring-label-border focus:ring-sub-2 placeholder:text-lg  placeholder:text-gray-400'} transition duration-200 block m-auto w-full rounded-xl outline-none px-3 py-3 text-heading ring-2 ring-inset ring-label-border focus:ring-2 text-xl pl-12`} placeholder={placeholder}/>
                        <input type="file" onChange={(e)=>{formik.setFieldValue(name , e.target.files[0]);console.log(formik.values);}} className="absolute w-full h-full -translate-y-1/2 top-1/2 block mb-5 text-sm text-gray-900 cursor-pointer focus:outline-none opacity-0"/>
                        {
                            formik.errors[name] ? (
                                <Tooltip className="text-lg" placement="left" arrow TransitionComponent={Zoom} title={
                                    <>
                                        <span className="text-base">{formik.errors[name]}</span>
                                    </>
                                }>
                                    <div className="-translate-y-4 -translate-x-1/2 top-1/2 left-6 absolute w-7 h-7 text-center">
                                        <i className="fa-solid fa-circle-exclamation text-red-500 align-top text-2xl"></i>
                                    </div>
                                </Tooltip>
                            ) : (
                                null
                            )
                        }
                    </Tooltip>
                </div>
            </div>
        </>
     );
}
 
export default FormFile;