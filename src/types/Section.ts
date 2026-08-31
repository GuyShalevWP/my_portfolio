/** One entry in the dispatch rail's nav / jump-link list. */
export interface SectionMeta {
  /** DOM id the section renders under; also the jump-link target (`#id`). */
  id: string;
  /** Rail nav text, e.g. "Capability". */
  navLabel: string;
}
