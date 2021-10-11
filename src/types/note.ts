export interface typeNote {
  id: number;
  title: string;
  context: string;
  date: string;
  mood: string;
  weather: number;
}

export type typeNotes = typeNote[];

export interface loadingStatus {
  loading?: boolean;
}
