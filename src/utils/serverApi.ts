import axios from 'axios';
import { BASE_URL, NOTE_JSON } from './constants';

export const getNotesAPI = () => {
  return axios.get(`${BASE_URL}${NOTE_JSON}`);
};
