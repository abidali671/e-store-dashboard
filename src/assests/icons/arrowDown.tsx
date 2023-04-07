import React from 'react';

function ArrowDown(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='58'
            height='32'
            fill='none'
            viewBox='0 0 58 32'
            {...props}
        >
            <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeMiterlimit='10'
                strokeWidth='1.5'
                d='M8.08 12.91l6.52 6.52c.77.77 2.03.77 2.8 0l6.52-6.52'
            ></path>
            <rect
                width='31'
                height='31'
                x='0.5'
                y='0.5'
                stroke='currentColor'
                rx='7.5'
            ></rect>
        </svg>
    );
}

export default ArrowDown;