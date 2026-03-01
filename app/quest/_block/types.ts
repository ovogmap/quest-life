import z from "zod";

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

const DifficultySchema = z.enum(["easy", "normal", "hard"] as const);

export type Difficulty = z.infer<typeof DifficultySchema>;

export const CreateQuestFormSchema = z.object({
  title: z.string(),
  difficulty: DifficultySchema,
  exp: z.number(),
  sideQuests: z.array(
    z.object({
      title: z.string(),
    })
  ),
});

export type CreateQuestFormType = z.infer<typeof CreateQuestFormSchema>;
