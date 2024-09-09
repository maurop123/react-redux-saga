import {
  ADD_VIDEO,
  CHANGE_VIDEOS_PAGE,
  GET_VIDEOS_SUCCESS,
  SHUFFLE_VIDEOS,
} from '../actions/videosAction.ts';

const initialState = {
  videos: [],
  page: 1,
  pageSize: 6,
};

export default (state = { ...initialState }, action) => {
  switch (action.type) {
    case ADD_VIDEO:
      console.debug('add', action);
      return { ...state, videos: [action.action, ...state.videos] };
    case CHANGE_VIDEOS_PAGE:
      return { ...state, page: action.pageNumber };
    case GET_VIDEOS_SUCCESS:
      return { ...state, videos: action.videos };
    case SHUFFLE_VIDEOS:
      let vids = state.videos.slice();
      console.debug({ state, action });
      for (let i = vids.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [vids[i], vids[j]] = [vids[j], vids[i]];
      }
      return { ...state, videos: vids };
    default:
      return state;
  }
};
