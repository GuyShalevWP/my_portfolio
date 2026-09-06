import { useEffect, useState } from "react";
import type { SectionMeta } from "../../../types/Section";

/**
 * Which section is currently in view — drives the top bar's active link
 * (amber underline, `aria-current`) and the mobile bar's current-section
 * trigger label.
 */
export const useActiveSection = (sections: SectionMeta[]): string => {
  const [active, setActive] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        const top = visible[0];
        if (top) {
          setActive(top.target.id);
        }
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [sections]);

  return active;
};
