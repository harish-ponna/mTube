const TOGGLE_VIDEO_FETCHING_STATE = (payload) => ({
  type: "TOGGLE_VIDEO_FETCHING_STATE",
  payload,
});
const SET_MOST_POPULAR_VIDEOS = (payload) => ({
  type: "SET_MOST_POPULAR_VIDEOS",
  payload,
});
const SET_SEARCHED_VIDEOS = (payload) => ({
  type: "SET_SEARCHED_VIDEOS",
  payload,
});
const SET_TRENDING_VIDEOS = (payload) => ({
  type: "SET_TRENDING_VIDEOS",
  payload,
});
const SET_RELATED_VIDEOS = (payload) => ({
  type: "SET_RELATED_VIDEOS",
  payload,
});
const SET_CURRENT_VIDEOID = (payload) => ({
  type: "SET_CURRENT_VIDEO",
  payload,
});

export {
  TOGGLE_VIDEO_FETCHING_STATE,
  SET_MOST_POPULAR_VIDEOS,
  SET_SEARCHED_VIDEOS,
  SET_TRENDING_VIDEOS,
  SET_RELATED_VIDEOS,
  SET_CURRENT_VIDEOID,
};
