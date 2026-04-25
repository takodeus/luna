/** Source of truth for slide IDs and human-readable titles. */
export const slides = [
  { id: "s1",  num: "i",     label: "The Semantic Infrastructure" },
  { id: "s2",  num: "ii",    label: "Three Eras. Built to Act." },
  { id: "s3",  num: "iii",   label: "What AI Agents Require" },
  { id: "s4",  num: "iv",    label: "Four Structural Gaps" },
  { id: "s5",  num: "v",     label: "The Empty Layer" },
  { id: "s6",  num: "vi",    label: "Three Kinds of Truths" },
  { id: "s7",  num: "vii",   label: "The First Hard Problem" },
  { id: "s8",  num: "viii",  label: "Four Questions, Four Layers" },
  { id: "s9",  num: "ix",    label: "Infrastructure, Not a Feature" },
  { id: "s10", num: "x",     label: "Governance Is the Architecture" },
  { id: "s11", num: "xi",    label: "Automate Steps. Protect Judgment." },
  { id: "s12", num: "xii",   label: "What Fills the Layer" },
  { id: "s13", num: "xiii",  label: "The Next Architectural Imperative" },
  { id: "s14", num: "xiv",   label: "The Cherre Platform" },
] as const;

export const slideIds = slides.map((s) => s.id);

export const slideLabel = (id: string): string =>
  slides.find((s) => s.id === id)?.label ?? id;
