import { Text } from "@radix-ui/themes";
import { Card } from "../../types";
import { colorVariable, sizeVariable } from "@/styles/styleVariable.stylex";
import { create, keyframes, props } from "@stylexjs/stylex";
import { CircleIcon, RadiobuttonIcon } from "@radix-ui/react-icons";
import { useFormContext } from "react-hook-form";

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
}: {
  card: Card;
  index: number;
}) {
  const { setValue, watch } = useFormContext();
  const difficulty = watch("difficulty");
  const isSelected = difficulty === card.difficulty;
  const cardColor =
    card.difficulty === "easy"
      ? colorVariable.green
      : card.difficulty === "normal"
      ? colorVariable.blue
      : colorVariable.red;

  const handleSelectCard = () => {
    setValue("difficulty", card.difficulty);
    setValue("exp", card.exp);
  };
  return (
    <div
      key={card.difficulty}
      {...props(
        styles.cardItem,
        isSelected && styles.cardItemSelected,
        isSelected && selectedCardStyles[card.difficulty]
      )}
      onClick={handleSelectCard}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "start",
          justifyContent: "space-between",
        }}
      >
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
        {isSelected ? <RadiobuttonIcon color={cardColor} /> : <CircleIcon />}
      </div>
      <Text size="2" weight="bold">
        {card.value}
      </Text>
      <Text size="1" color="gray">
        exp:{card.exp}
      </Text>
    </div>
  );
}

const styles = create({
  cardItem: {
    gap: sizeVariable.size4,
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
