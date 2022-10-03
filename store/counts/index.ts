import { IncreaseAction, DecreaseAction } from './actions';

export interface State {
  count: number;
}
const initialState: State = {
  count: 1,
};

type Action = IncreaseAction | DecreaseAction;
export const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {
        count: state.count + 1,
      };
    case 'DECREASE_COUNT':
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export * from './selectors';
export * from './actions';
