import React from 'react';

function MoreOption(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width='7'
            height='20'
            fill='none'
            viewBox='0 0 7 20'
            {...props}
        >
            <circle cx='3.002' cy='3' r='3' fill='#7C7F84'></circle>
            <circle cx='3.002' cy='10' r='3' fill='#7C7F84'></circle>
            <circle cx='3.002' cy='17' r='3' fill='#7C7F84'></circle>
        </svg>
    );
}

export default MoreOption;