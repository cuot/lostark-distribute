import React from "react";

export default function Footer() {
  return (
    <footer className="container">
      <div
        className="d-flex flex-wrap justify-content-between align-items-center border-top"
        style={{ "margin-top": "1.5rem", "padding-top": "1.5rem" }}>
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            <svg className="bi" width="30" height="24">
              {/* <use xlink:href="#bootstrap"></use> */}
            </svg>
          </a>
          <span className="text-muted">© 2021 made by vyrp</span>
        </div>
      </div>
    </footer>
  );
}
