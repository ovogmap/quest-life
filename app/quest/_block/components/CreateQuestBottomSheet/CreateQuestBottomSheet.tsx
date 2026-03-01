"use client";

import { Drawer } from "vaul";
import { create, props } from "@stylexjs/stylex";
import { colorVariable, sizeVariable } from "@/styles/styleVariable.stylex";
import { PlusIcon } from "@radix-ui/react-icons";
import { ScrollArea } from "@radix-ui/themes";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { CreateQuestFormSchema, CreateQuestFormType } from "../../types";
import Header from "./Header";
import MainQuestEdit from "./MainQuestEdit";
import SideQuestList from "./SideQuestList";
import SubmitButton from "./SubmitButton";
import { zodResolver } from "@hookform/resolvers/zod";

const DRAWER_MAX_HEIGHT = "82vh";
const DRAWER_RADIUS = "10px";
const OVERLAY_COLOR = "rgba(0, 0, 0, 0.4)";
const TRIGGER_SHADOW = "0 1px 2px rgba(0, 0, 0, 0.35)";
const TRIGGER_Z_INDEX = 1;
const OVERLAY_Z_INDEX = 2;
const CONTENT_Z_INDEX = 3;
const PORTAL_ROOT_ID = "portal-root";

export default function CreateQuestBottomSheet() {
  const [open, setOpen] = useState(false);
  const methods = useForm({
    resolver: zodResolver(CreateQuestFormSchema),
    mode: "onChange",
  });
  const { handleSubmit, reset } = methods;
  const portalContainer =
    typeof document === "undefined"
      ? undefined
      : document.getElementById(PORTAL_ROOT_ID) ?? undefined;

  const onSubmit = (data: CreateQuestFormType) => {
    // TODO: 퀘스트 생성 로직 구현
    console.log(data);
    setOpen(false);
    reset();
  };

  return (
    <Drawer.Root open={open} onOpenChange={setOpen}>
      <FormProvider {...methods}>
        <Drawer.Trigger {...props(styles.trigger)}>
          <PlusIcon width={20} height={20} />
        </Drawer.Trigger>
        <Drawer.Portal container={portalContainer}>
          <Drawer.Overlay {...props(styles.overlay)} />
          <Drawer.Content {...props(styles.content)}>
            <ScrollArea type="auto">
              <div {...props(styles.contentInner)}>
                <Drawer.Handle />
                <Drawer.Title {...props(styles.title)} />
                <div {...props(styles.bodyContent)}>
                  <Header />
                  <MainQuestEdit />
                  <SideQuestList />
                  <SubmitButton onSubmit={handleSubmit(onSubmit)} />
                </div>
              </div>
            </ScrollArea>
          </Drawer.Content>
        </Drawer.Portal>
      </FormProvider>
    </Drawer.Root>
  );
}

const styles = create({
  trigger: {
    position: "fixed",
    bottom: sizeVariable.size0,
    left: "50%",
    transform: "translateX(-50%) translateY(-30px)",
    zIndex: TRIGGER_Z_INDEX,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    gap: sizeVariable.size8,
    overflow: "hidden",
    borderRadius: "50%",
    width: sizeVariable.size50,
    height: sizeVariable.size50,
    color: colorVariable.white,
    backgroundColor: colorVariable.subBackground,
    boxShadow: TRIGGER_SHADOW,
    borderWidth: sizeVariable.size1,
    borderStyle: "solid",
    borderColor: colorVariable.transparent,
    cursor: "pointer",
    transition: "all 150ms ease",

    ":hover": {
      width: sizeVariable.size60,
      height: sizeVariable.size60,
    },
  },
  overlay: {
    position: "fixed",
    inset: 0,
    backgroundColor: OVERLAY_COLOR,
    zIndex: OVERLAY_Z_INDEX,
  },
  content: {
    zIndex: CONTENT_Z_INDEX,
    position: "fixed",
    left: sizeVariable.size0,
    right: sizeVariable.size0,
    bottom: sizeVariable.size0,
    display: "flex",
    flexDirection: "column",
    maxHeight: DRAWER_MAX_HEIGHT,
    backgroundColor: colorVariable.mainBackground,
    borderTopLeftRadius: DRAWER_RADIUS,
    borderTopRightRadius: DRAWER_RADIUS,
    borderTopWidth: sizeVariable.size1,
    borderTopStyle: "solid",
    borderTopColor: colorVariable.subBackground,
  },
  contentInner: {
    padding: sizeVariable.size16,
    borderTopLeftRadius: DRAWER_RADIUS,
    borderTopRightRadius: DRAWER_RADIUS,
    display: "flex",
    flexDirection: "column",
    gap: sizeVariable.size8,
  },
  title: {
    margin: sizeVariable.size0,
    visibility: "hidden",
  },
  bodyContent: {
    display: "flex",
    flexDirection: "column",
    gap: sizeVariable.size16,
  },
});
