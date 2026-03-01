import { sizeVariable } from "@/styles/styleVariable.stylex";
import { PlusIcon, TrashIcon } from "@radix-ui/react-icons";
import { Flex, IconButton, Text, TextField } from "@radix-ui/themes";
import { useFieldArray, useFormContext } from "react-hook-form";

export default function SideQuestList() {
  const { control, register } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "sideQuests",
  });
  return (
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
  );
}
