import { sizeVariable } from "@/styles/styleVariable.stylex";
import { Flex, Text } from "@radix-ui/themes";

export default function Header() {
  return (
    <Flex direction="column" gap={sizeVariable.size4}>
      <Text size="6" weight="bold" color="blue">
        Main Quest
      </Text>
      <Text size="1" color="gray">
        당신을 성장시킬 퀘스트를 만들어 보세요
      </Text>
    </Flex>
  );
}
