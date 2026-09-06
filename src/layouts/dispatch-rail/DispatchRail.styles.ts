import styled from "styled-components";
import { theme } from "@styles/GlobalStyles";

/* ---------- desktop rail ---------- */

export const Rail = styled.nav`
  width: 220px;
  flex: none;
  align-self: stretch;
  position: relative;
  background: ${theme.color.surface};

  @media (max-width: ${theme.breakpoint.mobile}) {
    display: none;
  }
`;

export const Seam = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  width: 1px;
  height: 100%;
`;

export const RailIn = styled.div`
  position: sticky;
  top: 0;
  min-height: 900px;
  display: flex;
  flex-direction: column;
  padding: ${theme.spacing.s6} 0 ${theme.spacing.s6} ${theme.spacing.s6};
`;

export const RailTop = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.s2};
  margin-bottom: ${theme.spacing.s7};
`;

export const BrandName = styled.span`
  font-family: ${theme.font.mono};
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.14em;
  color: ${theme.color.ink};
  font-weight: ${theme.fontWeight.monoBold};
`;

export const RailFoot = styled.p`
  margin-top: auto;
  padding-top: ${theme.spacing.s7};
  padding-right: ${theme.spacing.s5};
  font-family: ${theme.font.mono};
  font-size: 10px;
  line-height: 1.7;
  letter-spacing: 0.08em;
  color: ${theme.color.faint};
`;

/* ---------- mobile bar + sheet ---------- */

export const MobileBar = styled.button`
  display: none;
  width: 100%;
  align-items: center;
  gap: ${theme.spacing.s2};
  padding: ${theme.spacing.s4} ${theme.spacing.s5};
  border-bottom: 1px solid ${theme.color.line};
  background: ${theme.color.surface};
  position: sticky;
  top: 0;
  z-index: 40;
  text-align: left;

  @media (max-width: ${theme.breakpoint.mobile}) {
    display: flex;
  }
`;

export const MobileBarName = styled.span`
  font-family: ${theme.font.mono};
  font-size: 11px;
  letter-spacing: 0.14em;
  font-weight: ${theme.fontWeight.monoBold};
  color: ${theme.color.ink};
`;

export const MobileBarCurrent = styled.span`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: ${theme.spacing.s2};
  font-family: ${theme.font.mono};
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${theme.color.live};
`;

export const SheetBackdrop = styled.div`
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(15, 21, 32, 0.6);
  z-index: 45;

  @media (max-width: ${theme.breakpoint.mobile}) {
    display: block;
  }

  /* The [hidden] attribute selector has higher specificity than the plain
     class selector above, so this wins over the media query regardless of
     cascade order and keeps the backdrop unrendered (and un-hit-testable)
     whenever isOpen is false, at any viewport. */
  &[hidden] {
    display: none;
  }
`;

export const Sheet = styled.div`
  position: fixed;
  top: 49px;
  left: 0;
  right: 0;
  z-index: 50;
  background: ${theme.color.surface};
  border-bottom: 1px solid ${theme.color.line};
  padding: ${theme.spacing.s4} ${theme.spacing.s5};
  max-height: calc(100vh - 49px);
  overflow-y: auto;
`;
