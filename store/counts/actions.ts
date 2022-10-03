export type IncreaseAction = { type: 'INCREASE_COUNT'; payload: number };
export type DecreaseAction = { type: 'DECREASE_COUNT'; payload: number };

export function increase(payload: number): IncreaseAction {
  return {
    type: 'INCREASE_COUNT',
    payload: payload,
  };
}

export function decrease(payload: number): DecreaseAction {
  return {
    type: 'DECREASE_COUNT',
    payload: payload,
  };
}
