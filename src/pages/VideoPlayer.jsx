import React from "react";
import "../styles/VideoPlayer.css";
import Card from "../Components/Card";

const VideoPlayer = (props) => {
  return (
    <div className="VideoPlayer">
      <div className="main_video">{/* <Card size="large" /> */}</div>
      <div className="related_videos">
        <Card size="small" />
        <Card size="small" />
        <Card size="small" />
        <Card size="small" />
        <Card size="small" />
        <Card size="small" />
      </div>
    </div>
  );
};

export default VideoPlayer;
