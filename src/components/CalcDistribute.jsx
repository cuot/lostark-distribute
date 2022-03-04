import React, { useState, useRef } from "react";
import { Container, Row, Col, Overlay, Tooltip } from "react-bootstrap";
import "./CalcDistribute.css";

export default function CalcDistribute() {
  const [price, setPrice] = useState(0);
  // const [copyData, setCopyData] = useState("");
  const [show4, setShow4] = useState(false);
  const [show8, setShow8] = useState(false);
  const target4 = useRef(null);
  const target8 = useRef(null);

  const handleChange = (event) => {
    if (!isNaN(event.target.value)) {
      if (event.target.value < 10000000) {
        setPrice(Number(event.target.value));
        // console.log(
        //   `골드 : ${price} 4인분기 : ${bid4People()} 8인분기 : ${bid8People()}`,
        // );
      }
    }
  };

  const copy = (props) => {
    let copyElement = document.getElementById("bid4");
    if (props === 8) copyElement = document.getElementById("bid8");
    navigator.clipboard.writeText(copyElement.textContent);
    return copyElement.textContent;
  };

  const bid4People = () => (price * 0.95) / (1 / 3 + 1);
  const bid8People = () => (price * 0.95) / (1 / 7 + 1);

  return (
    <div className="bg-light">
      {/* col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 */}
      <div className="profitOrLoss">
        <Container>
          <div className="fs-4 col-6" style={{ "margin-top": "50px" }}>
            * 던전 경매 계산
          </div>

          <Row id="calcRoot">
            <Col sm={2} />

            <Col
              id="right-body"
              sm={6}
              xs={12}
              style={{ "margin-top": "20px" }}
            >
              <Row sm={12} xs={12} style={{ margin: "20px 0px" }}>
                <div className="input-group mb-3">
                  <span
                    className="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    골드
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    placeholder="경매장 최소값을 입력하시오."
                    onChange={handleChange}
                    onClick={() => setPrice("")}
                    value={price}
                  />
                </div>
              </Row>
              <Row>
                <Col
                  className="hoverpointer"
                  sm={12}
                  xs={12}
                  ref={target4}
                  onClick={
                    (() => copy(4),
                    () => {
                      setShow4(true);
                      setTimeout(() => {
                        setShow4(false);
                      }, 1000);
                    })
                  }
                >
                  <ul className="list-group">
                    <li className="list-group-item">4인 분배</li>
                  </ul>
                  <Row>
                    <Col sm={6} xs={12}>
                      <li className="list-group-item">입찰 분기점</li>
                      <li className="list-group-item">추천 입찰금</li>
                      <li className="list-group-item">추천 순수익</li>
                      <li className="list-group-item">경매 분배금</li>
                      <li className="list-group-item">타유저 대비</li>
                    </Col>
                    <div className="col-6">
                      <li className="list-group-item">
                        {price ? Math.floor(bid4People()) : 0}
                      </li>
                      <li id="bid4" className="list-group-item">
                        {price ? Math.floor((bid4People() * 1.02) / 1.1) : 0}
                      </li>
                      <li className="list-group-item">
                        {price
                          ? Math.floor(
                              price * 0.95 - (bid4People() * 1.02) / 1.1,
                            )
                          : 0}
                      </li>
                      <li className="list-group-item">
                        {price
                          ? Math.floor((bid4People() * 1.02) / 1.1 / 3)
                          : 0}
                      </li>
                      <li className="list-group-item">
                        {price
                          ? Math.floor(
                              price * 0.95 - (bid4People() * 1.02) / 1.1,
                            ) - Math.floor((bid4People() * 1.02) / 1.1 / 3)
                          : 0}
                      </li>
                    </div>
                  </Row>
                </Col>
                <Overlay
                  target={target4.current}
                  show={show4}
                  placement="right"
                >
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      {`Copy to ${copy(4)} Gold!`}
                    </Tooltip>
                  )}
                </Overlay>
                <div style={{ margin: "20px" }} />
                <Col
                  className="hoverpointer"
                  sm={12}
                  xs={12}
                  ref={target8}
                  onClick={
                    (() => copy(8),
                    () => {
                      setShow8(true);
                      setTimeout(() => {
                        setShow8(false);
                      }, 1000);
                    })
                  }
                >
                  <ul className="list-group">
                    <li className="list-group-item">8인 분배</li>
                  </ul>
                  <Row>
                    <Col sm={6} xs={12}>
                      <li className="list-group-item">입찰 분기점</li>
                      <li className="list-group-item">추천 입찰금</li>
                      <li className="list-group-item">추천 순수익</li>
                      <li className="list-group-item">경매 분배금</li>
                      <li className="list-group-item">타유저 대비</li>
                    </Col>
                    <Col sm={6} xs={12}>
                      <li className="list-group-item">
                        {price ? Math.floor(bid8People()) : 0}
                      </li>
                      <li id="bid8" className="list-group-item">
                        {price ? Math.floor((bid8People() * 1.02) / 1.1) : 0}
                      </li>
                      <li className="list-group-item">
                        {price
                          ? Math.floor(
                              price * 0.95 - (bid8People() * 1.02) / 1.1,
                            )
                          : 0}
                      </li>
                      <li className="list-group-item">
                        {price
                          ? Math.floor((bid8People() * 1.02) / 1.1 / 7)
                          : 0}
                      </li>
                      <li className="list-group-item">
                        {price
                          ? Math.floor(
                              price * 0.95 - (bid8People() * 1.02) / 1.1,
                            ) - Math.floor((bid8People() * 1.02) / 1.1 / 7)
                          : 0}
                      </li>
                    </Col>
                  </Row>
                </Col>
                <Overlay
                  target={target8.current}
                  show={show8}
                  placement="right"
                >
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      {`Copy to ${copy(8)} Gold!`}
                    </Tooltip>
                  )}
                </Overlay>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
