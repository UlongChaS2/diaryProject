import { SHOW_MODAL, CLOSE_MODAL } from './types';

export const showModal = (title: string) => {
  return { type: SHOW_MODAL, title: title };
};

export const closeModal = () => {
  return { type: CLOSE_MODAL };
};
