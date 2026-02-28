import { Text } from "@radix-ui/themes";
import { Card, QuestCategory } from "../../types";
import { colorVariable, sizeVariable } from "@/styles/styleVariable.stylex";
import { create, keyframes, props } from "@stylexjs/stylex";

const CARD_PULSE_DURATION_MS = "900ms";
const CARD_TRANSITION_DURATION_MS = "220ms";
const CARD_SELECTED_SCALE = "1.02";
const cardPulseAnimation = keyframes({
  "0%": { transform: "scale(1)" },
  "50%": { transform: `scale(${CARD_SELECTED_SCALE})` },
  "100%": { transform: "scale(1)" },
});

export default function QuestCategoryCard({
  card,
  index,
  selectedQuestCategory,
  setSelectedQuestCategory,
}: {
  card: Card;
  index: number;
  selectedQuestCategory: QuestCategory | null;
  setSelectedQuestCategory: (category: QuestCategory) => void;
}) {
  return (
    <div
      key={card.category}
      {...props(
        styles.cardItem,
        selectedQuestCategory === card.category && styles.cardItemSelected,
        selectedQuestCategory === card.category &&
          selectedCardStyles[card.category]
      )}
      onClick={() => setSelectedQuestCategory(card.category)}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "start",
          justifyContent: "space-between",
        }}
      >
        <Text size="2" weight="bold">
          {card.name}
        </Text>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: sizeVariable.size2,
          }}
        >
          {Array.from({ length: index + 1 }).map((_, j) => (
            <Text key={j} size="1">
              🔥
            </Text>
          ))}
        </div>
      </div>
      <Text size="1" weight="medium">
        exp:{card.exp}
      </Text>
    </div>
  );
}

const styles = create({
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
