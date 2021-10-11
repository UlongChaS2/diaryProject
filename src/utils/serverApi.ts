import axios from 'axios';
import { BASE_URL, NOTE_JSON } from './config';

export const getNotesAPI = () => {
  return axios.get(`${BASE_URL}${NOTE_JSON}`);
};
