import { Subject } from './types';
declare const createSubject: <T>(initialState: T) => Subject<T>;
export default createSubject;
