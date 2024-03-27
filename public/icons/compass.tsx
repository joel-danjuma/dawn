import { SVGProps } from ".";

function Compass({
  width = 35,
  height = 35,
  parentFill = "none",
  pathFill = "white",
}: SVGProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 35 35"
      fill={parentFill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.47919 25.5208L20.4167 20.4166L25.5209 9.47913L14.5834 14.5833L9.47919 25.5208ZM17.5 18.9583C17.0868 18.9583 16.7407 18.8183 16.4617 18.5383C16.1827 18.2583 16.0427 17.9122 16.0417 17.5C16.0417 17.0868 16.1817 16.7407 16.4617 16.4616C16.7417 16.1826 17.0878 16.0426 17.5 16.0416C17.9132 16.0416 18.2598 16.1816 18.5398 16.4616C18.8198 16.7416 18.9593 17.0877 18.9584 17.5C18.9584 17.9132 18.8184 18.2598 18.5384 18.5398C18.2584 18.8198 17.9122 18.9593 17.5 18.9583ZM17.5 32.0833C15.4827 32.0833 13.5868 31.7002 11.8125 30.9341C10.0382 30.168 8.49481 29.1292 7.18231 27.8177C5.86981 26.5052 4.83099 24.9618 4.06585 23.1875C3.30071 21.4132 2.91766 19.5173 2.91669 17.5C2.91669 15.4826 3.29974 13.5868 4.06585 11.8125C4.83196 10.0382 5.87078 8.49475 7.18231 7.18225C8.49481 5.86975 10.0382 4.83093 11.8125 4.06579C13.5868 3.30065 15.4827 2.9176 17.5 2.91663C19.5174 2.91663 21.4132 3.29968 23.1875 4.06579C24.9618 4.8319 26.5052 5.87072 27.8177 7.18225C29.1302 8.49475 30.1695 10.0382 30.9356 11.8125C31.7018 13.5868 32.0843 15.4826 32.0834 17.5C32.0834 19.5173 31.7003 21.4132 30.9342 23.1875C30.1681 24.9618 29.1293 26.5052 27.8177 27.8177C26.5052 29.1302 24.9618 30.1695 23.1875 30.9356C21.4132 31.7017 19.5174 32.0843 17.5 32.0833ZM17.5 29.1666C20.757 29.1666 23.5156 28.0364 25.7761 25.776C28.0365 23.5156 29.1667 20.7569 29.1667 17.5C29.1667 14.243 28.0365 11.4843 25.7761 9.22392C23.5156 6.9635 20.757 5.83329 17.5 5.83329C14.2431 5.83329 11.4844 6.9635 9.22398 9.22392C6.96356 11.4843 5.83335 14.243 5.83335 17.5C5.83335 20.7569 6.96356 23.5156 9.22398 25.776C11.4844 28.0364 14.2431 29.1666 17.5 29.1666Z"
        fill={pathFill}
      />
    </svg>
  );
}

export { Compass as CompassIcon };
