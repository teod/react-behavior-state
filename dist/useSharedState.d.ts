import { Store, UpdateFn } from './types';
declare const useSharedState: <T = any>(store: Store<T>) => [T, (arg0: UpdateFn<T> | Partial<T>) => void];
export default useSharedState;
