import React from "react";
import "../css/Header.css";

export default function Header() {
  return (
    <div id="header">
      <div className="container shadow">
        <div>
          <a href="/">
            <span id="headertext">로스트아크 분배 계산기</span>
          </a>
        </div>
      </div>
    </div>
  );
}
