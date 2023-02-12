import * as React from 'react'

const Category = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    color='#000'
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
    stroke='currentColor'
      d="M20 3.5H5.5c-.3 0-.6.1-.8.4l-1.5 2A1 1 0 0 0 4 7.5h14.5c.3 0 .6-.1.8-.4l1.5-2a1 1 0 0 0-.8-1.6ZM4 10h14.5c.3 0 .6.1.8.4l1.5 2A1 1 0 0 1 20 14H5.5c-.3 0-.6-.1-.8-.4l-1.5-2A1 1 0 0 1 4 10Zm16 6.5H5.5c-.3 0-.6.1-.8.4l-1.5 2a1 1 0 0 0 .8 1.6h14.5c.3 0 .6-.1.8-.4l1.5-2a1 1 0 0 0-.8-1.6Z"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
  </svg>
)

export default Category
