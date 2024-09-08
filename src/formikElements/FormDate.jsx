import { Tooltip, Zoom } from "@mui/material";
import { useState } from "react";

const formDays = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
const formMonth = [
    {id: 1 , value: 'فروردین'},
    {id: 2 , value: 'اردیبهشت'},
    {id: 3 , value: 'خرداد'},
    {id: 4 , value: 'تیر'},
    {id: 5 , value: 'مرداد'},
    {id: 6 , value: 'شهریور'},
    {id: 7 , value: 'مهر'},
    {id: 8 , value: 'ابان'},
    {id: 9 , value: 'ادر'},
    {id: 10 , value: 'دی'},
    {id: 11 , value: 'بهمن'},
    {id: 12 , value: 'اسفند'}
]
const FormDate = (props) => {
    const { label , name , formik } = props;

    const [day , setDay] = useState(19);
    const [month , setMonth] = useState(3);
    const [year , setYear] = useState();
    const [disabledDate , setDisabledDate] = useState(false);

    const handleCloseDate = ()=>{
        setDisabledDate(!disabledDate);
        formik.setValues({...formik.values, [name] : `${year} / ${month} / ${day}`});
    }
    console.log(formik);
    return ( 
        <>
            <div className="relative">
                <Tooltip arrow placement="left" title={<span className="text-base">{disabledDate ? 'تغییر زمان' : 'تایید زمان'}</span>}>
                    <div onClick={handleCloseDate} className={`absolute -left-8 top-7 -translate-x-1/2 text-3xl p-1 cursor-pointer rounded-full ${disabledDate ? 'text-red-500' : 'text-green-500'}`}>
                        <i className={`${disabledDate ? 'fa-solid fa-xmark' : 'fa-solid fa-check'}`}></i>
                    </div>
                </Tooltip>
                <label className={`${formik.errors[name] ? 'text-red-500' : 'text-label-border'} text-sm mx-3`} htmlFor={name}>{label}</label>
                <div className={`${formik.errors[name] ? 'ring-red-500 focus:ring-red-500  placeholder:text-red-500': 'ring-label-border focus:ring-sub-2 placeholder:text-lg  placeholder:text-gray-400'} overflow-hidden transition duration-200 block m-auto w-full rounded-xl outline-none text-heading ring-2 ring-label-border focus:ring-2 text-xl relative`}>
                    <section className={`flex justify-around w-full relative pl-16 ${formik.errors[name] ? 'text-red-500' : ''}`}>
                                <div className="w-full text-center align-middle">
                                    <select disabled={disabledDate} value={day} onChange={(e)=>setDay(e.target.value)} name="day" id="day" className="w-full focus:outline-none appearance-none text-center text-xl px-3 py-3 bg-transparent disabled:text-slate-950">
                                        {
                                            formDays.map((item)=>{
                                                return(
                                                    <option value={item}>{item}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className={`w-full text-center align-middle ring-2 ${formik.errors[name] ? 'ring-red-500' : 'ring-label-border'}`}>
                                    <select disabled={disabledDate} value={month} onChange={(e)=>setMonth(e.target.value)} name="day" id="day" className="w-full focus:outline-none appearance-none text-center text-xl px-3 py-3 bg-transparent disabled:text-slate-950">
                                        {
                                            formMonth.map((item)=>{
                                                return(
                                                    <option value={item.id}>{item.value}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="w-full text-center align-middle">
                                    <input readOnly={disabledDate} value={year} onChange={(e)=>setYear(e.target.value)} placeholder="سال" type="text" className={`w-full px-3 py-3 bg-transparent focus:outline-none text-center text-xl read-only:text-slate-500 ${formik.errors[name] ? 'placeholder:text-red-500' : ''}`}/>
                                </div>
                                {/* <div onClick={handleCloseDate} className="w-full text-center align-middle ring-2 ring-label-border bg-sub-2 text-xl text-white px-3 py-3">
                                    <button>
                                        <i class={`${disabledDate ? 'fa-solid fa-xmark' : 'fa-solid fa-check'}`}></i>
                                    </button>
                                </div> */}
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
                    </section>
                    {/* <FastField name={name}>
                        {props=><input {...props.field} type={type} id={name} placeholder={formik.errors[name] ? formik.errors[name] : placeholder} className={`${formik.errors[name] ? 'ring-red-500 focus:ring-red-500  placeholder:text-red-500': 'ring-label-border focus:ring-sub-2 placeholder:text-lg  placeholder:text-gray-400'} transition duration-200 block m-auto w-full rounded-xl outline-none px-3 py-3 text-heading ring-2 ring-inset ring-label-border focus:ring-2 text-xl`}/>}
                    </FastField> */}
                    {/* {
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
                    } */}
                </div>
            </div>
        </>
     );
}
 
export default FormDate;