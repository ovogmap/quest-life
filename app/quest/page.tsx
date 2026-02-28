"use client";

import { create, keyframes, props } from "@stylexjs/stylex";
import ProgressBar from "@/components/ProgressBar";
import * as Tabs from "@/components/Tabs";
import { colorVariable, sizeVariable } from "../../styles/styleVariable.stylex";
import DrawerBottom from "@/components/Drawer";
import { Text, TextField } from "@radix-ui/themes";
import { useState } from "react";

const CURRENT_EXP = 320;
const NEXT_LEVEL_EXP = 500;
const CARD_PULSE_DURATION_MS = "900ms";
const CARD_TRANSITION_DURATION_MS = "220ms";
const CARD_SELECTED_SCALE = "1.02";
const cardPulseAnimation = keyframes({
  "0%": { transform: "scale(1)" },
  "50%": { transform: `scale(${CARD_SELECTED_SCALE})` },
  "100%": { transform: "scale(1)" },
});

type QuestCategory = "easy" | "normal" | "hard";

interface Card {
  name: string;
  category: QuestCategory;
  exp: number;
}
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

export default function QuestPage() {
  const [selectedQuestCategory, setSelectedQuestCategory] =
    useState<QuestCategory | null>(null);
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
      <Tabs.Root defaultValue="all">
        <Tabs.List>
          <Tabs.Trigger value="all" color={colorVariable.green}>
            일일
          </Tabs.Trigger>
          <Tabs.Trigger value="daily" color={colorVariable.blue}>
            목표
          </Tabs.Trigger>
          <Tabs.Trigger value="weekly" color={colorVariable.gold}>
            주간
          </Tabs.Trigger>
          <Tabs.Trigger value="monthly" color={colorVariable.red}>
            월간
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="all">모두 퀘스트 목록</Tabs.Content>
        <Tabs.Content value="daily">일일 퀘스트 목록</Tabs.Content>
        <Tabs.Content value="weekly">주간 퀘스트 목록</Tabs.Content>
        <Tabs.Content value="monthly">월간 퀘스트 목록</Tabs.Content>
      </Tabs.Root>
      <DrawerBottom>
        <div {...props(styles.content)}>
          <TextField.Root
            size="2"
            radius="medium"
            color="indigo"
            placeholder="퀘스트 이름을 입력해주세요"
          />
          <div {...props(styles.cardSelectContainer)}>
            {CARD_LIST.map((card) => (
              <div
                key={card.category}
                {...props(
                  styles.cardItem,
                  selectedQuestCategory === card.category &&
                    styles.cardItemSelected,
                  selectedQuestCategory === card.category &&
                    selectedCardStyles[card.category]
                )}
                onClick={() => setSelectedQuestCategory(card.category)}
              >
                <Text size="2" weight="bold">
                  {card.name}
                </Text>
                <Text size="1" weight="medium">
                  exp:{card.exp}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </DrawerBottom>
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
  cardItem: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "start",
    padding: sizeVariable.size8,
    borderRadius: sizeVariable.size8,
    borderWidth: sizeVariable.size2,
    borderStyle: "solid",
    borderColor: colorVariable.subBackground,
    cursor: "pointer",
    transition: `border-color ${CARD_TRANSITION_DURATION_MS} ease, box-shadow ${CARD_TRANSITION_DURATION_MS} ease, transform ${CARD_TRANSITION_DURATION_MS} ease`,
  },
  cardItemSelected: {
    animationName: cardPulseAnimation,
    animationDuration: CARD_PULSE_DURATION_MS,
    animationTimingFunction: "ease-in-out",
    animationIterationCount: "infinite",
  },
});

const selectedCardStyles = create({
  easy: {
    borderColor: colorVariable.green,
    boxShadow: `0 0 0 1px ${colorVariable.green}, 0 0 12px ${colorVariable.green}`,
  },
  normal: {
    borderColor: colorVariable.blue,
    boxShadow: `0 0 0 1px ${colorVariable.blue}, 0 0 12px ${colorVariable.blue}`,
  },
  hard: {
    borderColor: colorVariable.red,
    boxShadow: `0 0 0 1px ${colorVariable.red}, 0 0 12px ${colorVariable.red}`,
  },
});
