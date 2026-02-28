"use client";

import { Drawer } from "vaul";
import { create, props } from "@stylexjs/stylex";
import { colorVariable, sizeVariable } from "../styles/styleVariable.stylex";
import { PlusIcon } from "@radix-ui/react-icons";

const DRAWER_MAX_HEIGHT = "82vh";
const DRAWER_RADIUS = "10px";
const OVERLAY_COLOR = "rgba(0, 0, 0, 0.4)";
const TRIGGER_SHADOW = "0 1px 2px rgba(0, 0, 0, 0.35)";
const TRIGGER_Z_INDEX = 1;
const OVERLAY_Z_INDEX = 2;
const CONTENT_Z_INDEX = 3;
const PORTAL_ROOT_ID = "portal-root";

export default function DrawerBottom({
  children,
}: {
  children: React.ReactNode;
}) {
  const portalContainer =
    typeof document === "undefined"
      ? undefined
      : (document.getElementById(PORTAL_ROOT_ID) ?? undefined);

  return (
    <Drawer.Root>
      <Drawer.Trigger {...props(styles.trigger)}>
        <PlusIcon width={20} height={20} />
      </Drawer.Trigger>
      <Drawer.Portal container={portalContainer}>
        <Drawer.Overlay {...props(styles.overlay)} />
        <Drawer.Content {...props(styles.content)}>
          <div {...props(styles.contentInner)}>
            <Drawer.Handle />
            <Drawer.Title {...props(styles.title)} />
            {children}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
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
    transition: "background-color 150ms ease, border-color 150ms ease",

    ":hover": {
      borderColor: colorVariable.orange,
      color: colorVariable.orange,
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
  },
  title: {
    visibility: "hidden",
  },
});
