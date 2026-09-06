import { Qualifier, TileEl } from "./LoadoutTile.styles";
import type { LoadoutTileProps } from "./LoadoutTile.types";

/** One equipped item. Wraps, never truncates, never scrolls sideways —
 * a long qualifier grows the tile and pushes the row down. The
 * qualifier sits at 11px muted so the item name stays the thing you
 * read first. */
const LoadoutTile = ({ tile }: LoadoutTileProps) => {
  return (
    <TileEl>
      {tile.name}
      {tile.qualifier && <Qualifier> {tile.qualifier}</Qualifier>}
    </TileEl>
  );
};

export default LoadoutTile;
