import * as React from 'react'

const Vendors = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    color='#000'
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  
  >
    <path
      d="m2.6 3.6 6.7 16.8c.4.9 1.1 1 1.7.2l9.4-11.9c.3-.4.3-1-.1-1.3l-3.1-3.1c-.1-.2-.4-.3-.5-.3l-13-1.7c-.9-.2-1.4.4-1.1 1.3v0Z"
      stroke='currentColor'
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m10 21 1-11-8-7.1M17 4l-6 6 9-1.8"
      stroke='currentColor'
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default Vendors
