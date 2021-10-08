export interface post {
  id: number;
  title: string;
  context: string;
  date: string;
  weather: number;
}

export interface result {
  onSuccess: (res: boolean) => void;
  onFail: (err: boolean) => void;
}
