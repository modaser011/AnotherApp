import React, { useState } from "react";
import styles from "../Styles/Sidebar.module.css";
import logo from "../assets/street suite logo-04 1.png";
import alert from "../assets/Vector(2).png";
import trining from "../assets/Vector(3).png";
import Automation from "../assets/Group(4).png";
import Portfolio from "../assets/Vector(5).png";
import Trading from "../assets/Vector(4).png";
import person from "../assets/Group 101(2).png";
import "../index.css";
const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const [isHovering2, setIsHovering2] = useState(false);

  const handleMouseOver2 = () => {
    setIsHovering2(true);
  };

  const handleMouseOut2 = () => {
    setIsHovering2(false);
  };
  const [isHovering3, setIsHovering3] = useState(false);

  const handleMouseOver3 = () => {
    setIsHovering3(true);
  };

  const handleMouseOut3 = () => {
    setIsHovering3(false);
  };
  return (
    <div
      className={styles.sidebar}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className={styles.partialSidebar}>
        <div className={isExpanded ? styles.fullSidebar : ""}>
          <div className="d-flex">
            <img
              src={logo}
              alt="Logo"
              className={`mx-auto w-75 h-75 ${styles.mainLogo} ${
                isExpanded ? `mt-4 mb-4` : `mt-4 mb-5`
              } ${isExpanded ? styles.visible : styles.hidden}`}
            />
          </div>
          <div>
            {!isExpanded && (
              <div className="d-block">
                <img
                  src={alert}
                  alt="Logo"
                  className={`${styles.logo2} ms-4 me-2 mb-4 `}
                />
                <img
                  src={trining}
                  alt="Logo"
                  className={`${styles.logo2} ms-4 me-2 mb-4`}
                />
                <img
                  src={Automation}
                  alt="Logo"
                  className={`${styles.logo2} ms-4 me-2 mb-4`}
                />
                <img
                  src={Portfolio}
                  alt="Logo"
                  className={`${styles.logo2} ms-4 me-2 mb-4`}
                />
                <img
                  src={Trading}
                  alt="Logo"
                  className={`${styles.logo2} ms-4 me-2 mb-4`}
                />
                <img
                  src={person}
                  alt="Logo"
                  className={`${styles.person2} ms-3 me-2`}
                />
              </div>
            )}
            {isExpanded && (
              <>
                <div>
                  <div
                    style={{ color: "white" }}
                    className={` ${styles.Links} mb-3`}
                  >
                    <img
                      src={alert}
                      alt="Logo"
                      className={`${styles.logo} ms-4 me-2`}
                    />
                    Alerts
                  </div>
                  <div
                    style={{ color: "white" }}
                    className={` ${styles.Links} mb-3`}
                  >
                    <img
                      src={trining}
                      alt="Logo"
                      className={`${styles.logo} ms-4 me-2`}
                    />
                    Training
                  </div>
                  <div
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    style={{ color: "gray" }}
                    className={` ${styles.Links} mb-3`}
                  >
                    {!isHovering && (
                      <>
                        <img
                          src={Automation}
                          alt="Logo"
                          className={`${styles.logo} ms-4 me-2`}
                        />
                        Automation
                      </>
                    )}
                    {isHovering && (
                      <>
                        <div
                          id="Div1"
                          className={`text-center mx-auto ${styles.comingSoonDiv}`}
                        >
                          j
                        </div>
                        <p
                          className={`text-center w-75 mx-auto ${styles.comingSoon}`}
                          style={{
                            marginTop: "-1.5rem",
                          }}
                        >
                          Coming soon
                        </p>
                      </>
                    )}
                  </div>
                  <div
                    onMouseOver={handleMouseOver2}
                    onMouseOut={handleMouseOut2}
                    style={{ color: "gray" }}
                    className={` ${styles.Links} mb-3`}
                  >
                    {!isHovering2 && (
                      <>
                        <img
                          src={Portfolio}
                          alt="Logo"
                          className={`${styles.logo} ms-4 me-2`}
                        />
                        Portfolio
                      </>
                    )}
                    {isHovering2 && (
                      <>
                        <div
                          id="Div1"
                          className={`text-center mx-auto ${styles.comingSoonDiv}`}
                        >
                          j
                        </div>
                        <p
                          className={`text-center w-75 mx-auto ${styles.comingSoon}`}
                          style={{
                            marginTop: "-1.5rem",
                          }}
                        >
                          Coming soon
                        </p>
                      </>
                    )}
                  </div>

                  <div
                    onMouseOver={handleMouseOver3}
                    onMouseOut={handleMouseOut3}
                    style={{ color: "gray" }}
                    className={` ${styles.Links} mb-3`}
                  >
                    {!isHovering3 && (
                      <>
                        <img
                          src={Trading}
                          alt="Logo"
                          className={`${styles.logo} ms-4 me-2`}
                        />
                        Trading
                      </>
                    )}
                    {isHovering3 && (
                      <>
                        <div
                          id="Div1"
                          className={`text-center mx-auto ${styles.comingSoonDiv}`}
                        >
                          j
                        </div>
                        <p
                          className={`text-center w-75 mx-auto ${styles.comingSoon}`}
                          style={{
                            marginTop: "-1.5rem",
                          }}
                        >
                          Coming soon
                        </p>
                      </>
                    )}
                  </div>
                </div>

                <div className={`${styles.personWrapper} mt-5`}>
                  <div className={` ${styles.Links} d-flex`}>
                    <img
                      src={person}
                      alt="Logo"
                      className={`${styles.person} ms-4 me-2`}
                    />
                    <div className="d-block" style={{ marginTop: "-3px" }}>
                      <p
                        style={{
                          fontSize: "15px",
                          color: "white",
                        }}
                      >
                        Moni Roy
                      </p>
                      <br />
                      <p
                        className="ms-1"
                        style={{
                          marginTop: "-2.5rem",
                          color: "gray",
                          fontSize: "13px",
                        }}
                      >
                        Beginner
                      </p>
                    </div>
                  </div>
                  <div className="d-block">
                    <p
                      className="ms-5"
                      style={{
                        marginLeft: "3rem",
                        color: "gray",
                        fontSize: "13px",
                      }}
                    >
                      Street Suite. 2.0
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
