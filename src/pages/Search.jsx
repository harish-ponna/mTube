import React, { useEffect } from "react";
import Card from "../Components/Card";
import { parse } from "query-string";
import { Axios } from "../services/httpServices";
import { keys } from "../configure";
import { SET_SEARCHED_VIDEOS } from "../Redux/actions/videoActions";
import { videoState } from "../Redux/mapReduxStateToProps";
import { connect } from "react-redux";
const Search = (props) => {
  const {
    location: { search },
    videoState: { searchedVideos },
  } = props;
  useEffect(() => {
    const parsed = parse(search);
    (async () => {
      const { data } = await Axios(
        `/search?part=snippet&key=${keys.API_KEY}&regionCode=IN&type=video&chart=mostPopular&maxResults=15&q=${parsed.q}`
      );
      props.dispatch({ type: "SET_SEARCHED_VIDEOS", payload: data.items });
    })();
  }, [search]);
  return (
    <div className="Search" style={{ width: "70%", margin: "0 15%" }}>
      {searchedVideos.length !== 0 ? (
        searchedVideos.map((video) => (
          <Card key={video.id.videoId} size="large" video={video} />
        ))
      ) : (
        <h1 style={{ textAlign: "center", marginTop: "50px" }}>Loading...</h1>
      )}
    </div>
  );
};

export default connect(videoState, null)(Search);
