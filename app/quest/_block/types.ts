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

export interface SideQuest {
  id: string;
  title: string;
  isCompleted: boolean;
}

export interface MainQuest {
  id: string;
  title: string;
  isCompleted: boolean;
  difficulty: Difficulty;
  exp: number;
  sideQuests: SideQuest[];
}

export interface CreateQuestForm
  extends Omit<MainQuest, "id" | "isCompleted" | "sideQuests"> {
  sideQuests: Omit<SideQuest, "id" | "isCompleted">[];
}
