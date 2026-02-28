"use client";

import { create, keyframes, props } from "@stylexjs/stylex";
import { sizeVariable } from "../../../../../styles/styleVariable.stylex";
import DrawerBottom from "@/components/Drawer";
import { TextField } from "@radix-ui/themes";
import { useState } from "react";
import { Card, QuestCategory } from "../../types";
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
    name: "쉬움",
    category: "easy",
    exp: 20,
  },
  {
    name: "보통",
    category: "normal",
    exp: 40,
  },
  {
    name: "어려움",
    category: "hard",
    exp: 60,
  },
];

export default function CreateQuestBottomSheet() {
  const [selectedQuestCategory, setSelectedQuestCategory] =
    useState<QuestCategory | null>(null);
  return (
    <DrawerBottom>
      <div {...props(styles.content)}>
        <TextField.Root
          size="2"
          radius="medium"
          color="indigo"
          placeholder="퀘스트 이름을 입력해주세요"
        />
        <div {...props(styles.cardSelectContainer)}>
          {CARD_LIST.map((card, i) => (
            <QuestCategoryCard
              key={card.category}
              card={card}
              index={i}
              selectedQuestCategory={selectedQuestCategory}
              setSelectedQuestCategory={setSelectedQuestCategory}
            />
          ))}
        </div>
      </div>
    </DrawerBottom>
  );
}

const styles = create({
  content: {
    paddingBottom: "100px",
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
});
