import React, { useEffect } from "react";
import "../styles/VideoPlayer.css";
import Card from "../Components/Card";
import { connect } from "react-redux";
import {
  SET_RELATED_VIDEOS,
  SET_CURRENT_VIDEOID,
} from "../Redux/actions/videoActions";
import { Axios } from "../services/httpServices";
import { keys } from "../configure";
import { videoState } from "../Redux/mapReduxStateToProps";
import CommentThread from "../Components/CommentThread";
const VideoPlayer = (props) => {
  const {
    match: {
      params: { videoId },
    },
    videoState: { relatedVideos, commentThreads },
    dispatch,
  } = props;
  useEffect(() => {
    (async () => {
      var { data } = await Axios.get(
        `/search?part=snippet&relatedToVideoId=${videoId}&type=video&maxResults=15&key=${keys.API_KEY}`
      );
      dispatch({
        type: "SET_RELATED_VIDEOS",
        payload: data.items,
      });
      var { data } = await Axios.get(
        `/commentThreads?part=snippet,replies&videoId=${videoId}&key=${keys.API_KEY}`
      );
      dispatch({
        type: "SET_COMMENT_THREADS",
        payload: data.items,
      });
    })();
    dispatch({ type: { SET_CURRENT_VIDEOID }, payload: videoId });
  }, [videoId]);
  return (
    <div className="VideoPlayer">
      <div className="main_video">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            height="350px"
            width="600px"
            className="embed-responsive-item"
            src={`https://www.youtube.com/embed/${videoId}`}
            allowFullScreen
          ></iframe>
        </div>
        <h2 style={{ margin: "40px 0 0 0" }}>Comments</h2>
        {commentThreads.length !== 0 &&
          commentThreads.map((commentThread) => (
            <CommentThread commentThread={commentThread} />
          ))}
      </div>
      <div className="related_videos">
        {relatedVideos.length !== 0 &&
          relatedVideos.map((video) => (
            <Card key={video.id.videoId} size="small" video={video} />
          ))}
      </div>
    </div>
  );
};

export default connect(videoState, null)(VideoPlayer);
