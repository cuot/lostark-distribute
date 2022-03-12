import React from "react";
import "../css/Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div>
          <div className="col-md-4">
            <span>© {Date().split(" ")[3]} made by vyrp</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
