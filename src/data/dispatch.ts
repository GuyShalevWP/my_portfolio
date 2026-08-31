import type { DispatchRule, DispatchTicket, Specialist, SpecialistId } from "../types/Dispatch";

/** The single ticket the Dispatch demo plays against. Add more here (and
 * a "next ticket" affordance in the component) to extend the demo —
 * nothing about the rule table below assumes there's only one. */
export const dispatchTicket: DispatchTicket = {
  id: "TICKET-041",
  body: "Users see a stale balance for a few seconds after a transfer.",
};

/** Fixed display order for the specialist chips — the ordinal number on
 * a picked chip (not its position in this list) is what carries the
 * visitor's chosen run order. */
export const dispatchSpecialists: Specialist[] = [
  { id: "backend", label: "backend" },
  { id: "frontend", label: "frontend" },
  { id: "qa", label: "qa" },
  { id: "security", label: "security" },
];

const has = (order: SpecialistId[], id: SpecialistId): boolean => order.includes(id);

const runsBefore = (order: SpecialistId[], first: SpecialistId, second: SpecialistId): boolean =>
  has(order, first) && has(order, second) && order.indexOf(first) < order.indexOf(second);

/**
 * The ordering rule table — pure data, evaluated top to bottom against
 * the visitor's ordered list of assigned specialists. The first rule
 * whose `matches` returns true decides the outcome. No engine, no
 * physics, no AI call: editing the ticket, the specialists, or these
 * rules never requires touching a component.
 */
export const dispatchRules: DispatchRule[] = [
  {
    id: "perfect-run",
    outcome: "win",
    ticketStatus: "MERGED",
    result: {
      title: "Shipped.",
      body: "Backend fixed the cache invalidation, frontend re-polled, QA passed, security came back clean. That's the order I'd have picked too.",
    },
    matches: (order) =>
      order.length === 4 &&
      order[0] === "backend" &&
      order[1] === "frontend" &&
      order[2] === "qa" &&
      order[3] === "security",
  },
  {
    id: "full-crew-reordered",
    outcome: "win",
    ticketStatus: "MERGED",
    result: {
      title: "Shipped.",
      body: "Backend fixed the cache invalidation and frontend re-polled — QA and security both signed off before it merged.",
    },
    matches: (order) =>
      order.length === 4 && runsBefore(order, "backend", "frontend") && has(order, "qa") && has(order, "security"),
  },
  {
    id: "missing-security",
    outcome: "draw",
    ticketStatus: "MERGED ⚠",
    result: {
      title: "Shipped with warnings.",
      body: "It works and QA passed. But nobody reviewed the new endpoint, and it's unauthenticated. Merged — with a follow-up ticket you now own.",
    },
    matches: (order) => runsBefore(order, "backend", "frontend") && has(order, "qa") && !has(order, "security"),
  },
  {
    id: "missing-qa",
    outcome: "draw",
    ticketStatus: "MERGED ⚠",
    result: {
      title: "Shipped with warnings.",
      body: "It works — backend fixed the cache, frontend re-polled. But nobody verified it before merge. Merged — with a follow-up ticket to add QA coverage.",
    },
    matches: (order) => runsBefore(order, "backend", "frontend") && !has(order, "qa"),
  },
  {
    id: "wrong-order-no-qa",
    outcome: "lose",
    ticketStatus: "BLOCKED",
    result: {
      title: "Blocked.",
      body: "You shipped without QA. Frontend patched the display before backend fixed the cache, so the balance is still stale — it just refreshes prettier. Reassign and run again.",
    },
    matches: (order) => runsBefore(order, "frontend", "backend") && !has(order, "qa"),
  },
  {
    id: "wrong-order-with-qa",
    outcome: "lose",
    ticketStatus: "BLOCKED",
    result: {
      title: "Blocked.",
      body: "QA caught it, but too late — frontend had already patched the display before backend fixed the cache, so the balance is still stale underneath. Reassign backend first and run again.",
    },
    matches: (order) => runsBefore(order, "frontend", "backend") && has(order, "qa"),
  },
  {
    id: "no-backend",
    outcome: "lose",
    ticketStatus: "BLOCKED",
    result: {
      title: "Blocked.",
      body: "Frontend patched the display, but nobody fixed the cache invalidation on the backend. The balance still goes stale under the hood. Reassign backend and run again.",
    },
    matches: (order) => has(order, "frontend") && !has(order, "backend"),
  },
  {
    id: "no-frontend",
    outcome: "lose",
    ticketStatus: "BLOCKED",
    result: {
      title: "Blocked.",
      body: "Backend fixed the cache invalidation, but nothing ever told the frontend to re-check. The balance still looks stale on screen. Assign frontend and run again.",
    },
    matches: (order) => has(order, "backend") && !has(order, "frontend"),
  },
  {
    id: "fallback",
    outcome: "lose",
    ticketStatus: "BLOCKED",
    result: {
      title: "Blocked.",
      body: "That team can't fix a stale cache. Backend has to invalidate it and frontend has to re-poll. Reassign backend and frontend and run again.",
    },
    matches: () => true,
  },
];
