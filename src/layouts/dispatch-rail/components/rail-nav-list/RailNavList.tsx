import StatusDot from "../../../../components/status-dot/StatusDot";
import { useBootStagger } from "@hooks/useBootStagger";
import { Item, ItemLink, List, StatusWord } from "./RailNavList.styles";
import type { RailNavListProps } from "./RailNavList.types";

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
  const { containerProps, itemProps } = useBootStagger({
    stagger: 0.06,
    itemY: -4,
    itemDuration: 0.12,
    enabled: staggerBoot,
  });

  return (
    <List {...containerProps}>
      {sections.map((section) => {
        const active = section.id === activeId;
        return (
          <Item key={section.id} {...itemProps}>
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
