import { Difficulty } from "../types";

export default function MainQuestCard() {
  return <div>MainQuestCard</div>;
}

interface SideQuest {
  id: string;
  title: string;
  isCompleted: boolean;
}

interface MainQuest {
  id: string;
  title: string;
  isCompleted: boolean;
  difficulty: Difficulty;
  exp: number;
  sideQuests: SideQuest[];
}

const data: MainQuest[] = [
  {
    id: "main-1",
    title: "코딩 테스트 정복하기", // 메인 퀘스트 제목
    isCompleted: false,
    difficulty: "easy",
    exp: 100,
    sideQuests: [
      {
        id: "sub-1",
        title: "코딩 테스트 3문제 풀기",
        isCompleted: true,
      },
      {
        id: "sub-2",
        title: "Lv.3 문제 풀기",
        isCompleted: false,
      },
      {
        id: "sub-3",
        title: "코딩테스트 도전!",
        isCompleted: false,
      },
    ],
  },
];
