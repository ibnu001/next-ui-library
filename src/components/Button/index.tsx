"use client";

import React from 'react';
import {ButtonProps} from "@/components/Button/ButtonProps";

const Button = ({title, btnType, containerStyles, handleClick}: ButtonProps) => {
    return (
        <button
            type={btnType || "button"}
            className={'text-yellow-300 bg-blue-600 max-mobile:bg-blue-950 max-tablet:bg-blue-300 ' +
                'max-desktop:bg-red-600 max-desktopLg:bg-red-950 rounded-full min-w-[130px] ' +
                'py-2 px-4 hover:bg-blue-950 font-sans'}
            onClick={handleClick}
        >
            <span className={'font-bold'}>
                {title}
            </span>
        </button>
    );
};

export default Button;