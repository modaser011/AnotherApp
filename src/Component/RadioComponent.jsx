import React, { useState } from "react";
import { Form } from "react-bootstrap";
import styles from "../Styles/Radio.module.css"; // Import CSS module
import downArrow from "../assets/Vector(14).png";
import rightArrow from "../assets/[CITYPNG.COM]HD Youtube YT White Triangle Symbol Play Icon PNG - 2000x2000.png";

const RadioComponent = ({ word, choice1, choice2, choice3 }) => {
  const [show, setShow] = useState(true);

  return (
    <>
      <div
        onClick={() => setShow(!show)}
        className="d-flex mt-2"
        style={{ cursor: "pointer", width: "fit-content" }}
      >
        <img
          className={styles.image}
          src={show ? downArrow : rightArrow}
          alt={show ? "rightArrow" : "downArrow"}
        />
        <h6 className="mb-3">{word}</h6>
      </div>
      {show && (
        <div
          className={`ms-2`}
          style={{
            marginTop: "-5px",
            fontSize: ".8rem",
            marginBottom: ".4rem",
          }}
        >
          <Form>
            <Form.Check
              type="radio"
              label={choice1}
              name="group1"
              id={choice1}
              className={`${styles.blackRadio}`}
            />
            <Form.Check
              type="radio"
              name="group1"
              label={choice2}
              id={choice2}
              className={styles.blackRadio}
            />
            <Form.Check
              type="radio"
              name="group1"
              label={choice3}
              id={choice3}
              className={styles.blackRadio}
            />
          </Form>
        </div>
      )}
    </>
  );
};

export default RadioComponent;
