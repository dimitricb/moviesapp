import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../assets/popcorn-discount-theater-film-cinema-png-favpng-q7dPketq8ekzYwnZ9Txc9hNpX.jpg";

const LogoImage = () => {
  return (
    <Link to="/">
      <img src={logoImage} alt="Logo" className="logo-image" />
    </Link>
  );
};

export default LogoImage;
