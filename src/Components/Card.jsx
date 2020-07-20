import React from "react";
import { format } from "../services/format.js";

import "../styles/Card.css";
const Card = (props) => {
  const { size } = props;
  const {
    id,
    snippet: {
      title,
      description,
      thumbnails: {
        high: { url },
      },
      channelTitle,
    },
    statistics: { viewCount, likeCount },
  } = props.video;
  var imgStyle;
  var cardStyle;
  var contentStyle = { fontSize: "14px", color: "rgb(97, 95, 95)" };
  var contentStyle = null;

  if (size === "medium") {
    imgStyle = { width: "190px", height: "120px" };
    cardStyle = {
      width: "190px",
      height: "218px",
      // border: "1px solid red",
      margin: "20px 0",
    };
    contentStyle = { fontSize: "12px" };
  } else if (size === "small") {
    imgStyle = { width: "160px", height: "100px" };
    cardStyle = {
      width: "340px",
      height: "100px",
      border: "1px solid red",
      display: "flex",
      justifyContent: "center",
      // alignItems: "center",
      margin: "0 0 10px 0",
    };
    contentStyle = { marginLeft: "5px", fontSize: "13px" };
  } else if (size === "large") {
    imgStyle = { width: "220px", height: "120px" };
    cardStyle = {
      height: "120px",
      border: "1px solid red",
      display: "flex",
      margin: "22px 0",
    };
    contentStyle = { marginLeft: "15px", fontSize: "15px" };
  }

  return (
    <div className="Card" style={cardStyle}>
      <img style={imgStyle} src={url} alt="dummy" />
      <div className="content" style={contentStyle}>
        <p className="title" style={{ color: "black" }}>
          <b>{title}</b>
        </p>
        <p className="channelName">{channelTitle}</p>
        <p className="views">
          {format(viewCount)} Views || {format(likeCount)} Likes
        </p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
