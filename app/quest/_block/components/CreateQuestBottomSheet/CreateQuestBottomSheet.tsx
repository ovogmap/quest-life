"use client";

import { HiOutlinePencilAlt } from "react-icons/hi";
import { create, keyframes, props } from "@stylexjs/stylex";
import { sizeVariable } from "@/styles/styleVariable.stylex";
import DrawerBottom from "@/components/Drawer";
import { Button, Text, TextField } from "@radix-ui/themes";
import { useState } from "react";
import { Card, Difficulty } from "../../types";
import QuestCategoryCard from "./QuestCategoryCard";

const CARD_PULSE_DURATION_MS = "900ms";
const CARD_SELECTED_SCALE = "1.02";
const cardPulseAnimation = keyframes({
  "0%": { transform: "scale(1)" },
  "50%": { transform: `scale(${CARD_SELECTED_SCALE})` },
  "100%": { transform: "scale(1)" },
});

const CARD_LIST: Card[] = [
  {
    value: "쉬움",
    difficulty: "easy",
    exp: 20,
  },
  {
    value: "보통",
    difficulty: "normal",
    exp: 40,
  },
  {
    value: "어려움",
    difficulty: "hard",
    exp: 60,
  },
];

export default function CreateQuestBottomSheet() {
  const [selectedDifficulty, setSelectedDifficulty] =
    useState<Difficulty | null>(null);
  return (
    <DrawerBottom>
      <div {...props(styles.content)}>
        <TextField.Root
          size="2"
          radius="medium"
          color="indigo"
          placeholder="퀘스트 내용을 입력해주세요"
        />
        <Text size="1" color="gray">
          퀘스트의 난이도를 선택해주세요.
        </Text>
        <div {...props(styles.cardSelectContainer)}>
          {CARD_LIST.map((card, i) => (
            <QuestCategoryCard
              key={card.difficulty}
              card={card}
              index={i}
              selectedDifficulty={selectedDifficulty}
              setSelectedDifficulty={setSelectedDifficulty}
            />
          ))}
        </div>
        <Button size="3">
          <div {...props(styles.buttonContent)}>
            <HiOutlinePencilAlt />
            퀘스트 생성
          </div>
        </Button>
      </div>
    </DrawerBottom>
  );
}

const styles = create({
  content: {
    display: "flex",
    flexDirection: "column",
    gap: sizeVariable.size12,
  },
  cardSelectContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: sizeVariable.size4,
  },
  cardItemSelected: {
    animationName: cardPulseAnimation,
    animationDuration: CARD_PULSE_DURATION_MS,
    animationTimingFunction: "ease-in-out",
    animationIterationCount: "infinite",
  },
  buttonContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: sizeVariable.size4,
  },
});
