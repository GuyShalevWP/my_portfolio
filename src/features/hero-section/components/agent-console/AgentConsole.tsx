import { useReducedMotion, type Variants } from "motion/react";
import StatusDot from "../../../../components/status-dot/StatusDot";
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

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.3 } },
};

const rowVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

/** The hero's "agent-team, live" console panel — five rows describing
 * the team that shipped this site. Rows fill in as part of the page's
 * ~900ms boot sequence. */
const AgentConsole = ({ content }: AgentConsoleProps) => {
  const reducedMotion = useReducedMotion();
  const animateBoot = !reducedMotion;

  return (
    <ConsolePanel aria-label="Agent team status">
      <ConsoleHeader>
        <StatusDot variant="live" />
        {content.label}
        <ConsoleHeaderStatus>{content.status}</ConsoleHeaderStatus>
      </ConsoleHeader>
      <RowsList
        variants={animateBoot ? containerVariants : undefined}
        initial={animateBoot ? "hidden" : undefined}
        animate={animateBoot ? "visible" : undefined}
      >
        {content.rows.map((row) => {
          const on = row.status !== "queued";
          return (
            <Crow
              key={row.name}
              $hideOnMobile={row.hideOnMobile}
              variants={animateBoot ? rowVariants : undefined}
            >
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
