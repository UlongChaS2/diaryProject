import { BASE_URL } from './constants';
import { result } from 'types/index';

// export const customFetch = (
//   endpoint: string,
//   options = {},
//   { onSuccess, onFail }: result = {}
// ) => {
//   const opts = {
//     method: 'GET',
//     headers: { 'Content-type': 'application/json' },
//     ...options,
//   };

//   return fetch(BASE_URL + endpoint, opts)
//     .then((res) => res.json())
//     .then((res) => onSuccess && onSuccess(res))
//     .catch((err) => onFail && onFail(err));
// };
