import { UpdateFn } from './types';
declare const createStore: <T>(initialState: T) => {
    update: (updater: UpdateFn<T> | Partial<T>) => void;
    subject: import("./types").Subject<T>;
};
export default createStore;
