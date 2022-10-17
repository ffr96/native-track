export interface Exercises {
  name: string;
  reps: number[];
  sets: number;
  weight: number[];
  comments?: string;
  id: string;
}

export interface TrainingLog {
  name: string;
  date: string;
  exercises: Exercises[];
  id: string;
  comments?: string;
  tags?: string[];
}
