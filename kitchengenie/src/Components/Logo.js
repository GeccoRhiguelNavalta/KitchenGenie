import MyLogo from "../assets/Logo.png";
import MyLogoDark from "../assets/LogoDark.png";
import Context from "../Context/DataContext.js";
import React, { useContext } from "react";

export default function Logo() {
  const { theme } = useContext(Context);
  const logoSrc = theme === "light" ? MyLogo : MyLogoDark;
  return (
    <div className="Logo">
      <img className="logoimg" src={logoSrc} alt="logo" />
    </div>
  );
}
