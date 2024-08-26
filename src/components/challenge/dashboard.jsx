"use client";

import { HiTicket } from "react-icons/hi2";
import { BsGiftFill } from "react-icons/bs";
import { FaBitcoin } from "react-icons/fa";
import ChallengeFeatureItem from "./challenge-feature-item";
import axios from "axios";
import { useEffect, useState } from "react";


const Dashboard = ({ FeaturesData, FeaturesDataNew }) => {


    const Settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="w-full flex items-center justify-center mt- px-5 lg:px-10">
            <div className="relative background-image-blue rounded-xl p-4 w-full pt-10">
                <h1 className="text-center mb-2 text-4xl font-bold text-white">
                    DreamGameZ Dashboard
                </h1>
                <div className="flex justify-center">
                    <div className="w-full max-w-[1200px] lg:flex-row md:flex-row flex-row flex items-center justify-center">
                        {FeaturesData.map((feature) => {

                            var newvals = null

                                if (feature.title == "100k challenge entries") {
                                    newvals = Number(FeaturesData[1].amountText) + Number(FeaturesData[2].amountText)
                                }


                            return <ChallengeFeatureItem
                                key={feature.id}
                                Icon={feature.Icon}
                                amountText={newvals?newvals:feature.amountText}
                                title={feature.title}
                            />
                        }


                        )}
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="w-full max-w-[1200px] flex-row lg:flex-row md:flex-row flex items-center justify-center">
                        {FeaturesDataNew.map((feature) => (
                            <ChallengeFeatureItem
                                key={feature.id}
                                Icon={feature.Icon}
                                amountText={feature.amountText}
                                title={feature.title}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
