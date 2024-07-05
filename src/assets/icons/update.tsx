import * as React from 'react'

const Update = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="24"
    fill="none"
    color='#000'
    viewBox="0 0 25 24"
    {...props}
  >
    <path
        stroke='currentColor'
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M12.547 22c5.556 0 10.06-4.477 10.06-10S18.102 2 12.546 2C6.99 2 2.487 6.477 2.487 12s4.504 10 10.06 10z"
    ></path>
    <path
      stroke="#56606E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M8.533 14.51c.181.3.402.58.654.83.892.884 2.1 1.38 3.36 1.38 1.26 0 2.467-.496 3.36-1.38a4.7 4.7 0 001.328-2.67m-9.376-1.34c.14-.98.573-1.92 1.328-2.67a4.775 4.775 0 013.36-1.38c1.26 0 2.467.496 3.36 1.38.261.26.473.54.654.83"
    ></path>
    <path
      stroke="#56606E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M8.342 17.18v-2.67h2.686m5.724-7.69v2.67h-2.686"
    ></path>
  </svg>
)

export default Update
