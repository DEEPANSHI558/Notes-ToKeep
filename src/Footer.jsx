import React from "react";

function Footer() {
  var date = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright &copy; {date} </p>
    </footer>
  );
}
export default Footer;
