import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import dolar from "../assets/Group.png";
import Vector from "../assets/Vector.png";
import stat from "../assets/Vector(1).png";
import dolar2 from "../assets/Group 62.png";
import styles from "../Styles/Notification.module.css";
import { Badge } from "@mui/material";

const Notification = ({ name, risk, color, amount, percent }) => {
  const [expand, setExpand] = useState(false);

  return (
    <div className="ps-5 w-100">
      <Row
        className={`${
          expand ? styles.ExpandNot_row : styles.Not_row
        } ms-2 mb-3 me-1 w-100`}
        onClick={() => setExpand(!expand)}
      >
        <Col
          className={`${
            expand ? styles.ExpandcolNot : styles.colNot
          } mt-2 col-3 text-center`}
        >
          <img src={dolar} alt="" className={` ${styles.img123}`} />
          {name}
        </Col>
        <Col
          className={`${
            expand ? styles.ExpandcolNot : styles.colNot
          } mt-2 col-3 text-center`}
        >
          <img src={Vector} alt="" className={` ${styles.img123}`} /> {amount}
        </Col>
        <Col
          className={`${
            expand ? styles.ExpandcolNot : styles.colNot
          } mt-2 col-3 text-center`}
          style={{ color: `${expand ? "black" : color}` }}
        >
          <img src={stat} alt="" className={` ${styles.img123}`} /> {percent}
        </Col>
        <Col className={`${styles.colNot4} mt-2 col-3 text-center`}>
          <img src={dolar2} alt="" className={` ${styles.img4}`} /> {risk}
        </Col>
        {expand && (
          <Row className={` ${styles.internalRow} mx-auto`}>
            <div onClick={() => setExpand(true)}>
              <p className="mt-4">
                <b>$TSLA</b> just abubnced an acquisition of <b>$NFLX</b> at
                <b> $200 B</b>
              </p>
              <p style={{ marginTop: "-.2rem" }}>
                This is an{" "}
                <a style={{ color: "blue", textDecoration: "underline" }}>
                  {" "}
                  arbitarage opportunity
                </a>
                , with the max gain being x% if the deal closers,but the
                possiple riskk is %Y if the deal fails, if the deal success is %
                and therefore the recommended play is{" "}
                <a style={{ color: "blue", textDecoration: "underline" }}>
                  long/short
                </a>{" "}
                $APC
              </p>
            </div>
          </Row>
        )}
      </Row>
    </div>
  );
};

export default Notification;
