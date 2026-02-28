import * as Progress from "@radix-ui/react-progress";
import { create, props } from "@stylexjs/stylex";
import { colorVariable, sizeVariable } from "../styles/styleVariable.stylex";

const MIN_PROGRESS_MAX = 1;

export default function ProgressBar({
  value,
  max,
  color = colorVariable.subBackground,
}: {
  value: number;
  max: number;
  color?: string;
}) {
  const safeMax = Math.max(max, MIN_PROGRESS_MAX);
  const clampedValue = Math.min(Math.max(value, 0), safeMax);
  const percent = (clampedValue / safeMax) * 100;

  return (
    <div {...props(styles.container)}>
      <div {...props(styles.label)}>
        {clampedValue} / {safeMax}
      </div>
      <Progress.Root
        {...props(styles.track)}
        value={clampedValue}
        max={safeMax}
        aria-label="경험치 진행도"
        style={{ "--progress-color": color } as React.CSSProperties}
      >
        <Progress.Indicator
          {...props(styles.indicator)}
          style={
            {
              "--progress-color": color,
              transform: `translateX(-${100 - percent}%)`,
            } as React.CSSProperties
          }
        />
      </Progress.Root>
    </div>
  );
}

const styles = create({
  container: {
    width: "300px",
    display: "flex",
    flexDirection: "column",
    gap: sizeVariable.size8,
    alignItems: "center",
  },
  track: {
    width: "100%",
    height: sizeVariable.size4,
    borderRadius: sizeVariable.size4,
    overflow: "hidden",
    backgroundColor: colorVariable.subBackground,
    boxShadow: `0 0 8px var(--progress-color), 0 0 16px var(--progress-color)`,
  },
  indicator: {
    width: "100%",
    height: "100%",
    backgroundColor: "var(--progress-color)",
    transition: "transform 250ms ease-out",
  },
  label: {
    fontSize: sizeVariable.size12,
    color: colorVariable.fontMuted,
  },
});
