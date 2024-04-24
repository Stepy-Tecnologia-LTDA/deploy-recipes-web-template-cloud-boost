interface CheckIconProps {
  color?: string;
  size?: number;
}

export function CheckIcon({ color = "#27272A", size = 16 }: CheckIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
    >
      <path
        d="M5.323 11.74a.582.582 0 01-.413-.171L1.338 7.995a.583.583 0 11.824-.825l3.16 3.16 6.734-6.733a.583.583 0 01.825.825l-7.146 7.146a.582.582 0 01-.412.17z"
        fill={color}
      />
    </svg>
  );
}
