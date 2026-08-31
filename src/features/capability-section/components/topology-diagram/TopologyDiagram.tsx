import { Fan, Node, Stem, Topo } from "./TopologyDiagram.styles";
import type { TopologyDiagramProps } from "./TopologyDiagram.types";

/** lead → fan of four specialists → merged pull request. Purely
 * illustrative, so it's marked decorative for assistive tech; the
 * surrounding prose already says the same thing in words. */
const TopologyDiagram = ({ topology }: TopologyDiagramProps) => {
  return (
    <Topo aria-hidden="true">
      <Node $variant={topology.lead.variant}>{topology.lead.label}</Node>
      <Stem />
      <Fan>
        {topology.fan.map((node) => (
          <Node key={node.label} $variant={node.variant}>
            {node.label}
          </Node>
        ))}
      </Fan>
      <Stem />
      <Node $variant={topology.result.variant}>{topology.result.label}</Node>
    </Topo>
  );
};

export default TopologyDiagram;
