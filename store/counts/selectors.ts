import { AppState } from '..';
import { State } from '.';

export const stateSelector = (state: AppState): State => state.counts;
export const countSelector = (state: AppState): number => state.counts.count;