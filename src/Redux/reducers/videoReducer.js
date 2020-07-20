const initialState = {
  mostPopularVideos: [],
  searchedVideos: [],
  trendignVideos: [],
  realatedVideos: [],
  currentVideo: [],
  isVideoFetching: false,
};

const videoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "TOGGLE_VIDEO_FETCHING_STATE":
      return { ...state, isVideoFetching: !state.isVideoFetching };
    case "SET_MOST_POPULAR_VIDEOS":
      return {
        ...state,
        mostPopularVideos: [...state.mostPopularVideos, ...payload],
      };
    case "SET_SEARCHED_VIDEOS":
      return { ...state, searchedVideos: payload };
    case "SET_TRENDING_VIDEOS":
      return { ...state, trendignVideos: payload };
    case "SET_REALATED_VIDEOS":
      return { ...state, realatedVideos: payload };
    case "SET_CURRENT_VIDEO":
      return { ...state, currentVideo: payload };

    default:
      return state;
  }
};

export { videoReducer };
