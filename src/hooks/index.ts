import * as Redux from 'react-redux';
import { AppDispatch, RootState } from 'src/features/store';

export const useDispatch: () => AppDispatch = Redux.useDispatch;
export const useSelector: Redux.TypedUseSelectorHook<RootState> = Redux.useSelector;
