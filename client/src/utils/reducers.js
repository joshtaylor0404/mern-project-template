import { DEMO_ACTION } from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case DEMO_ACTION:
      return {
        ...state,
        // never modify the state directly.
        // always return a copy of state plus your modifications
      };

    default:
      // In case no actions are matched, always include a default
      // case in your switch statement that returns the state.
      return state;
  }
};
