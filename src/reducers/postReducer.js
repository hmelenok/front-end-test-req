import { FETCH_GROUPS, NEW_GROUPS } from "../actions/types";

const initialState = {
  groups: [],
  group: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
