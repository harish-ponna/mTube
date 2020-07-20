import React, { useEffect } from "react";
import { connect } from "react-redux";
import { SET_MOST_POPULAR_VIDEOS } from "../Redux/actions/videoActions";
import { Axios } from "../services/httpServices";
import { keys } from "../configure";

// Modules
import "../styles/Home.css";
import Card from "../Components/Card";
import { videoState } from "../Redux/mapReduxStateToProps";

const Home = (props) => {
  const {
    videoState: { mostPopularVideos },
    SET_MOST_POPULAR_VIDEOS,
  } = props;
  useEffect(() => {
    console.log("ran");
  }, [mostPopularVideos]);

  if (mostPopularVideos.length === 0) {
    const fetchVideos = async () => {
      const { data } = await Axios(
        `/videos?part=snippet,statistics&chart=mostPopular&maxResults=20&regionCode=IN&key=${keys.API_KEY}`
      );
      SET_MOST_POPULAR_VIDEOS(data.items);
    };
    fetchVideos();
  }

  return (
    <div className="Home">
      <h3>Most Popular videos</h3>
      <div className="Home_cards">
        {mostPopularVideos.length !== 0 ? (
          mostPopularVideos.map((video) => (
            <Card video={video} size={"medium"} />
          ))
        ) : (
          <h1 style={{ marginLeft: "45%", marginTop: "100px" }}>Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default connect(videoState, { SET_MOST_POPULAR_VIDEOS })(Home);
