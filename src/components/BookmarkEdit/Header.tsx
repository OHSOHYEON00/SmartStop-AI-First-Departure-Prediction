import BackButton from "components/Common/Icon/BackButton";
import React from "react";

const Header = ({
  title,
  bIcon,
}: {
  title?: React.ReactElement;
  bIcon?: string;
}) => {
  return (
    <section className="bg-main flex pt-7 justify-between px-6 shadow-header">
      <BackButton link="/" styles="p-0" height={35} width={35} />
      {bIcon && (
        <img
          src={bIcon}
          className="mt-4"
          width={100}
          height={100}
          alt={"header background"}
        />
      )}
      {title && (
        <div className="font-bold lett text-2xl pt-2 text-right">{title}</div>
      )}
    </section>
  );
};

export default Header;
