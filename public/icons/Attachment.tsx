import { SVGProps } from ".";

function Attachment({ width = 32, height = 32 }: SVGProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 20V12C8 9.87827 8.84286 7.84344 10.3431 6.34315C11.8434 4.84286 13.8783 4 16 4C18.1217 4 20.1566 4.84286 21.6569 6.34315C23.1571 7.84344 24 9.87827 24 12V22.6667C24 24.0812 23.4381 25.4377 22.4379 26.4379C21.4377 27.4381 20.0812 28 18.6667 28C17.2522 28 15.8956 27.4381 14.8954 26.4379C13.8952 25.4377 13.3333 24.0812 13.3333 22.6667V12C13.3333 11.2928 13.6143 10.6145 14.1144 10.1144C14.6145 9.61428 15.2928 9.33333 16 9.33333C16.7072 9.33333 17.3855 9.61428 17.8856 10.1144C18.3857 10.6145 18.6667 11.2928 18.6667 12V22.6667"
        stroke="#A124B6"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export { Attachment as AttachmentIcon };
