import { Store, UpdateFn } from './types';
declare const createHook: <T = any>(store: Store<T>) => [T, (arg0: UpdateFn<T> | Partial<T>) => void];
export default createHook;
