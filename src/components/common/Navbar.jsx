/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import { FaRegUser } from "react-icons/fa6";
import { getDate, getDay, getMonth, getYear, getTime } from "../../lib/getDate";
import { getLocation } from "../../lib/getLocation";
import { getVisitor } from "../../lib/helper";
import Section from './Section';
const Navbar = ({ isOpen }) => {
    const [visitor, setVisitor] = useState();
    const [date, setDate] = useState([{
        currentDay: getDay(),
        currentDate: getDate(),
        currentMonth: getMonth(),
        currentYear: getYear(),
        currentTime: getTime(),
    }])

    useEffect(() => {
        let location = getLocation();
        setVisitor(getVisitor(location.latitude, location.longitude));
        const visitorData = JSON.parse(localStorage.getItem("visitor"));
        setVisitor(visitorData);
        setInterval(() => {
            Promise.all([getDate(), getMonth(), getDay(), getYear(), getTime()])
                .then(values => {
                    const [currentDate, currentMonth, currentYear, currentDay, currentTime] = values;
                    setDate({ ...date, currentDay, currentDate, currentMonth, currentYear, currentTime });
                })
                .catch(error => {
                    console.error("Error:", error);
                });
        }, 1000)
    }, [])

    return (
        <div>
            <div className="sm:ml-12 sm:mr-5 sm:mt-7 md:ml-11 md:mt-6 md:mr-7 lg:ml-14 lg:mr-9 lg:mt-8 xl:ml-14 xl:mr-7 xl:mt-[35px] 2xl:ml-14 2xl:mr-[73px] 2xl:mt-[75px] flex items-center justify-between ">
                <img
                    src="/assets/zi_doc_logo.svg"
                    alt="zi_doc"
                    className="  cursor-pointer sm:w-[60px]  lg:w-[90px]  2xl:w-[129px] 2xl:mr-40"

                />
                <img
                    src="/assets/logo.svg"
                    alt="logo"
                    className=" sm:w-[100px] lg:w-[150px] sm:ml-24 md:ml-28 xl:ml-0  2xl:w-[204px]"
                />

                <div className="flex  items-center sm:space-x-3 md:space-x-5 lg:space-x-6 xl:space-x-5 2xl:space-x-10">
                    <div>
                        <p className="font-lato text-[6px] lg:text-[8px] 2xl:text-[12px] tracking-[1px] xl:tracking-[2px]">
                            {date.currentTime} {visitor?.visitor_data?.cityName} {visitor?.visitor_data.countryName}
                        </p>
                        <p className="font-lato text-[#BE9F56] ml-1.5 xl:ml-2 2xl:ml-1 text-end text-[6px] lg:text-[8px] 2xl:text-[12px] tracking-[1px] xl:tracking-[2px]">
                            {date.currentYear}, {date.currentDate} {date.currentMonth} {date.currentDay}
                        </p>
                    </div>
                    <img
                        src={visitor?.visitor_data.country.app_icon}
                        alt="flag logo"
                        className="  w-[10px] lg:w-[20px]  2xl:w-[25px]"
                    />
                    <FaRegUser className="w-[10px] lg:w-[21px] " />
                </div>
            </div>
            <div className="">
                <img
                    src="/assets/ZIMA_AI.svg"
                    alt="AI_LOGO"
                    className="absolute sm:right-[28px] lg:right-[42px] xl:right-[35px] 2xl:right-[80px] w-[130px] md:w-[150px] xl:w-[150px] 2xl:w-[184px]"
                />
                <p className={`${isOpen && 'hidden'} font-lato tracking-[1px] absolute text-[10px] md:text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] sm:right-[28px] lg:right-[40px] xl:right-[34px] 2xl:right-[80px] font-bold sm:top-28 md:top-[110px] lg:top-[135px] xl:top-[120px] 2xl:top-[210px]`}>
                    TRY FOR FREE
                </p>
                <Section />
            </div>
        </div>
    )
}

export default Navbar