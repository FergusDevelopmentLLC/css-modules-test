import React from "react";
import styles from "./Paragraph.module.css";

const Paragraph = () => {
  return (
    <React.Fragment>
      <p className={styles.red}>A class named "red" is defined in Paragraph.module.css. Paragraph.module.css is imported in Paragraph.js. I am red because I am styled like: {`<p `}className={`{styles.red}`}>content{`</p>`}.</p>
      <p className="red">I don't pick up the red class from Paragraph.module.css even though my class is "red". This is correct. I am styled like: {`<p `}className={`"red"`}>content{`</p>`}.</p>
    </React.Fragment>
  );
};
export default Paragraph;
