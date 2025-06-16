import "./HeaderTitle.css";

const HeaderTitle = () => {
  return (
    <svg
      width="614"
      height="390"
      viewBox="0 0 614 390"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="header__title"
    >
      <g id="text">
        <text
          x="56"
          y="106"
          fill="#F9F9F9"
          fontSize="50"
          fontFamily="Arial, sans-serif"
          stroke="white"
          stroke-width="2.5"
        >
          Software Developer,
        </text>
        <text
          x="56"
          y="192"
          fill="#F9F9F9"
          fontSize="50"
          fontFamily="Arial, sans-serif"
          stroke="white"
          stroke-width="2.5"
        >
          UX/UI Designer,
        </text>
        <text
          x="56"
          y="278"
          fill="#F9F9F9"
          fontSize="50"
          fontFamily="Arial, sans-serif"
          stroke="white"
          stroke-width="2.5"
        >
          Mobile App Developer.
        </text>
      </g>

      <g id="cursor">
        <path
          d="M453.383 343L448 317L471 331L459.745 333.5L453.383 343Z"
          fill="#373737"
          stroke="white"
          strokeWidth="3"
        />
        <path
          d="M550 358C550 349.716 543.284 343 535 343H470C461.716 343 455 349.716 455 358V361C455 369.284 461.716 376 470 376H535C543.284 376 550 369.284 550 361V358Z"
          fill="#2563EB"
        />
        <text
          x="475"
          y="365"
          fill="white"
          fontSize="16"
          fontFamily="Arial, sans-serif"
        >
          Suneth
        </text>
      </g>
    </svg>
  );
};

export default HeaderTitle;