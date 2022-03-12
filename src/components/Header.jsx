import React from "react";
import "../css/Header.css";

export default function Header() {
  return (
    <header>
      <div className="container">
        <a href="/">
          <span id="headertext">로스트아크 분배 계산기</span>
        </a>
      </div>
    </header>
  );
}
