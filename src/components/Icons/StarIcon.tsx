interface StarIconProps {
  size?: number;
}

export function StarIcon({ size = 12 }: StarIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
    >
      <g clipPath="url(#clip0_329_154)">
        <path
          d="M11.969 4.595a.637.637 0 00-.549-.438l-3.464-.315L6.587.637a.638.638 0 00-1.173 0l-1.37 3.205-3.464.315a.639.639 0 00-.362 1.116l2.618 2.296-.772 3.4a.637.637 0 00.949.69L6 9.873l2.987 1.786a.638.638 0 00.95-.69l-.773-3.4 2.619-2.296a.639.639 0 00.186-.678z"
          fill="#FACC15"
        />
      </g>
      <defs>
        <clipPath id="clip0_329_154">
          <path fill="#fff" d="M0 0H12V12H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
