import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import styles from "../Styles/GeekLabComp2.module.css";
import SelectionFrom3 from "./SelectionFrom3";
import Industeries from "./Industeries";
import RadioComponent from "./RadioComponent";
// import SelectionFrom3 from "./SelectionFrom3";
const GeekLabComp2 = () => {
  return (
    <Col
      xs={{ order: 1 }}
      className={`${styles.component2Col} ms-4 mb-5`}
      style={{ color: "white" }}
    >
      <h4 className="text-center mt-1">Filters</h4>
      <div
        className="d-flex justify-content-between"
        style={{ fontWeight: "normal", fontSize: "small" }}
      >
        <p style={{ color: "#979797" }}>Filters Applied</p>
        <p>Clear All</p>
      </div>
      <Row
        className={` ${styles.ButtonsRow} d-flex justify-content-between px-3 pt-2 pb-2 mx-auto mb-3`}
      >
        <Col
          className={` ${styles.Deletebutton} d-flex justify-content-between col-4 col-md-2 col-lg-2 col-xl-4 mb-3 px-2`}
        >
          <p
            className={` ${styles.paragraph1} text-start`}
            style={{ fontSize: "13px", fontWeight: "normal" }}
          >
            Real state{" "}
          </p>
          <p
            className=" text-end"
            style={{
              cursor: "pointer",
              color: "#181818",
              fontWeight: "bold",
              marginTop: "-2px",
            }}
          >
            x
          </p>
        </Col>
      </Row>
      <div className={`${styles.component3Div}`}>
        <b className={`${styles.stock} mt-2`}>Stock</b>
        <Form.Control
          className={`me-auto ms-3 text-start ${styles.search}`}
          type="search"
          placeholder="$ TICKER"
          style={{ color: "white" }}
        />
        <Row>
          <Industeries />
        </Row>
        <Row className="d-flex justify-content-between ms-0">
          <Col className="me-3 ">
            {" "}
            <RadioComponent
              word="market cap"
              choice1="Micro"
              choice2="Small"
              choice3="Large"
            />
          </Col>
          <Col className="ms-3">
            {" "}
            <RadioComponent
              word="Risk Level"
              choice1="Low Risk"
              choice2="Mid Risk"
              choice3="Low Risk"
            />
          </Col>
        </Row>
        <Row className="d-flex justify-content-between">
          <Col>
            <h6 className="text-center mb-2 mt-2">strategy</h6>

            <SelectionFrom3
              word1="Big Option Buys"
              word2="Merger Arbitrage
"
              word3="Short Reports
"
            />
          </Col>
          <Col>
            <h6 className="text-center mt-2">asset</h6>

            <SelectionFrom3
              word1="Stocks"
              word2="Options
"
              word3="Futures
"
            />
          </Col>
        </Row>
      </div>
      <Button
        className="mb-3 mt-3 mx-auto d-flex px-5"
        style={{
          background: "#53ACFF",
          fontWeight: "bold",
          paddingBlock: ".7rem",
          borderRadius: "8px",
        }}
      >
        Apply
      </Button>
    </Col>
  );
};

export default GeekLabComp2;
