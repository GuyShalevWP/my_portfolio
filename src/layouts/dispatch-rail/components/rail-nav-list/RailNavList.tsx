import { useReducedMotion, type Variants } from "motion/react";
import StatusDot from "../../../../components/status-dot/StatusDot";
import { Item, ItemLink, List, StatusWord } from "./RailNavList.styles";
import type { RailNavListProps } from "./RailNavList.types";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: -4 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.12 } },
};

/**
 * The six jump links, shared between the desktop rail and the mobile
 * sheet. `st` status words are decorative (`rendering` / `queued`) and
 * hidden from assistive tech; the link text itself carries the meaning.
 */
const RailNavList = ({
  sections,
  activeId,
  onNavigate,
  staggerBoot = false,
}: RailNavListProps) => {
  const reducedMotion = useReducedMotion();
  const animateBoot = staggerBoot && !reducedMotion;

  return (
    <List
      variants={animateBoot ? containerVariants : undefined}
      initial={animateBoot ? "hidden" : undefined}
      animate={animateBoot ? "visible" : undefined}
    >
      {sections.map((section) => {
        const active = section.id === activeId;
        return (
          <Item key={section.id} variants={animateBoot ? itemVariants : undefined}>
            <ItemLink href={`#${section.id}`} $active={active} onClick={onNavigate}>
              <StatusDot variant={active ? "live" : "queued"} pulse={active} />
              {section.navLabel}
              <StatusWord $active={active} aria-hidden="true">
                {active ? "rendering" : "queued"}
              </StatusWord>
            </ItemLink>
          </Item>
        );
      })}
    </List>
  );
};

export default RailNavList;
