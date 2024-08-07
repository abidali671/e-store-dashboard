import * as React from 'react'

const Review = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={24}color='#000'
    height={24}
    fill="none"
  
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 5H2m3 14H2m1-7H2m13.39-6.79 1.41 2.82c.19.39.7.76 1.13.84l2.55.42c1.63.27 2.01 1.45.84 2.63l-1.99 1.99c-.33.33-.52.98-.41 1.45l.57 2.46c.45 1.94-.59 2.7-2.3 1.68l-2.39-1.42c-.43-.26-1.15-.26-1.58 0l-2.39 1.42c-1.71 1.01-2.75.26-2.3-1.68l.57-2.46c.11-.46-.08-1.11-.41-1.45L6.7 11.92c-1.17-1.17-.79-2.35.84-2.63l2.55-.42c.43-.07.94-.45 1.13-.84l1.41-2.82c.75-1.53 1.99-1.53 2.76 0v0Z"
      stroke='currentColor'
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default Review
