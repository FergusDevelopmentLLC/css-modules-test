import React from "react";
import styles from "./App.module.css";
import Paragraph from "./Paragraph";
import source from './source.png';

const App = () => {
  return (
    <div>
      <p className={styles.red}>A class named "red" is defined in App.modules.css. App.module.css is imported in App.js. I am red because I am styled like: {`<p `}className={`{styles.red}`}>content{`</p>`}.</p>
      <p className="red">I don't pick up the red class from App.module.css even though my class is "red", which is correct. I am styled like: {`<p `}className={`"red"`}>content{`</p>`}.</p>
      <Paragraph />
      <p>Documented: <a href='https://create-react-app.dev/docs/adding-a-css-modules-stylesheet'>https://create-react-app.dev/docs/adding-a-css-modules-stylesheet</a></p>
      <img src={source} />
    </div>
  );
};
export default App;
