import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import ButtonLink from "@components/button-link/ButtonLink";
import StatusDot from "@components/status-dot/StatusDot";
import { contact } from "@data/contact-links";
import { sections } from "@data/sections";
import { DURATION_BASE, EASE_OUT } from "@utils/motion-easing-utils";
import { useActiveSection } from "./hooks/useActiveSection";
import {
  ActiveUnderline,
  Avail,
  Bar,
  BarInner,
  Chevron,
  MobileTrigger,
  Nav,
  NavLink,
  Role,
  Sheet,
  SheetAction,
  SheetAvail,
  SheetBackdrop,
  SheetMeta,
  SheetNavItem,
  SheetNavLink,
  SheetNavList,
  SheetRole,
  Wordmark,
} from "./TopBar.styles";

const ROLE = "Full-Stack Developer";
const AVAILABILITY = "Open to work";
const SHEET_ID = "top-bar-sheet";

/**
 * The sticky top bar — one component, two viewports. Desktop: identity
 * cluster (pixel wordmark, role, availability, split by hairlines) at
 * the left, the six jump links at the right, active link tracked by
 * scroll-spy with an amber underline that slides between links (via
 * `layoutId`, off under reduced motion). Below the breakpoint it drops
 * to a 48px bar with a current-section trigger that opens a sheet
 * carrying the same six links plus role, availability, and one
 * "Email Guy" action.
 */
const TopBar = () => {
  const activeId = useActiveSection(sections);
  const reducedMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);

  const activeSection = sections.find((section) => section.id === activeId) ?? sections[0];

  useEffect(() => {
    if (!isOpen) return;

    sheetRef.current?.querySelector("a")?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <>
      <Bar>
        <BarInner>
          <Wordmark>GUY.SHALEV</Wordmark>
          <Role>{ROLE}</Role>
          <Avail>
            <StatusDot variant="signal" pulse />
            {AVAILABILITY}
          </Avail>

          <Nav aria-label="Sections">
            {sections.map((section) => {
              const active = section.id === activeId;
              return (
                <NavLink
                  key={section.id}
                  href={`#${section.id}`}
                  $active={active}
                  aria-current={active ? "true" : undefined}
                >
                  {section.navLabel}
                  {active && (
                    <ActiveUnderline
                      layoutId={reducedMotion ? undefined : "top-bar-active-underline"}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: reducedMotion ? 0 : DURATION_BASE, ease: EASE_OUT }}
                      style={{ transformOrigin: "left" }}
                    />
                  )}
                </NavLink>
              );
            })}
          </Nav>

          <MobileTrigger
            ref={triggerRef}
            type="button"
            aria-expanded={isOpen}
            aria-controls={SHEET_ID}
            onClick={() => setIsOpen((open) => !open)}
          >
            <Chevron aria-hidden="true">▸</Chevron>
            {activeSection.navLabel}
          </MobileTrigger>
        </BarInner>
      </Bar>

      <SheetBackdrop hidden={!isOpen} onClick={() => setIsOpen(false)} aria-hidden="true" />
      <Sheet
        ref={sheetRef}
        id={SHEET_ID}
        role="dialog"
        aria-label="Section navigation"
        hidden={!isOpen}
      >
        <SheetNavList>
          {sections.map((section) => {
            const active = section.id === activeId;
            return (
              <SheetNavItem key={section.id}>
                <SheetNavLink
                  href={`#${section.id}`}
                  $active={active}
                  aria-current={active ? "true" : undefined}
                  onClick={() => setIsOpen(false)}
                >
                  {section.navLabel}
                </SheetNavLink>
              </SheetNavItem>
            );
          })}
        </SheetNavList>
        <SheetMeta>
          <SheetRole>{ROLE}</SheetRole>
          <SheetAvail>
            <StatusDot variant="signal" pulse />
            {AVAILABILITY}
          </SheetAvail>
        </SheetMeta>
        <SheetAction>
          <ButtonLink href={contact.cta.href}>{contact.cta.label}</ButtonLink>
        </SheetAction>
      </Sheet>
    </>
  );
};

export default TopBar;
