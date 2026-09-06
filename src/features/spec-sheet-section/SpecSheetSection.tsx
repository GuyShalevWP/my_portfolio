import { specSheet } from "@data/spec-sheet";
import { useRevealVariants } from "@hooks/useRevealVariants";
import MonoLabel from "../../components/mono-label/MonoLabel";
import { H2 } from "../../components/section-heading/SectionHeading.styles";
import LoadoutGroup from "./components/loadout-group/LoadoutGroup";
import { LoadoutHeader, LoadoutSection } from "./SpecSheetSection.styles";

/**
 * What it's made of — the signature element. A full-bleed inventory
 * band, three grouped clusters of equipped slots holding item tiles.
 * The page's one remaining section eyebrow lives here ("LOADOUT"),
 * because it renames the section's grammar; every other section
 * heading stands alone.
 */
const SpecSheetSection = () => {
  const reveal = useRevealVariants();

  return (
    <LoadoutSection
      id="spec"
      aria-labelledby="spec-heading"
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <LoadoutHeader>
        <H2 id="spec-heading">{specSheet.heading}</H2>
        <MonoLabel variant="signal">{specSheet.kicker}</MonoLabel>
      </LoadoutHeader>
      {specSheet.groups.map((group) => (
        <LoadoutGroup key={group.name} group={group} />
      ))}
    </LoadoutSection>
  );
};

export default SpecSheetSection;
