import { sizeVariable } from "@/styles/styleVariable.stylex";
import { Button } from "@radix-ui/themes";
import { create, props } from "@stylexjs/stylex";
import { useFormContext } from "react-hook-form";
import { HiOutlinePencilAlt } from "react-icons/hi";

export default function SubmitButton({ onSubmit }: { onSubmit: () => void }) {
  const {
    formState: { isValid },
  } = useFormContext();
  return (
    <Button size="3" color="blue" onClick={onSubmit} disabled={!isValid}>
      <div {...props(styles.buttonContent)}>
        <HiOutlinePencilAlt />
        퀘스트 생성
      </div>
    </Button>
  );
}

const styles = create({
  buttonContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: sizeVariable.size4,
  },
});
