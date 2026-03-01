import { Flex, Text, TextField } from "@radix-ui/themes";
import { Card } from "../../types";
import { useFormContext } from "react-hook-form";
import { sizeVariable } from "@/styles/styleVariable.stylex";
import { create, props } from "@stylexjs/stylex";
import QuestCategoryCard from "./QuestCategoryCard";

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

export default function MainQuestEdit() {
  const { register } = useFormContext();
  return (
    <>
      <TextField.Root
        size="2"
        radius="medium"
        color="blue"
        placeholder="메인 퀘스트를 입력해주세요"
        {...register("title")}
        autoFocus
      />
      <Flex direction="column" gap={sizeVariable.size4}>
        <Text size="1" color="gray">
          퀘스트의 난이도를 선택해주세요
        </Text>
        <div {...props(styles.cardSelectContainer)}>
          {CARD_LIST.map((card, i) => (
            <QuestCategoryCard key={card.difficulty} card={card} index={i} />
          ))}
        </div>
      </Flex>
    </>
  );
}

const styles = create({
  content: {
    display: "flex",
    flexDirection: "column",
    gap: sizeVariable.size16,
  },
  cardSelectContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: sizeVariable.size8,
  },
  buttonContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: sizeVariable.size4,
  },
});
