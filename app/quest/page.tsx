"use client";

import { create, props } from "@stylexjs/stylex";
import ProgressBar from "@/components/ProgressBar";
import * as Tabs from "@/components/Tabs";
import { colorVariable } from "@/styles/styleVariable.stylex";
import { Text } from "@radix-ui/themes";
import CreateQuestBottomSheet from "./_block/components/CreateQuestBottomSheet/CreateQuestBottomSheet";

const CURRENT_EXP = 320;
const NEXT_LEVEL_EXP = 500;

export default function QuestPage() {
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
      </Tabs.Root>
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
});
