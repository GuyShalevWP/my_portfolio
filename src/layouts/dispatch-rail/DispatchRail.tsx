import { useEffect, useRef, useState } from "react";
import { theme } from "@styles/GlobalStyles";
import { sections } from "@data/sections";
import StatusDot from "../../components/status-dot/StatusDot";
import RailNavList from "./components/rail-nav-list/RailNavList";
import { useActiveSection } from "./hooks/useActiveSection";
import { useScrollProgress } from "./hooks/useScrollProgress";
import {
  BrandName,
  MobileBar,
  MobileBarCurrent,
  MobileBarName,
  Rail,
  RailFoot,
  RailIn,
  RailTop,
  Seam,
  Sheet,
  SheetBackdrop,
} from "./DispatchRail.styles";

const SHEET_ID = "rail-sheet";

/**
 * The signature element. Desktop: a 220px sticky housing that is real
 * jump-link nav, with a scroll-progress seam on its right edge. Below
 * ~1024px it collapses to a 48px sticky bar; tapping it opens a sheet
 * with the same six links.
 */
const DispatchRail = () => {
  const activeId = useActiveSection(sections);
  const progress = useScrollProgress();
  const [isOpen, setIsOpen] = useState(false);
  const barRef = useRef<HTMLButtonElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);

  const activeSection = sections.find((section) => section.id === activeId) ?? sections[0];

  useEffect(() => {
    if (!isOpen) return;

    sheetRef.current?.querySelector("a")?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        barRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const seamStyle = {
    background: `linear-gradient(to bottom, ${theme.color.signal} 0%, ${theme.color.signal} ${
      progress * 100
    }%, ${theme.color.line} ${progress * 100}%, ${theme.color.line} 100%)`,
  };

  return (
    <>
      <Rail aria-label="Section navigation">
        <RailIn>
          <RailTop>
            <StatusDot variant="signal" />
            <BrandName>GUY.SHALEV</BrandName>
          </RailTop>
          <RailNavList sections={sections} activeId={activeId} staggerBoot />
          <RailFoot>
            ORCHESTRATOR // 6 SECTIONS
            <br />
            THIS RAIL IS THE NAV.
            <br />
            IT IS ALSO THE POINT.
          </RailFoot>
        </RailIn>
        <Seam aria-hidden="true" style={seamStyle} />
      </Rail>

      <MobileBar
        ref={barRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls={SHEET_ID}
        onClick={() => setIsOpen((open) => !open)}
      >
        <MobileBarName>GUY.SHALEV</MobileBarName>
        <MobileBarCurrent>
          <span aria-hidden="true">●</span>
          {activeSection.navLabel}
        </MobileBarCurrent>
      </MobileBar>

      <SheetBackdrop hidden={!isOpen} onClick={() => setIsOpen(false)} aria-hidden="true" />
      <Sheet
        ref={sheetRef}
        id={SHEET_ID}
        role="dialog"
        aria-label="Section navigation"
        hidden={!isOpen}
      >
        <RailNavList
          sections={sections}
          activeId={activeId}
          onNavigate={() => setIsOpen(false)}
        />
      </Sheet>
    </>
  );
};

export default DispatchRail;
