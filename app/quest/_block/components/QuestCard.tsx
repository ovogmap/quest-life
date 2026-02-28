import { create, props } from "@stylexjs/stylex";
import { Quest } from "../types";
import { colorVariable, sizeVariable } from "@/styles/styleVariable.stylex";
import { Badge, Text } from "@radix-ui/themes";
import { CircleIcon } from "@radix-ui/react-icons";

export default function QuestCard({ quest }: { quest: Quest }) {
  const difficultyColor =
    quest.difficulty === "easy"
      ? "green"
      : quest.difficulty === "normal"
      ? "blue"
      : "red";

  const difficultyIcon =
    quest.difficulty === "easy"
      ? "🔥"
      : quest.difficulty === "normal"
      ? "🔥🔥"
      : "🔥🔥🔥";
  return (
    <div {...props(styles.container)}>
      <button {...props(styles.checkButton)}>
        <CircleIcon />
      </button>
      <div {...props(styles.content)}>
        <Text size="2" weight="bold">
          {quest.content}
        </Text>
        <Badge color={difficultyColor} size="1" radius="large">
          {difficultyIcon} {quest.difficulty} / exp: +{quest.exp}
        </Badge>
      </div>
    </div>
  );
}

const styles = create({
  container: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: sizeVariable.size4,
    width: sizeVariable.fullWidth,
    borderRadius: sizeVariable.size12,
    borderWidth: sizeVariable.size1,
    borderStyle: "solid",
    borderColor: colorVariable.subBackground,
    padding: sizeVariable.size12,
    boxSizing: "border-box",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: sizeVariable.size4,
  },
  checkButton: {
    backgroundColor: "transparent",
    borderStyle: "none",
    cursor: "pointer",
    padding: sizeVariable.size0,
    width: sizeVariable.size24,
    height: sizeVariable.size24,
  },
});
