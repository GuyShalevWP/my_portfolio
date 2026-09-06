import { Fragment } from "react";
import LoadoutSlot from "../loadout-slot/LoadoutSlot";
import { GroupMeta, GroupName, GroupNote, GroupRow, SlotsCol } from "./LoadoutGroup.styles";
import type { LoadoutGroupProps } from "./LoadoutGroup.types";

/** One of the loadout band's three clusters — a name and an optional
 * two-line note (hidden on mobile), then its equipped slots. */
const LoadoutGroup = ({ group }: LoadoutGroupProps) => {
  return (
    <GroupRow>
      <GroupMeta>
        <GroupName>{group.name}</GroupName>
        {group.note && (
          <GroupNote>
            {group.note.split("\n").map((line, index, lines) => (
              <Fragment key={line}>
                {line}
                {index < lines.length - 1 && <br />}
              </Fragment>
            ))}
          </GroupNote>
        )}
      </GroupMeta>
      <SlotsCol>
        {group.slots.map((slot) => (
          <LoadoutSlot key={slot.label} slot={slot} />
        ))}
      </SlotsCol>
    </GroupRow>
  );
};

export default LoadoutGroup;
