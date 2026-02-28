export type QuestCategory = "easy" | "normal" | "hard";

export interface Card {
  name: string;
  category: QuestCategory;
  exp: number;
}
