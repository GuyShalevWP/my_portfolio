import LoadoutTile from "../loadout-tile/LoadoutTile";
import { SlotLabel, SlotRow, TilesRow } from "./LoadoutSlot.styles";
import type { LoadoutSlotProps } from "./LoadoutSlot.types";

/** One equipped slot inside a loadout group — a label plus a wrapped
 * row of item tiles. */
const LoadoutSlot = ({ slot }: LoadoutSlotProps) => {
  return (
    <SlotRow>
      <SlotLabel variant="signal">{slot.label}</SlotLabel>
      <TilesRow>
        {slot.tiles.map((tile) => (
          <LoadoutTile key={tile.name} tile={tile} />
        ))}
      </TilesRow>
    </SlotRow>
  );
};

export default LoadoutSlot;
