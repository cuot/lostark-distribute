import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./CalcDistribute.css";

export default function CalcDistribute() {
  const [price, setPrice] = useState(0);

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
    const copyText = document.getElementById("copytext");
    if (props === 8) copyElement = document.getElementById("bid8");
    // console.log(copyElement);
    // console.dir(copyElement);
    //
    copyText.textContent = `Copy to ${copyElement.textContent} Gold!`;
    setTimeout(() => {
      copyText.textContent = "";
    }, 2000);

    navigator.clipboard.writeText(copyElement.textContent);
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
            <Col sm={4} xs={12} style={{ "margin-top": "25px" }}>
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
              <div id="copytext"></div>
            </Col>

            <Col
              id="right-body"
              sm={6}
              xs={12}
              style={{ "margin-top": "20px" }}
            >
              <Row>
                <Col sm={12} xs={12} onClick={() => copy()}>
                  <ul className="list-group">
                    <li className="list-group-item">4인 분배</li>
                  </ul>
                  <Row>
                    <div className="col-6">
                      <li className="list-group-item">입찰 분기점</li>
                      <li className="list-group-item">추천 입찰금</li>
                      <li className="list-group-item">추천 순수익</li>
                      <li className="list-group-item">경매 분배금</li>
                      <li className="list-group-item">타유저 대비</li>
                    </div>
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
                <div style={{ margin: "30px" }} />
                <Col sm={12} xs={12} onClick={() => copy(8)}>
                  <ul className="list-group">
                    <li className="list-group-item">8인 분배</li>
                  </ul>
                  <div className="row">
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
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
