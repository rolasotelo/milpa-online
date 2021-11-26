import React from "react";

interface Props {
  onClick: () => void;
  text: string;
}

const Infographic = (props: Props) => {
  return (
    <div className="relative flex-col w-screen">
      <div className="relative w-20.38rem mx-auto max-w-100vw md:w-herobox-web h-herobox-web bg-milpaBlue-default ring-8 ring-offset-0 ring-milpaBlue-dark mt-5 md:mt-herobox-top-web"></div>
    </div>
  );
};

export default Infographic;
