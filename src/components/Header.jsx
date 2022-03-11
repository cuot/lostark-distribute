import React from "react";

export default function Header() {
  return (
    <header
      className="p-3 text-white"
      style={{ "background-color": "#055160" }}>
      <div className="container">
        <div style={{ "text-align": "left" }}>
          <a
            href="/"
            className="align-items-center mb-2 mb-lg-0 text-decoration-none">
            <div
              className="fs-3 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"
              style={{
                "background-color": "#fff",
                borderRadius: "10px",
                color: "black",
                width: "100%",
              }}>
              &nbsp;&nbsp;로스트아크 분배 계산기
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}
