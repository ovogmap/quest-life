"use client";

import { create, props } from "@stylexjs/stylex";
import ProgressBar from "@/components/ProgressBar";
import { colorVariable, sizeVariable } from "@/styles/styleVariable.stylex";
import { Text } from "@radix-ui/themes";
import CreateQuestBottomSheet from "./_block/components/CreateQuestBottomSheet/CreateQuestBottomSheet";
import { useState } from "react";
import { Quest } from "./_block/types";
import QuestCard from "./_block/components/QuestCard";

const CURRENT_EXP = 320;
const NEXT_LEVEL_EXP = 500;

const QUEST_LIST: Quest[] = [
  {
    id: 1,
    content: "코딩 테스트 3문제 풀기",
    difficulty: "easy",
    exp: 20,
  },
  {
    id: 2,
    content: "lv.3 문제 풀기",
    difficulty: "normal",
    exp: 40,
  },
  {
    id: 3,
    content: "코딩테스트 도전!",
    difficulty: "hard",
    exp: 60,
  },
  {
    id: 4,
    content: "코딩 테스트 3문제 풀기",
    difficulty: "easy",
    exp: 20,
  },
  {
    id: 5,
    content: "lv.3 문제 풀기",
    difficulty: "normal",
    exp: 40,
  },
  {
    id: 6,
    content: "코딩테스트 도전!",
    difficulty: "hard",
    exp: 60,
  },
  {
    id: 7,
    content: "코딩 테스트 3문제 풀기",
    difficulty: "easy",
    exp: 20,
  },
  {
    id: 8,
    content: "lv.3 문제 풀기",
    difficulty: "normal",
    exp: 40,
  },
  {
    id: 9,
    content: "코딩테스트 도전!",
    difficulty: "hard",
    exp: 60,
  },
];

export default function QuestPage() {
  const [questList, setQuestList] = useState<Quest[]>(QUEST_LIST);
  return (
    <div {...props(styles.container)}>
      <section {...props(styles.rankContainer)}>
        <div {...props(styles.rankMark)} />
        <Text size="2" weight="bold">
          lv.1
        </Text>
        <ProgressBar
          value={CURRENT_EXP}
          max={NEXT_LEVEL_EXP}
          color={colorVariable.purple}
        />
      </section>
      <section {...props(styles.questListContainer)}>
        {questList.map((quest) => (
          <QuestCard key={quest.id} quest={quest} />
        ))}
      </section>
      <CreateQuestBottomSheet />
    </div>
  );
}

const styles = create({
  container: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  rankContainer: {
    width: "100%",
    height: "300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
  },
  rankMark: {
    width: "160px",
    height: "160px",
    backgroundColor: colorVariable.green,
    borderRadius: "50%",
  },
  questListContainer: {
    display: "flex",
    flexDirection: "column",
    gap: sizeVariable.size12,
    width: sizeVariable.fullWidth,
  },
});
