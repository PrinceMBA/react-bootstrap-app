import React from "react";

function Footer() {
  return (
    <footer
      className="footer"
      style={{
        height: "10vh",
        marginTop: "50px",
        textAlign: "center",
        backgroundColor: "blue",
        fontSize: "50px",
      }}
    >
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()} Your Company Name. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
