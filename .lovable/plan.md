# Make Platform Architecture expandable, not always visible

Today, the Platform Architecture sub-item is always visible in the sidebar, and the architecture slide (`s15`) is always rendered in the deck after XIV. We will hide both by default and surface the architecture only when the user explicitly opens it from XIV.

## Behavior after change

- **Sidebar**: Under XIV "The Cherre Platform," the "↳ Platform Architecture" row is hidden by default. A small chevron on XIV expands it to reveal the sub-item. Clicking the sub-item opens the architecture content and scrolls to it.
- **Deck**: The Architecture slide (`s15`) is no longer rendered inline. Instead, XIV gets a minimalist CTA — "Appendix — View Platform Architecture +" — placed *below* the Quality bar, styled de-emphasized (smaller, neutral grey top border) so it doesn't compete with the Connect/Core/Alpha/Quality tiles above. Uses the same `+`/`−` rotation pattern as Quality so it feels native to the slide.
- Clicking either the sidebar sub-item or the in-slide CTA toggles the same `architectureOpen` state, mounts `<ArchitectureSlide />` directly below XIV, and smooth-scrolls to it.
- When collapsed, neither the sidebar sub-item nor the architecture content takes up space.

## Files to change

1. **`src/pages/Index.tsx`**
   - Add `architectureOpen` state (default `false`).
   - Replace the always-rendered `<ArchitectureSlide />` with a conditional render placed immediately after `<ProductionAnchorSlide />`. When toggled open, scroll `#s15` into view after mount.
   - Pass `architectureOpen` + `onArchitectureToggle` to both `ProductionAnchorSlide` and `LunaSidebar`.
   - Re-run the IntersectionObserver effect when `architectureOpen` changes so `#s15` is observed only while mounted.

2. **`src/components/LunaSidebar.tsx`**
   - Accept `architectureOpen: boolean` and `onArchitectureToggle: () => void` props.
   - Add a small chevron affordance to the XIV row (matching `luna-restricted-chevron` styling) that toggles `architectureOpen`. Clicking the XIV label still navigates to `#s14`.
   - Only render the `slideChildren[s14]` sub-item when `architectureOpen` is true; clicking it ensures open + navigates to `#s15`.
   - Use the same fade/height transition pattern as the Restricted accordion sub-nav.

3. **`src/components/slides/ProductionAnchorSlide.tsx`**
   - Accept `architectureOpen` + `onArchitectureToggle` props.
   - Add a CTA button placed *below the Quality bar* (not above the tiles), labeled: small "Appendix" eyebrow + "View Platform Architecture" + a `+`/`−` affordance that flips when open.
   - Styled de-emphasized: smaller than Quality, neutral grey top border (no brand color), so it reads as a separate "go deeper" affordance rather than a fifth product tile.
   - Mirror the same on mobile (placed at the bottom of the mobile accordion stack).
   - Fire `trackEvent("luna_architecture_opened" | "luna_architecture_closed", { source: "slide" })`.

4. **`src/lib/slides.ts`** — no structural change. `slideChildren` and `allSlideIds` stay as-is; visibility becomes a runtime concern.

5. **`src/index.css`** — add a `.luna-nav-item__expand` chevron rotation style (re-using the existing pattern from `.luna-restricted-chevron`). No new colors.

## Analytics

- New events: `luna_architecture_opened` / `luna_architecture_closed` with `{ source: "sidebar" | "slide" }`.
- Existing `luna_slide_viewed` for `s15` continues to fire only after the user opens it and dwells — which is the desired "intentional view" measurement.

## Out of scope

- No copy or visual changes to the Architecture slide content itself.
- No changes to the Restricted accordion or other slides.