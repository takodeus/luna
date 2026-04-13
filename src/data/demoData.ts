export type FieldStatus = 'correct' | 'wrong' | 'conflict';

export interface DemoField {
  key: string;
  label: string;
  textOnly: string;
  grounded: string;
  status: FieldStatus;
  confidence: number;
  groundedConfidence: number;
  memoPhrase: string;
  wrongReason: string;
  correctionNote: string;
  resolvedBy: 'luna' | 'meridian' | 'both' | null;
}

export const MEMO_FULL = `INVESTMENT COMMITTEE MEMORANDUM
Confidential | For Committee Use Only

Date: March 14, 2024
Prepared by: Acquisitions Team, Northeast Region
Re: Proposed Acquisition - 400 Stonegate Avenue Retail Component

EXECUTIVE SUMMARY

The Acquisitions Team presents this memorandum to the IC for approval of a proposed acquisition of the retail podium at 400 Stonegate Avenue, Boston, Massachusetts.

The retail component (approximately 42,000 sq ft) presents an opportunity to expand the Harwick Capital Partners IV portfolio at this location. The subject property is adjacent to and structurally integrated with the Stonegate Office Portfolio assets currently under management.

TRANSACTION OVERVIEW

Transaction Name: 400 Stonegate Retail Acquisition
Proposed Commitment: $47.5M equity
Expected Close: Q2 2024
Structure: Fee-simple acquisition

The retail podium comprises two connected structures: a ground-floor national grocery anchor (28,000 sq ft) and second-floor boutique retail (14,000 sq ft). Current occupancy stands at 94%. The submarket has demonstrated strong retail fundamentals driven by the adjacent office-using population and residential density in Boston's Back Bay neighborhood.

GEOGRAPHIC CONTEXT

The asset is located within the Northeast corridor. The Back Bay submarket is part of the greater Boston Metro area, benefiting from proximity to major transit nodes and consistent foot traffic from surrounding office and residential uses.

COMMITTEE CONTEXT

This memo is submitted for IC review ahead of the planned Q2 2024 binding commitment. Full committee approval is required prior to execution.

RECOMMENDATION

The Acquisitions Team recommends approval of the $47.5M equity commitment for this acquisition.`;

export const DEMO_FIELDS: DemoField[] = [
  {
    key: 'capitalPool',
    label: 'Capital Pool',
    textOnly: 'Harwick Capital Partners IV',
    grounded: 'Harwick Capital Partners IV',
    status: 'wrong',
    confidence: 62,
    groundedConfidence: 99,
    memoPhrase: 'Harwick Capital Partners IV portfolio',
    wrongReason: 'The model identified the correct name but assigned it to the wrong field. "Harwick Capital Partners IV" is the fund vehicle (Capital Pool), not an investment entity. The memo treats it as a possessive context clause, not as a label for the deal.',
    correctionNote: 'Luna: canonical entity confirmed as fund vehicle. Role: Capital Pool.',
    resolvedBy: 'luna',
  },
  {
    key: 'investment',
    label: 'Investment',
    textOnly: 'Stonegate Office Portfolio',
    grounded: '400 Stonegate Retail Component',
    status: 'wrong',
    confidence: 71,
    groundedConfidence: 97,
    memoPhrase: 'adjacent to and structurally integrated with the Stonegate Office Portfolio',
    wrongReason: 'The model extracted the nearest named entity as the investment. But "Stonegate Office Portfolio" is the existing parent investment. The deal creates a new retail sub-investment, not a modification of the office portfolio.',
    correctionNote: 'Meridian: this transaction registers as a new sub-investment under the existing portfolio.',
    resolvedBy: 'meridian',
  },
  {
    key: 'transactionType',
    label: 'Transaction Type',
    textOnly: 'Acquisition',
    grounded: 'Portfolio Add-on',
    status: 'wrong',
    confidence: 85,
    groundedConfidence: 98,
    memoPhrase: 'proposed acquisition of the retail podium',
    wrongReason: '"Acquisition" is linguistically correct from the memo. But the normalized business taxonomy distinguishes between a standalone acquisition and a portfolio add-on. This deal expands an existing investment entity, which carries different approval routing, NAV treatment, and reporting logic.',
    correctionNote: 'Meridian taxonomy: add-on to existing investment. Approval routing and reporting differ from standalone acquisition.',
    resolvedBy: 'meridian',
  },
  {
    key: 'sector',
    label: 'Sector',
    textOnly: 'Retail',
    grounded: 'Office / Retail Add-on',
    status: 'conflict',
    confidence: 91,
    groundedConfidence: 96,
    memoPhrase: 'retail podium',
    wrongReason: 'The model read the memo correctly. The memo describes retail. But the resolved parent entity (Stonegate Office Portfolio) is classified as Office in the MDM. This is a genuine business logic conflict: the memo narrative is retail, but the entity record is office.',
    correctionNote: 'Luna conflict: parent entity classification is Office. Memo describes Retail. Registered as retail sub-investment under Office parent.',
    resolvedBy: 'both',
  },
  {
    key: 'region',
    label: 'Region',
    textOnly: 'Northeast',
    grounded: 'Northeast',
    status: 'correct',
    confidence: 94,
    groundedConfidence: 99,
    memoPhrase: 'Northeast corridor',
    wrongReason: '',
    correctionNote: 'Confirmed correct.',
    resolvedBy: null,
  },
  {
    key: 'subRegion',
    label: 'Sub-region',
    textOnly: 'Greater Boston',
    grounded: 'New England - Core Markets',
    status: 'wrong',
    confidence: 67,
    groundedConfidence: 97,
    memoPhrase: "Boston's Back Bay neighborhood",
    wrongReason: 'The model inferred a geographic label from the city name in the memo. The normalized sub-region taxonomy uses standardized market labels that do not map directly to city or neighborhood names.',
    correctionNote: 'Meridian geography hierarchy: Boston Back Bay maps to "New England - Core Markets" in the standard sub-region taxonomy.',
    resolvedBy: 'meridian',
  },
  {
    key: 'committee',
    label: 'Committee',
    textOnly: 'IC',
    grounded: 'Investment Committee - Global',
    status: 'wrong',
    confidence: 72,
    groundedConfidence: 98,
    memoPhrase: 'IC review',
    wrongReason: '"IC" is the abbreviation used in the memo. The normalized value is the full committee name, which maps to a specific approval body in the governance model with distinct routing logic.',
    correctionNote: 'Meridian governance: "IC" resolves to "Investment Committee - Global" per the committee registry.',
    resolvedBy: 'meridian',
  },
  {
    key: 'transactionName',
    label: 'Transaction Name',
    textOnly: '400 Stonegate Retail Acquisition',
    grounded: '400 Stonegate Retail Acquisition',
    status: 'correct',
    confidence: 96,
    groundedConfidence: 99,
    memoPhrase: '400 Stonegate Avenue Retail Component',
    wrongReason: '',
    correctionNote: 'Confirmed correct.',
    resolvedBy: null,
  },
  {
    key: 'memoDate',
    label: 'Memo Date',
    textOnly: 'March 14, 2024',
    grounded: 'March 14, 2024',
    status: 'correct',
    confidence: 99,
    groundedConfidence: 99,
    memoPhrase: 'March 14, 2024',
    wrongReason: '',
    correctionNote: 'Confirmed correct.',
    resolvedBy: null,
  },
];

export interface LunaEntity {
  id: string;
  rawName: string;
  canonicalName: string;
  entityType: string;
  aliases: string[];
  role: string;
  priorAppearances: string[];
  confidence: number;
  hasSectorConflict?: boolean;
  mdmSector?: string;
  memoSector?: string;
}

export const LUNA_ENTITIES: LunaEntity[] = [
  {
    id: 'hcpiv',
    rawName: 'Harwick Capital Partners IV',
    canonicalName: 'Harwick Capital Partners IV',
    entityType: 'Fund Vehicle',
    aliases: ['HCP IV', 'Harwick CP IV', 'Harwick Capital IV'],
    role: 'Capital Pool',
    priorAppearances: [
      'IC Memo - Harwick CP IV Initial Close (Nov 2021)',
      'IC Memo - 200 Westfield Office Acquisition (Mar 2022)',
      'IC Memo - Stonegate Office Portfolio (Aug 2022)',
      'IC Memo - Harwick CP IV Second Close (Jan 2023)',
    ],
    confidence: 99,
    hasSectorConflict: false,
  },
  {
    id: 'sop',
    rawName: 'Stonegate Office Portfolio',
    canonicalName: 'Stonegate Office Portfolio',
    entityType: 'Investment',
    aliases: ['Stonegate Portfolio', 'Stonegate Office', '400 Stonegate (Office)'],
    role: 'Parent Investment',
    priorAppearances: [
      'IC Memo - Stonegate Office Portfolio - Initial Acquisition (Aug 2022)',
      'IC Memo - Stonegate Portfolio - Leasing Update (Jun 2023)',
      'Quarterly Review - Harwick CP IV Portfolio (Q3 2023)',
    ],
    confidence: 97,
    hasSectorConflict: true,
    mdmSector: 'Office',
    memoSector: 'Retail',
  },
];

export interface MeridianNode {
  id: string;
  label: string;
  sublabel: string;
  type: string;
  x: number;
  y: number;
  color: string;
  isNew?: boolean;
  isHighlighted?: boolean;
}

export interface MeridianEdge {
  from: string;
  to: string;
  label: string;
  color: string;
  dashed?: boolean;
}

export const MERIDIAN_NODES: MeridianNode[] = [
  { id: 'hcpiv', label: 'Harwick Capital Partners IV', sublabel: 'Capital Pool', type: 'Capital Pool', x: 390, y: 60, color: '#A8185E' },
  { id: 'sop', label: 'Stonegate Office Portfolio', sublabel: 'Investment', type: 'Investment', x: 175, y: 195, color: '#1B70B1' },
  { id: 'sret', label: '400 Stonegate Retail', sublabel: 'Sub-investment (new)', type: 'Sub-investment', x: 590, y: 195, color: '#CC5800', isNew: true },
  { id: 'office', label: 'Office', sublabel: 'Sector', type: 'Sector', x: 70, y: 345, color: '#1B70B1' },
  { id: 'retail', label: 'Retail', sublabel: 'Sector', type: 'Sector', x: 700, y: 330, color: '#CC5800' },
  { id: 'addon', label: 'Portfolio Add-on', sublabel: 'Transaction Type', type: 'Transaction Type', x: 530, y: 360, color: '#611FAD' },
  { id: 'ne', label: 'Northeast', sublabel: 'Region', type: 'Region', x: 220, y: 420, color: '#23A98E' },
  { id: 'necm', label: 'NE - Core Markets', sublabel: 'Sub-region', type: 'Sub-region', x: 395, y: 435, color: '#23A98E' },
  { id: 'icg', label: 'IC - Global', sublabel: 'Committee', type: 'Committee', x: 680, y: 445, color: '#611FAD' },
];

export const MERIDIAN_EDGES: MeridianEdge[] = [
  { from: 'hcpiv', to: 'sop', label: 'CONTAINS', color: '#1B70B1' },
  { from: 'hcpiv', to: 'sret', label: 'PORTFOLIO', color: '#CC5800' },
  { from: 'sop', to: 'sret', label: 'ADD-ON', color: '#CC5800', dashed: true },
  { from: 'sop', to: 'office', label: 'SECTOR', color: '#1B70B1' },
  { from: 'sret', to: 'retail', label: 'SECTOR', color: '#CC5800' },
  { from: 'sret', to: 'addon', label: 'TYPE', color: '#611FAD' },
  { from: 'sret', to: 'necm', label: 'LOCATION', color: '#23A98E' },
  { from: 'necm', to: 'ne', label: 'PART OF', color: '#23A98E' },
  { from: 'addon', to: 'icg', label: 'ROUTED TO', color: '#611FAD' },
];
