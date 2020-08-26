// Dependencies
import React from "react";
import Fade from "react-reveal/Fade";
// Components
import Container from "../container.js";
// Assets
import styles from "./work.module.css";

export default function Work() {
  const [datas, setDatas] = React.useState([
    {
      name: "ZEN Rooms",
      position: "[ Python Developer ]",
      description:
        "Working on internal system for Finance team automation of processes."
    },
    {
      name: "RingCentral",
      position: "[ GSS PMO Analyst / Python Developer ]",
      description:
        "Internal HR system using Python, Django, React. From designing to deploying internal tool. Also worked with Microsoft PowerApps and Sharepoint for specific purposes."
    },
    {
      name: "SiP",
      position: "[ Data Specialist ]",
      description:
        "Data-mining, data-analysis, Facebook Marketing and automating Internal Processes. Stack used is mostly Python with Pandas, Matplotlib, Numpy, and Tkinter."
    }
  ]);
  const [index, setIndex] = React.useState(0);
  const [company, setCompany] = React.useState(datas[index]);
  const [changing, setChanging] = React.useState(false);

  const handleChange = change => {
    setChanging(true);

    const timer = setTimeout(() => {
      const new_index = index;
      if (change === "add") {
        setIndex(new_index + 1);
        setCompany(datas[index + 1]);
      } else {
        setIndex(new_index - 1);
        setCompany(datas[index - 1]);
      }
      setChanging(false);
    }, 300);
  };

  return (
    <Container>
      <div className={styles.workContainer} id="work">
        <div className={styles.header}>work.</div>
        <div className={styles.contain}>
          <div
            className={`${styles.mainText} ${
              changing ? styles.fadeOut : styles.fadeIn
            }`}
          >
            {company.name}
            <br />
            <div
              className={`${styles.text} ${
                changing ? styles.fadeOut : styles.fadeIn
              }`}
            >
              {company.position}
            </div>
            <br />
          </div>

          {index !== 0 ? (
            <i
              class={`${styles.arrowLeft} ${styles.arrow}`}
              onClick={() => handleChange()}
            ></i>
          ) : (
            ""
          )}
          <div
            className={`${styles.description} ${
              changing ? styles.fadeOut : styles.fadeIn
            }`}
          >
            {company.description}
          </div>

          {index !== datas.length - 1 ? (
            <i
              class={`${styles.arrowRight} ${styles.arrow}`}
              onClick={() => handleChange("add")}
            ></i>
          ) : (
            ""
          )}
        </div>
      </div>
    </Container>
  );
}
