import { Tabs } from "radix-ui";

export default function TabsContent({
  value,
  children,
}: {
  value: string;
  children: React.ReactNode;
}) {
  return <Tabs.Content value={value}>{children}</Tabs.Content>;
}
