import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright Alicia Silverio ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
