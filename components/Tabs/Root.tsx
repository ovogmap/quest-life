import { Tabs } from "radix-ui";

export default function TabsRoot({
  children,
  defaultValue,
}: {
  children: React.ReactNode;
  defaultValue: string;
}) {
  return <Tabs.Root defaultValue={defaultValue}>{children}</Tabs.Root>;
}
