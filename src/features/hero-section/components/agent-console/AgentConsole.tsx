import StatusDot from "../../../../components/status-dot/StatusDot";
import { useBootStagger } from "@hooks/useBootStagger";
import {
  ConsoleFooter,
  ConsoleHeader,
  ConsoleHeaderStatus,
  ConsolePanel,
  Crow,
  CrowDescription,
  CrowName,
  CrowStatus,
  RowsList,
} from "./AgentConsole.styles";
import type { AgentConsoleProps } from "./AgentConsole.types";

/** The hero's "agent-team, live" console panel — five rows describing
 * the team that shipped this site. Rows fill in as part of the page's
 * ~900ms boot sequence. */
const AgentConsole = ({ content }: AgentConsoleProps) => {
  const { containerProps, itemProps } = useBootStagger({
    stagger: 0.06,
    delayChildren: 0.3,
    itemY: 8,
    itemDuration: 0.2,
  });

  return (
    <ConsolePanel aria-label="Agent team status">
      <ConsoleHeader>
        <StatusDot variant="live" />
        {content.label}
        <ConsoleHeaderStatus>{content.status}</ConsoleHeaderStatus>
      </ConsoleHeader>
      <RowsList {...containerProps}>
        {content.rows.map((row) => {
          const on = row.status !== "queued";
          return (
            <Crow key={row.name} $hideOnMobile={row.hideOnMobile} {...itemProps}>
              <CrowName>{row.name}</CrowName>
              <CrowDescription>
                {row.description.split("\n").map((line, index, lines) => (
                  <span key={line}>
                    {line}
                    {index < lines.length - 1 && <br />}
                  </span>
                ))}
              </CrowDescription>
              <CrowStatus $on={on}>{row.status}</CrowStatus>
            </Crow>
          );
        })}
      </RowsList>
      <ConsoleFooter>{content.footer}</ConsoleFooter>
    </ConsolePanel>
  );
};

export default AgentConsole;
