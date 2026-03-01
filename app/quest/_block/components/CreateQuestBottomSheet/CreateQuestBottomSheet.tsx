"use client";

import { HiOutlinePencilAlt } from "react-icons/hi";
import { create, props } from "@stylexjs/stylex";
import { sizeVariable } from "@/styles/styleVariable.stylex";
import DrawerBottom from "@/app/quest/_block/components/CreateQuestBottomSheet/Drawer";
import { Button, Flex, IconButton, Text, TextField } from "@radix-ui/themes";
import { Card, CreateQuestForm } from "../../types";
import QuestCategoryCard from "./QuestCategoryCard";
import { PlusIcon, TrashIcon } from "@radix-ui/react-icons";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";

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
  const methods = useForm<CreateQuestForm>();
  const { register, control, handleSubmit } = methods;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "sideQuests",
  });

  const onSubmit = (data: CreateQuestForm) => {
    // TODO: 퀘스트 생성 로직 구현
    console.log(data);
  };
  return (
    <FormProvider {...methods}>
      <DrawerBottom>
        <div {...props(styles.content)}>
          <Flex direction="column" gap={sizeVariable.size4}>
            <Text size="6" weight="bold" color="blue">
              Main Quest
            </Text>
            <Text size="1" color="gray">
              당신을 성장시킬 퀘스트를 만들어 보세요
            </Text>
          </Flex>
          <TextField.Root
            size="2"
            radius="medium"
            color="blue"
            placeholder="메인 퀘스트를 입력해주세요"
            {...register("title", { required: true })}
          />
          <Flex direction="column" gap={sizeVariable.size4}>
            <Text size="1" color="gray">
              퀘스트의 난이도를 선택해주세요
            </Text>
            <div {...props(styles.cardSelectContainer)}>
              {CARD_LIST.map((card, i) => (
                <QuestCategoryCard
                  key={card.difficulty}
                  card={card}
                  index={i}
                />
              ))}
            </div>
          </Flex>
          <Flex direction="column" gap={sizeVariable.size4}>
            <Flex width="full" align="center" justify="between">
              <Text size="1" color="gray">
                목표를 달성하기 위한 사이드 퀘스트를 만들어 보세요
              </Text>
              <IconButton
                variant="soft"
                size="1"
                color="gray"
                onClick={() => append({ title: "" })}
              >
                <PlusIcon />
              </IconButton>
            </Flex>
            <Flex direction="column" width="full" gap={sizeVariable.size8}>
              {fields.map((field, index) => (
                <Flex
                  key={field.id}
                  width="full"
                  align="center"
                  gap={sizeVariable.size12}
                >
                  <TextField.Root
                    size="2"
                    radius="medium"
                    color="blue"
                    placeholder="사이드 퀘스트를 입력해주세요"
                    {...register(`sideQuests.${index}.title`, {
                      required: true,
                    })}
                    style={{ flex: 1 }}
                  />
                  <IconButton
                    variant="soft"
                    size="1"
                    color="gray"
                    onClick={() => remove(index)}
                  >
                    <TrashIcon />
                  </IconButton>
                </Flex>
              ))}
            </Flex>
          </Flex>
          <Button size="3" color="blue" onClick={handleSubmit(onSubmit)}>
            <div {...props(styles.buttonContent)}>
              <HiOutlinePencilAlt />
              퀘스트 생성
            </div>
          </Button>
        </div>
      </DrawerBottom>
    </FormProvider>
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
