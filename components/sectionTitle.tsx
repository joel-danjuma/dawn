import { ReactNode } from "react";

const SectionTitle = (props: { title: string; children: ReactNode }) => {
  return (
    <div
      className={`flex w-full flex-col pb-[80px] z-10 items-center justify-center text-center
      }`}
    >
      {props.title && (
        <h2 className="max-w-full mt-3 text-3xl font-bold leading-snug tracking-tight text-white lg:leading-tight lg:text-5xl">
          {props.title}
        </h2>
      )}

      {props.children && (
        <h3 className="max-w-full py-4 text-lg leading-normal text-white lg:text-xl xl:text-xl">
          {props.children}
        </h3>
      )}
    </div>
  );
};

export default SectionTitle;
