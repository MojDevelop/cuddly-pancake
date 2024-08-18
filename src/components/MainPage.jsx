// eslint-disable-next-line no-unused-vars
import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation} from 'swiper/modules';
import watch from '../assets/watch_27.png';
import play from '../assets/playstation_31.png';
import Airpad from '../assets/airpad_24.png';
import '../index.css'
import tvroom from '../assets/tv_36.png'
import { PiCheckCircleFill } from "react-icons/pi";
import { GoArrowRight } from "react-icons/go";


const FeaturedProducts = () => {
    return (
        <div className="grid grid-cols-3 grid-rows-3 mt-20 ml-20 ">
            <div className="featured_products_wrap">
                <h3 className="mb-4"> تنوع محصولات </h3>
                <div className="flex items-center mb-4">
                    <div className="h-[3px] w-1/12 bg-red-500"></div>
                    <div className="h-[3px] w-1/6 bg-gray-400"></div>
                </div>

                <div
                    className="electronic_feature_carousel2 arrow_ycenter mb_50"
                    data-slick='{"dots": false}'
                >
                    <div className="item">
                        <div className="flex gap-10 mt-20 items-center">
                            <div className="">
                                <img src={watch} alt={"no Find"}/>
                            </div>
                            <div className="item_content position-relative">
                                <h4 className="item_title">
                                    <a href="#!">
                                        ساعت ایتالیایی برند معروف براندو
                                    </a>
                                </h4>
                                <span className=""> 6000/000 ریال </span>

                                <div className="flex items-center mt-2">
                                    <span className="mx-1"></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className="flex mt-20 items-center gap-10">
                            <div className="">
                                <img src={play} alt="image_not_found"/>
                            </div>
                            <div className="item_content position-relative">
                                <h4 className="item_title">
                                    <a href="#!">
                                        پلی استیشن 4 برند سونی </a>
                                </h4>
                                <span className="item_price">10/000/000 ریال </span>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="flex gap-10 mt-20 items-center">
                            <div className="item_image">
                                <img src={Airpad} alt="image_not_found"/>
                            </div>
                            <div className="item_content position-relative">
                                <h4 className="item_title">
                                    <a href="#!">
                                        ایرپاد با خروجی صدای فوق العاده با کیفیت خارق العاده (غیرقابل مقایسه با سایر
                                        رقبا) </a>
                                </h4>
                                <span className="item_price">150/000/000 ریال </span>
                            </div>
                        </div>
                    </div>
                </div>

                <a className="flex mt-20 view-more-link" href="#!">
                    <span className={"flex items-center gap-2"}>VIEW MORE <GoArrowRight /></span>
                    {/*<BsArrowRight />*/}
                </a>
            </div>
            <div className="">
                <h3 className="mb-4"> تنوع محصولات </h3>
                <div className="flex items-center mb-4">
                    <div className="h-[3px] w-1/12 bg-red-500"></div>
                    <div className="h-[3px] w-1/6 bg-gray-400"></div>


                </div>

                <div
                    className="electronic_feature_carousel2 arrow_ycenter mb_50"
                    data-slick='{"dots": false}'
                >
                    <div className="item">
                        <Swiper
                            rewind={true}
                            navigation={true}
                            modules={[Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide className={'flex flex-col gap-2'}>
                                <div className={'p-8 w-full bg-[#ECF7F3]'}>
                                    <img src={tvroom} alt="" style={{backgroundColor: "#ECF7F3"}}/>
                                </div>
                                <div className={"ml-96"}>
                                    <h3> محصول ویژه هفته به همراه آفر </h3>
                                </div>
                                <div className=" ">
                                    <ul className="">
                                        <li className={"flex items-center"}><PiCheckCircleFill color={'green'}/> -میزان
                                            کیفیت تصویر : 1300
                                        </li>
                                        <li className={"flex items-center"}><PiCheckCircleFill color={'green'}/>-وضوح
                                            تصویر &amp; HDR
                                        </li>
                                        <li className={"flex items-center"}><PiCheckCircleFill color={'green'}/>-قابلیت
                                            اتصال بلوتوث
                                        </li>
                                        <li className={"flex items-center"}><PiCheckCircleFill color={'green'}/> دارای 8
                                            ورودی مختلف کابل
                                        </li>
                                    </ul>
                                </div>
                                <div className={"flex gap-2 ml-4"}>
                                    <div className={"flex flex-col p-3"}>
                                        <strong className={"bg-gray-200"}> 00 </strong>
                                        <span> Days </span>
                                    </div>
                                    <div className={"flex flex-col p-3"}>
                                        <strong className={"bg-gray-200"}> 00 </strong>
                                        <span> Hourse </span>
                                    </div>
                                    <div className={"flex flex-col p-3"}>
                                        <strong className={"bg-gray-200"}> 00 </strong>
                                        <span> Mins </span>
                                    </div>
                                    <div className={"flex flex-col p-3"}>
                                        <strong className={"bg-gray-200"}> 00 </strong>
                                        <span> Secs </span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className={'flex flex-col gap-2'}>
                                <div className={'p-8 w-full bg-[#ECF7F3]'}>
                                <img src={tvroom} alt="" style={{backgroundColor: "#ECF7F3"}}/>
                                </div>
                                <div className="counter_wrap">
                                    <ul className="item_info_list ul_li_block clearfix">
                                        <li className={"flex items-center"}><PiCheckCircleFill color={'green'}/>-Picture
                                            Quality Index: 1300
                                        </li>
                                        <li className={"flex items-center"}><PiCheckCircleFill color={'green'}/>-Technologia
                                            PurColour &amp; HDR
                                        </li>
                                        <li className={"flex items-center"}><PiCheckCircleFill color={'green'}/>-Android TV
                                        </li>
                                    </ul>
                                    <ul
                                        className="countdown_timer timein_box ul_li clearfix"
                                        data-countdown="2021/3/24"
                                    ></ul>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className={'flex flex-col gap-2'}>
                                <div className={'p-8 w-full bg-[#ECF7F3]'}>
                                    <img src={tvroom} alt="" style={{backgroundColor: "#ECF7F3"}}/>
                                </div>
                                <div className="counter_wrap">
                                    <ul className="item_info_list ul_li_block clearfix">
                                        <li className={"flex items-center"}><PiCheckCircleFill color={'green'}/>-Picture
                                            Quality Index: 1300
                                        </li>
                                        <li className={"flex items-center"}><PiCheckCircleFill color={'green'}/>-Technologia
                                            PurColour &amp; HDR
                                        </li>
                                        <li className={"flex items-center"}><PiCheckCircleFill color={'green'}/>-Android
                                            TV
                                        </li>
                                    </ul>
                                    <ul
                                        className="countdown_timer timein_box ul_li clearfix"
                                        data-countdown="2021/3/24"
                                    ></ul>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className={'flex flex-col gap-2'}>
                                <div className={'p-8 w-full bg-[#ECF7F3]'}>
                                    <img src={tvroom} alt="" style={{backgroundColor: "#ECF7F3"}}/>
                                </div>
                                <div className="counter_wrap">
                                    <ul className="item_info_list ul_li_block clearfix">
                                        <li className={"flex items-center"}><PiCheckCircleFill color={'green'}/>-Picture
                                            Quality Index: 1300
                                        </li>
                                        <li className={"flex items-center"}><PiCheckCircleFill color={'green'}/>-Technologia
                                            PurColour &amp; HDR
                                        </li>
                                        <li className={"flex items-center"}><PiCheckCircleFill color={'green'}/>-Android
                                            TV
                                        </li>
                                    </ul>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className={'flex flex-col gap-2'}>
                                <div className={'p-8 w-full bg-[#ECF7F3]'}>
                                    <img src={tvroom} alt="" style={{backgroundColor: "#ECF7F3"}}/>
                                </div>
                                <div className="counter_wrap">
                                    <ul className="item_info_list ul_li_block clearfix">
                                        <li className={"flex items-center"}><PiCheckCircleFill color={'green'}/>-Picture
                                            Quality Index: 1300
                                        </li>
                                        <li className={"flex items-center"}><PiCheckCircleFill color={'green'}/>-Technologia
                                            PurColour &amp; HDR
                                        </li>
                                        <li className={"flex items-center"}><PiCheckCircleFill color={'green'}/>-Android
                                            TV
                                        </li>
                                    </ul>
                                    <ul
                                        className="countdown_timer timein_box ul_li clearfix"
                                        data-countdown="2021/3/24"
                                    ></ul>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className={'flex flex-col gap-2'}>
                                <div className={'p-8 w-full bg-[#ECF7F3]'}>
                                    <img src={tvroom} alt="" style={{backgroundColor: "#ECF7F3"}}/>
                                </div>
                                <div className="counter_wrap">
                                    <ul className="item_info_list ul_li_block clearfix">
                                        <li className={"flex items-center"}><PiCheckCircleFill color={'green'}/>-Picture
                                            Quality Index: 1300
                                        </li>
                                        <li className={"flex items-center"}><PiCheckCircleFill color={'green'}/>-Technologia
                                            PurColour &amp; HDR
                                        </li>
                                        <li className={"flex items-center"}><PiCheckCircleFill color={'green'}/>-Android
                                            TV
                                        </li>
                                    </ul>
                                    <ul
                                        className="countdown_timer timein_box ul_li clearfix"
                                        data-countdown="2021/3/24"
                                    ></ul>
                                </div>
                            </SwiperSlide>
                            {/*<SwiperSlide className={'p-3 bg-[#ECF7F3]'}> <img src={tvroom} alt="" style={{backgroundColor: "#ECF7F3"}}/>*/}
                            {/*    <div className="counter_wrap">*/}
                            {/*        <ul className="item_info_list ul_li_block clearfix">*/}
                            {/*            <li>- Picture Quality Index: 1300</li>*/}
                            {/*            <li>- Technologia PurColour &amp; HDR</li>*/}
                            {/*            <li>- Android TV</li>*/}
                            {/*        </ul>*/}
                            {/*        <ul*/}
                            {/*            className="countdown_timer timein_box ul_li clearfix"*/}
                            {/*            data-countdown="2021/3/24"*/}
                            {/*        ></ul>*/}
                            {/*    </div>*/}
                            {/*</SwiperSlide>*/}
                            {/*<SwiperSlide className={'p-3 bg-[#ECF7F3]'}> <img src={tvroom} alt="" style={{backgroundColor: "#ECF7F3"}}/>*/}
                            {/*    <div className="counter_wrap">*/}
                            {/*        <ul className="item_info_list ul_li_block clearfix">*/}
                            {/*            <li>- Picture Quality Index: 1300</li>*/}
                            {/*            <li>- Technologia PurColour &amp; HDR</li>*/}
                            {/*            <li>- Android TV</li>*/}
                            {/*        </ul>*/}
                            {/*        <ul*/}
                            {/*            className="countdown_timer timein_box ul_li clearfix"*/}
                            {/*            data-countdown="2021/3/24"*/}
                            {/*        ></ul>*/}
                            {/*    </div>*/}
                            {/*</SwiperSlide>*/}
                            {/*<SwiperSlide className={'p-3 bg-[#ECF7F3]'}> <img src={tvroom} alt="" style={{backgroundColor: "#ECF7F3"}}/>*/}
                            {/*    <div className="counter_wrap">*/}
                            {/*        <ul className="item_info_list ul_li_block clearfix">*/}
                            {/*            <li>- Picture Quality Index: 1300</li>*/}
                            {/*            <li>- Technologia PurColour &amp; HDR</li>*/}
                            {/*            <li>- Android TV</li>*/}
                            {/*        </ul>*/}
                            {/*        <ul*/}
                            {/*            className="countdown_timer timein_box ul_li clearfix"*/}
                            {/*            data-countdown="2021/3/24"*/}
                            {/*        ></ul>*/}
                            {/*    </div>*/}
                            {/*</SwiperSlide>*/}
                            {/*<SwiperSlide className={"p-3 bg-[#ECF7F3]"}> <img src={tvroom} alt=""*/}
                            {/*                                     style={{backgroundColor: "#ECF7F3"}}/>*/}
                            {/*    <div className="counter_wrap">*/}
                            {/*        <ul className="item_info_list ul_li_block clearfix">*/}
                            {/*            <li>- Picture Quality Index: 1300</li>*/}
                            {/*            <li>- Technologia PurColour &amp; HDR</li>*/}
                            {/*            <li>- Android TV</li>*/}
                            {/*        </ul>*/}
                            {/*        <ul*/}
                            {/*            className="countdown_timer timein_box ul_li clearfix"*/}
                            {/*            data-countdown="2021/3/24"*/}
                            {/*        ></ul>*/}
                            {/*    </div>*/}
                            {/*</SwiperSlide>*/}
                        </Swiper>
                    </div>
                </div>

                <a className="flex mt-20 view-more-link" href="#!">
                    <span className={"flex items-center gap-2"}>VIEW MORE<GoArrowRight /></span>
                </a>
            </div>
            <div className="featured_products_wrap">
                <h3 className="mb-4"> تنوع محصولات </h3>
                <div className="flex items-center mb-4">
                    <div className="h-[3px] w-1/12 bg-red-500"></div>
                    <div className="h-[3px] w-1/6 bg-gray-400"></div>
                </div>

                <div
                    className="electronic_feature_carousel2 arrow_ycenter mb_50"
                    data-slick='{"dots": false}'
                >
                    <div className="item">
                        <div className="flex gap-10 mt-20 items-center">
                            <div className="">
                                <img src={watch} alt={"no Find"}/>
                            </div>
                            <div className="item_content position-relative">
                                <h4 className="item_title">
                                    <a href="#!">
                                        ساعت ایتالیایی برند معروف براندو
                                    </a>
                                </h4>
                                <span className=""> 6000/000 ریال </span>

                                <div className="flex items-center mt-2">
                                    <span className="mx-1"></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className="flex mt-20 items-center gap-10">
                            <div className="">
                                <img src={play} alt="image_not_found"/>
                            </div>
                            <div className="item_title">
                                <h4 className="">
                                    <a href="#!" className={"item_title"}>
                                        پلی استیشن 40 برند سونی </a>
                                </h4>
                                <span className="item_price">10/000/000 ریال </span>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="flex gap-10 mt-20 items-center">
                            <div className="item_image">
                                <img src={Airpad} alt="image_not_found"/>
                            </div>
                            <div className="item_content position-relative">
                                <h4 className="item_title">
                                    <a href="#!">
                                        ایرپاد با خروجی صدای فوق العاده با کیفیت خارق العاده (غیرقابل مقایسه با سایر
                                        رقبا) </a>
                                </h4>
                                <span className="item_price">150/000/000 ریال </span>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="flex mt-20 view-more-link" href="#!">
                    <span className={"flex items-center gap-2"}>VIEW MORE<GoArrowRight /></span>
                    {/*<BsArrowRight />*/}
                </a>
            </div>

        </div>
    );
};

export default FeaturedProducts;
