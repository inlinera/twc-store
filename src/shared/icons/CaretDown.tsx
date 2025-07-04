export const CaretDown = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="clamp(12px, 1.5vw, 16px)"
      height="clamp(12px, 1.5vw, 16px)"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M13 6L8 11L3 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
