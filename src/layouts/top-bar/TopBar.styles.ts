import { motion } from "motion/react";
import styled from "styled-components";
import { theme } from "@styles/GlobalStyles";
import { contentField } from "@styles/layout-mixins";

/* ---------- bar shell ---------- */

export const Bar = styled.div`
  position: sticky;
  top: 0;
  z-index: 20;
  height: ${theme.spacing.s8};
  background: ${theme.color.surface};
  border-bottom: 1px solid ${theme.color.line};

  @media (max-width: ${theme.breakpoint.mobile}) {
    height: 48px;
  }
`;

export const BarInner = styled.div`
  ${contentField}
  height: 100%;
  display: flex;
  align-items: center;
  gap: ${theme.spacing.s5};

  @media (max-width: ${theme.breakpoint.mobile}) {
    gap: ${theme.spacing.s3};
  }
`;

/* ---------- identity cluster (desktop only) ---------- */

export const Wordmark = styled.span`
  font-family: ${theme.font.pixel};
  font-size: 14px;
  line-height: 1;
  letter-spacing: 0.01em;
  color: ${theme.color.ink};
  flex: none;

  @media (max-width: ${theme.breakpoint.mobile}) {
    font-size: 12px;
  }
`;

export const Role = styled.span`
  flex: none;
  white-space: nowrap;
  padding-left: ${theme.spacing.s5};
  border-left: 1px solid ${theme.color.line};
  font-family: ${theme.font.mono};
  font-size: 11px;
  font-weight: ${theme.fontWeight.monoMedium};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${theme.color.muted};

  @media (max-width: ${theme.breakpoint.mobile}) {
    display: none;
  }
`;

export const Avail = styled.span`
  flex: none;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: ${theme.spacing.s2};
  padding-left: ${theme.spacing.s5};
  border-left: 1px solid ${theme.color.line};
  font-family: ${theme.font.mono};
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${theme.color.ink};

  @media (max-width: ${theme.breakpoint.mobile}) {
    display: none;
  }
`;

/* ---------- desktop nav ---------- */

export const Nav = styled.nav`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: ${theme.spacing.s5};

  @media (max-width: ${theme.breakpoint.mobile}) {
    display: none;
  }
`;

export const NavLink = styled.a<{ $active: boolean }>`
  position: relative;
  font-family: ${theme.font.mono};
  font-size: 12px;
  font-weight: ${theme.fontWeight.monoMedium};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ $active }) => ($active ? theme.color.ink : theme.color.muted)};
  padding: 10px 0 6px;
  border-bottom: 2px solid transparent;

  &:hover {
    color: ${theme.color.ink};
    border-bottom-color: ${theme.color.line};
  }

  &:focus-visible {
    color: ${theme.color.ink};
    outline: 2px solid ${theme.color.signal};
    outline-offset: 3px;
  }
`;

export const ActiveUnderline = styled(motion.span)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: -2px;
  height: 2px;
  background: ${theme.color.signal};
`;

/* ---------- mobile trigger ---------- */

export const MobileTrigger = styled.button`
  display: none;
  margin-left: auto;
  align-items: center;
  gap: 7px;
  min-height: 44px;
  padding: 0;
  font-family: ${theme.font.mono};
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${theme.color.ink};

  @media (max-width: ${theme.breakpoint.mobile}) {
    display: flex;
  }
`;

export const Chevron = styled.span`
  color: ${theme.color.signal};
`;

/* ---------- mobile sheet ---------- */

export const SheetBackdrop = styled.div`
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(15, 21, 32, 0.6);
  z-index: 45;

  @media (max-width: ${theme.breakpoint.mobile}) {
    display: block;
  }

  /* The [hidden] attribute selector has higher specificity than the
     plain class selector above, so this wins over the media query
     regardless of cascade order and keeps the backdrop unrendered (and
     un-hit-testable) whenever isOpen is false, at any viewport. */
  &[hidden] {
    display: none;
  }
`;

export const Sheet = styled.div`
  position: fixed;
  top: 48px;
  left: 0;
  right: 0;
  z-index: 50;
  background: ${theme.color.surface};
  border-bottom: 1px solid ${theme.color.line};
  padding: ${theme.spacing.s4} ${theme.spacing.s5};
  max-height: calc(100vh - 48px);
  overflow-y: auto;
`;

export const SheetNavList = styled.ul`
  list-style: none;
`;

export const SheetNavItem = styled.li``;

export const SheetNavLink = styled.a<{ $active: boolean }>`
  display: block;
  padding: 12px 0;
  font-family: ${theme.font.mono};
  font-size: 13px;
  font-weight: ${theme.fontWeight.monoMedium};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ $active }) => ($active ? theme.color.ink : theme.color.muted)};
  border-bottom: 1px solid ${theme.color.line};

  &:last-of-type {
    border-bottom: 0;
  }
`;

export const SheetMeta = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.s3};
  padding: ${theme.spacing.s4} 0;
  border-top: 1px solid ${theme.color.line};
  font-family: ${theme.font.mono};
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const SheetRole = styled.span`
  color: ${theme.color.muted};
`;

export const SheetAvail = styled.span`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: ${theme.spacing.s2};
  color: ${theme.color.ink};
`;

export const SheetAction = styled.div`
  margin-top: ${theme.spacing.s5};
`;
