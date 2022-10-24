import React from "react";
import Lists from "../lists/Lists";
import classes from "./Form.module.css";
import backgroundVideo from "../../assets/video/132472553-seamless-loop-video-summer-bea.mp4";
import axios from "axios";

const baseUrl = "https://users-get-data-default-rtdb.firebaseio.com/";

const Form = () => {
  const postDataUserValue = (data, setData) => {
    axios
      .post(baseUrl + data.name + ".json", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

      setData({ name: '', email: '', password: '', confirmPassword: '', gender: ''})
  };

  return (
    <div className={classes.Form}>
      <Lists postDataUserValue={postDataUserValue} />
      <video src={backgroundVideo} autoPlay loop muted></video>
    </div>
  );
};

export default Form;
