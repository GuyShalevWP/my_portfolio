import { Fragment } from "react";
import { Key, KeyAction, KeyLabel, Keys } from "./KeysLegend.styles";
import type { KeysLegendProps } from "./KeysLegend.types";

/** The keycap-styled control hint pinned to the bottom of each demo
 * panel via `margin-top: auto`. Silkscreen at its 11px ceiling — the
 * pixel face's second and last role on the page (the top bar wordmark
 * is its other one). */
const KeysLegend = ({ items }: KeysLegendProps) => {
  return (
    <Keys>
      <KeyLabel>Keyboard</KeyLabel>
      {items.map((item) => (
        <Fragment key={item.key}>
          <Key>{item.key}</Key>
          <KeyAction>{item.action}</KeyAction>
        </Fragment>
      ))}
    </Keys>
  );
};

export default KeysLegend;
