import React from "react";

export default function Header() {
  return (
    <header className="p-3 bg-primary bg-opacity-75 text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <svg
              className="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              {/* <use xlink:href="/"></use> */}
            </svg>
          </a>

          <div className="fs-3 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            로스트아크 분배 계산기
          </div>
        </div>
      </div>
    </header>
  );
}
