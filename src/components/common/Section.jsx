/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Section = () => {
    return (
        <div className="bg-[#000000] w-[300px] h-[350px]  sm:w-[300px] sm:h-[388px] md:w-[300px] md:h-[382px] lg:w-[400px] lg:h-[533px] xl:w-[380px] xl:h-[452px] 2xl:w-[541px] 2xl:h-[805px] 3xl:h-[846px] absolute top-[140px] md:top-36 lg:top-[170px] xl:top-[155px] 2xl:top-[250px] right-0 rounded-bl-[20px] rounded-tl-[20px]">
            <img
                src="/assets/arrow.svg"
                className="w-[35px] h-[50px] lg:w-[45px] lg:h-[60px] xl:w-[52px] xl:h-[68px] ml-3 mt-5 lg:ml-3 lg:mt-5 xl:ml-7 xl:mt-7"
                alt=""
            />
            <img
                src="/assets/signature.svg"
                alt=""
                className="absolute left-14 top-11  lg:left-20 lg:top-11 xl:left-24 xl:top-14 w-[150px] h-[50px] lg:w-[213px] lg:h-[70px]"
            />
            <hr className="ml-3 mr-3 xl:ml-6 xl:mr-6" />

            <img src="/assets/cardImg.jpeg" alt="" className="ml-14 sm:ml-10 md:ml-16 xl:ml-24  2xl:ml-4 w-[175px] sm:w-[200px] md:w-[190px] lg:w-[290px] xl:w-[225px] 2xl:w-[450px] 3xl:w-[475px]" />
        </div>
    )
}

export default Section