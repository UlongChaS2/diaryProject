export interface typeNote {
  id: number;
  title: string;
  context: string;
  date: string | Date;
  mood: string;
  weather: string;
}

export type typeNotes = typeNote[];

export interface loadingStatus {
  loading?: boolean;
}

export enum TMood {
  HAAPY = '😃',
  PLEASED = '😄',
  EXCITED = '😆',
  HURT = '😢',
  FRUSTRATED = '🤯',
  ANNOYED = '😡',
  SAD = '😭',
  EXHAUSTED = '😩',
  RELAXED = '😌',
  CRANKY = '🤬',
}

export enum TWeather {
  SUNNY = '☀️',
  RAINY = '☔️',
  CLOUDY = '☁️',
  FOGGY = '🌫',
  WINDY = '🌬',
  THUNDER = '⛈',
  SNOWING = '☃️',
}
