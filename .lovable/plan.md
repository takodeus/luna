## Slide XIV copy + Sidebar restructuring

### 1. Slide XIV body copy (`src/components/slides/ProductionAnchorSlide.tsx`)

Replace the paragraph at line 135 with:

> "For more than a decade, Cherre has been doing the difficult work beneath the visible layer of real assets technology: resolving identities, governing definitions, preserving lineage, and translating fragmented systems into usable meaning. Already deployed across the world's largest investors, managers, and operators. The reasoning era doesn't need to be built. It needs to be deployed on what's already there."

The "From pilot to production." italic line beneath stays as-is.

### 2. Sidebar restructuring (`src/components/LunaSidebar.tsx`)

- **Restricted accordion trigger**: change visible label from "Access Required" → "Cherre Only".
- **Restricted sub-items (`caseItems`)**: 
  - "The Brief" → "Use Cases"
  - "The Demo" → "Demos"
  - Remove "The Stack" entry from `caseItems` (so the Restricted accordion contains only Use Cases + Demos).

### 3. Add "Appendix: Platform Architecture" under XIV

Add a new top-level Contents item directly below "xiv The Cherre Platform" labeled **"Platform Architecture"** with `num: "Appendix"`. Clicking it opens the existing Architecture content (currently `ArchitectureSlide` rendered inside the practitioner overlay's "stack" tab) — but since it should now be public (moved out of Restricted), we render it as a normal slide in the main deck.

Two coordinated edits:

**a. `src/lib/slides.ts`** — append:
```ts
{ id: "s15", num: "Appendix", label: "Platform Architecture" },
```

**b. `src/pages/Index.tsx`** — render `<ArchitectureSlide />` inside `<main className="luna-main">` after `<ProductionAnchorSlide />`. Wrap it in a `<section id="s15">` if `ArchitectureSlide` doesn't already provide one (will verify and adjust the wrapper accordingly so the IntersectionObserver tracks it). Import `ArchitectureSlide` at the top of Index.tsx.

**c. `src/components/PractitionerOverlay.tsx`** — remove the "The Stack" tab from `TABS` and remove its render block. If `section === 'stack'` arrives (legacy), default to `'brief'`. Update the `PractitionerSection` type in `src/pages/Index.tsx` to `'brief' | 'demo'`.

### Notes

- "Appendix" is shown in the sidebar in the same position as the roman numerals (`luna-nav-num` slot). Existing CSS styling will accept the longer string; no style changes needed.
- All copy uses sentence-case and contains no em dashes, per project writing guidelines.
- ArchitectureSlide currently lives only inside the password-gated overlay — moving its render to the public deck makes it accessible to all viewers as requested.