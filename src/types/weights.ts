export type Measures = {
  calves?: number;
  arms?: number;
  chest?: number;
  legs?: number;
  waist?: number;
  neck?: number;
  hips?: number;
};

export type Weight = {
  id: string;
  weight: number;
  date: string;
  measures?: Measures;
  comments?: string;
};
