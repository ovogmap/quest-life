export type Difficulty = "easy" | "normal" | "hard";

export interface Card {
  value: string;
  difficulty: Difficulty;
  exp: number;
}

export interface Quest {
  id: number;
  content: string;
  difficulty: Difficulty;
  exp: number;
}
