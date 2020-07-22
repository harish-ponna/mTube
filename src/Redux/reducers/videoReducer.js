const initialState = {
  mostPopularVideos: [],
  searchedVideos: [],
  trendignVideos: [],
  relatedVideos: [],
  currentVideoId: "",
  commentThreads: [],
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
    case "SET_RELATED_VIDEOS":
      return { ...state, relatedVideos: payload };
    case "SET_CURRENT_VIDEOID":
      return { ...state, currentVideo: payload };
    case "SET_COMMENT_THREADS":
      return { ...state, commentThreads: payload };

    default:
      return state;
  }
};

export { videoReducer };
