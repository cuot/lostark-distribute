import React, { useState, useRef } from "react";
import { Overlay, Tooltip } from "react-bootstrap";
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
    <div className="container text-white py-1">
      <div className="bg-dark profitOrLoss overflow-auto">
        <h4 className="d-flex" style={{ margin: "30px 0px" }}>
          &middot; 던전 골드 분배
        </h4>
        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">
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
        <div>
          <table
            className="table table-hover table-bordered table-striped table-dark hoverpointer"
            ref={target4}
            onClick={
              (() => copy(4),
              () => {
                setShow4(true);
                setTimeout(() => {
                  setShow4(false);
                }, 1000);
              })
            }>
            <colgroup>
              <col style={{ width: "50%" }} />
              <col style={{ width: "50%" }} />
            </colgroup>
            <thead className="thead-dark">
              <tr>
                <th scope="col" colSpan="2">
                  4인 분배
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>입찰 분기점</td>
                <td>{price ? Math.floor(bid4People()) : 0}</td>
              </tr>
              <tr>
                <td>추천 입찰금</td>
                <td id="bid4">
                  {price ? Math.floor((bid4People() * 1.02) / 1.1) : 0}
                </td>
              </tr>
              <tr>
                <td>추천 순수익</td>
                <td>
                  {price
                    ? Math.floor(price * 0.95 - (bid4People() * 1.02) / 1.1)
                    : 0}
                </td>
              </tr>
              <tr>
                <td>경매 분배금</td>
                <td>
                  {price ? Math.floor((bid4People() * 1.02) / 1.1 / 3) : 0}
                </td>
              </tr>
              <tr>
                <td>타유저 대비</td>
                <td>
                  {price
                    ? Math.floor(price * 0.95 - (bid4People() * 1.02) / 1.1) -
                      Math.floor((bid4People() * 1.02) / 1.1 / 3)
                    : 0}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <table
            className="table table-hover table-bordered table-striped table-dark hoverpointer"
            ref={target8}
            onClick={
              (() => copy(8),
              () => {
                setShow8(true);
                setTimeout(() => {
                  setShow8(false);
                }, 1000);
              })
            }>
            <colgroup>
              <col style={{ width: "50%" }} />
              <col style={{ width: "50%" }} />
            </colgroup>
            <thead>
              <tr>
                <th scope="col" colSpan="2">
                  8인 분배
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>입찰 분기점</td>
                <td>{price ? Math.floor(bid8People()) : 0}</td>
              </tr>
              <tr>
                <td>추천 입찰금</td>
                <td id="bid8">
                  {price ? Math.floor((bid8People() * 1.02) / 1.1) : 0}
                </td>
              </tr>
              <tr>
                <td>추천 순수익</td>
                <td>
                  {price
                    ? Math.floor(price * 0.95 - (bid8People() * 1.02) / 1.1)
                    : 0}
                </td>
              </tr>
              <tr>
                <td>경매 분배금</td>
                <td>
                  {price ? Math.floor((bid8People() * 1.02) / 1.1 / 7) : 0}
                </td>
              </tr>
              <tr>
                <td>타유저 대비</td>
                <td>
                  {price
                    ? Math.floor(price * 0.95 - (bid8People() * 1.02) / 1.1) -
                      Math.floor((bid8People() * 1.02) / 1.1 / 7)
                    : 0}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Overlay target={target4.current} show={show4} placement="right">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            {`Copy to ${copy(4)} Gold!`}
          </Tooltip>
        )}
      </Overlay>
      <Overlay target={target8.current} show={show8} placement="right">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            {`Copy to ${copy(8)} Gold!`}
          </Tooltip>
        )}
      </Overlay>
    </div>
  );
}
