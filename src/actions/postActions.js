import { FETCH_GROUPS, NEW_GROUPS } from "./types";
//function that would return another function with dispatch
export const fetchPosts = () => dispatch => {
  window
    .fetch("/groups-summary.json")
    .then(res => res.json())
    .then(groups =>
      dispatch({
        type: FETCH_GROUPS,
        payload: groups
      })
    )
    .catch(err => {
      console.log(err);
    });
};
