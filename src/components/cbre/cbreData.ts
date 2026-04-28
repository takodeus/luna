// ─────────────────────────────────────────────────────────────
// CBRE Demo Mock Data
// All content isolated here. Nothing in this file is imported
// by any slide outside src/components/cbre/.
// ─────────────────────────────────────────────────────────────

// ── Intake email ─────────────────────────────────────────────

export const INTAKE_EMAIL = {
  from: 'DSP Contract Intake <contracts-inbox@cbre.cherre.com>',
  to: 'joe.stokes@cbre.com',
  date: 'Wednesday, April 22, 2026, 10:42 AM EDT',
  subject: 'Management Agreement Received — Brickell One Tower',
  body: [
    'The draft management agreement for Brickell One Tower has been received from Crestline Capital\'s outside counsel. The following details were captured during intake:',
  ],
  fields: [
    { label: 'Document',       value: 'Property Management Agreement — 38 pages, 9 exhibits' },
    { label: 'Property',       value: 'Brickell One Tower · 800 Brickell Avenue, Miami, FL 33131' },
    { label: 'Owner',          value: 'Crestline Brickell Owner LP (Delaware limited partnership)' },
    { label: 'Manager',        value: 'CBRE, Inc.' },
    { label: 'Effective date', value: 'May 1, 2026' },
    { label: 'Initial term',   value: '3 years, with automatic 1-year renewal periods' },
    { label: 'Submitted by',   value: 'e.ruiz@crestlinecapital.com (outside counsel on copy)' },
  ],
};

// ── Entity resolution records ─────────────────────────────────

export type EntityStatus = 'resolved' | 'new' | 'conflict';

export interface ResolvedEntity {
  key: string;
  rawName: string;
  canonicalName: string;
  entityType: string;
  status: EntityStatus;
  statusLabel: string;
  aliases: string[];
  details: { label: string; value: string }[];
  priorRecords: { label: string; value: string }[];
  note?: string;
}

export const RESOLVED_ENTITIES: ResolvedEntity[] = [
  {
    key: 'building',
    rawName: 'Brickell One Tower',
    canonicalName: 'Brickell One Tower',
    entityType: 'Property',
    status: 'resolved',
    statusLabel: 'Resolved — 4 aliases collapsed',
    aliases: ['800 Brickell Ave', 'BOT', 'Brickell One', '800 Brickell Avenue Tower'],
    details: [
      { label: 'Asset class',   value: 'Class A Office + Retail Podium' },
      { label: 'Address',       value: '800 Brickell Avenue, Miami, FL 33131' },
      { label: 'GLA',           value: '580,000 sq ft (office) · 24,000 sq ft (retail)' },
      { label: 'Market',        value: 'Miami CBD — Brickell submarket' },
      { label: 'Year built',    value: '2018' },
    ],
    priorRecords: [
      { label: 'Prior management agreement', value: 'Crestline / CBRE — executed May 2023' },
      { label: 'Prior owner entity',         value: 'Crestline Brickell Mezz LLC (predecessor)' },
      { label: 'Active leases on file',      value: '12 leases — 9 office, 3 retail' },
    ],
  },
  {
    key: 'owner',
    rawName: 'Crestline Brickell Owner LP',
    canonicalName: 'Crestline Capital Partners',
    entityType: 'Owner / Counterparty',
    status: 'resolved',
    statusLabel: 'Resolved — known counterparty',
    aliases: [
      'Crestline Brickell Owner LP',
      'Crestline Brickell Mezz LLC',
      'Crestline Capital Partners Fund III',
    ],
    details: [
      { label: 'Entity type',    value: 'Delaware limited partnership' },
      { label: 'Parent',         value: 'Crestline Capital Partners (GP)' },
      { label: 'Jurisdiction',   value: 'Delaware' },
      { label: 'Signatory',      value: 'E. Ruiz, Authorized Representative' },
    ],
    priorRecords: [
      { label: 'Prior agreements with CBRE', value: '3 — Brickell One (2020, 2023), Coral Gables (2022)' },
      { label: 'Known contacts',             value: 'e.ruiz@crestlinecapital.com' },
      { label: 'Outstanding approvals',      value: '1 pending — HVAC replacement bid $87,400' },
    ],
  },
  {
    key: 'manager',
    rawName: 'CBRE, Inc.',
    canonicalName: 'CBRE Southeast Region Management',
    entityType: 'Manager (Internal)',
    status: 'resolved',
    statusLabel: 'Resolved — internal entity mapped',
    aliases: [
      'CBRE, Inc.',
      'CB Richard Ellis Services, Inc.',
      'CBRE Ltd',
      'CBRE Southeast',
    ],
    details: [
      { label: 'Region',          value: 'Southeast — Miami market' },
      { label: 'Portfolio PM',    value: 'Joe Stokes (joe.stokes@cbre.com)' },
      { label: 'Legal entity',    value: 'CBRE, Inc. (Delaware corp)' },
      { label: 'Insurance on file', value: 'E&O $5M · GL $10M — current' },
    ],
    priorRecords: [
      { label: 'Properties managed in market', value: '14 active' },
      { label: 'Prior agreements at this asset', value: '2 — 2020, 2023' },
    ],
  },
  {
    key: 'tenant',
    rawName: 'Northside Retail Partners LLC',
    canonicalName: 'Northside Hospitality Group',
    entityType: 'Tenant',
    status: 'conflict',
    statusLabel: 'Conflict — insurance certificate expired',
    aliases: [
      'Northside Retail Partners LLC',
      'Northside Hospitality Group Miami',
      'NHP Retail LLC',
    ],
    details: [
      { label: 'Suite',         value: '1201 — Retail Podium, Level 1' },
      { label: 'GLA',           value: '4,200 sq ft' },
      { label: 'Lease term',    value: 'Jan 1, 2024 — Dec 31, 2028' },
      { label: 'Base rent',     value: '$58/sq ft NNN' },
      { label: 'Parent entity', value: 'Northside Hospitality Group (guarantor)' },
    ],
    priorRecords: [
      { label: 'Insurance certificate', value: 'Expired March 31, 2026 — renewal not received' },
      { label: 'Prior lease at asset',  value: 'NHP Retail LLC — 2021-2023 (predecessor entity)' },
      { label: 'Guarantor',             value: 'Northside Hospitality Group — GL $2M required' },
    ],
    note: 'Tenant insurance certificate expired 22 days ago. Lease requires $2M GL coverage. Renewal not received. Flagged for immediate follow-up.',
  },
  {
    key: 'vendor',
    rawName: 'Meridian HVAC Solutions',
    canonicalName: 'Meridian Building Services Group',
    entityType: 'Vendor / Contractor',
    status: 'resolved',
    statusLabel: 'Resolved — approved vendor',
    aliases: [
      'Meridian HVAC Solutions',
      'Meridian Building Services',
      'Meridian BS Group LLC',
    ],
    details: [
      { label: 'Vendor category', value: 'HVAC / Mechanical' },
      { label: 'Approval status', value: 'CBRE Approved Vendor — Miami market' },
      { label: 'Insurance',       value: 'GL $5M · Workers comp current' },
      { label: 'Bid submitted',   value: '$87,400 — rooftop unit replacement' },
    ],
    priorRecords: [
      { label: 'Prior work at asset',  value: '3 service contracts — 2022-2025' },
      { label: 'Performance rating',   value: '4.7 / 5.0 (CBRE vendor scorecard)' },
    ],
  },
];

// ── Obligation matrix ─────────────────────────────────────────

export type ObligationView = 'owner-manager' | 'landlord-tenant';
export type ObligationParty = 'owner' | 'manager' | 'landlord' | 'tenant';
export type ObligationSeverity = 'standard' | 'deviation' | 'flag';

export interface Obligation {
  id: string;
  party: ObligationParty;
  text: string;
  section: string;
  severity: ObligationSeverity;
  deviationNote?: string;
}

export const OBLIGATIONS: Obligation[] = [
  // Owner obligations
  { id: 'o1',  party: 'owner',   text: 'Fund all capital improvements and major repairs upon Manager request.',            section: '§4.1',  severity: 'standard' },
  { id: 'o2',  party: 'owner',   text: 'Approve the annual operating budget within 30 days of submission.',               section: '§5.2',  severity: 'standard' },
  { id: 'o3',  party: 'owner',   text: 'Maintain property, casualty, and umbrella insurance — minimum $100M.',            section: '§7.1',  severity: 'deviation', deviationNote: '$40M above CBRE standard. Owner obligation, not CBRE exposure. Confirm coverage before execution.' },
  { id: 'o4',  party: 'owner',   text: 'Pay all real estate taxes, debt service, and ground rent directly.',              section: '§4.3',  severity: 'standard' },
  { id: 'o5',  party: 'owner',   text: 'Approve any expenditure exceeding $25,000 per item or $100,000 aggregate/month.', section: '§5.5',  severity: 'deviation', deviationNote: '50% below CBRE portfolio standard of $50,000 per item. Will materially increase approval volume. Recommend negotiating to $50k / $250k.' },
  { id: 'o6',  party: 'owner',   text: 'Fund operating account — minimum balance $500,000 at all times.',                 section: '§3.4',  severity: 'standard' },
  { id: 'o7',  party: 'owner',   text: 'Designate authorized representative, available within 5 business days.',          section: '§2.3',  severity: 'standard' },
  { id: 'o8',  party: 'owner',   text: 'Indemnify Manager for environmental conditions pre-dating the effective date.',   section: '§9.4',  severity: 'standard' },
  // Manager obligations
  { id: 'm1',  party: 'manager', text: 'Operate the property in accordance with the approved annual budget.',             section: '§5.1',  severity: 'standard' },
  { id: 'm2',  party: 'manager', text: 'Collect all rents and pursue delinquencies per approved collections policy.',     section: '§3.1',  severity: 'standard' },
  { id: 'm3',  party: 'manager', text: 'Pay all property-level operating expenses from the operating account.',           section: '§3.3',  severity: 'standard' },
  { id: 'm4',  party: 'manager', text: 'Maintain books and records (GAAP); provide access on 48 hours notice.',          section: '§6.1',  severity: 'standard' },
  { id: 'm5',  party: 'manager', text: 'Deliver Monthly Operating Report by the 15th of the following month.',           section: '§6.2',  severity: 'standard' },
  { id: 'm6',  party: 'manager', text: 'Deliver draft annual operating budget by November 1.',                            section: '§5.2',  severity: 'standard' },
  { id: 'm7',  party: 'manager', text: 'Maintain E&O insurance $5M and general liability $10M.',                         section: '§7.2',  severity: 'standard' },
  { id: 'm8',  party: 'manager', text: 'Obtain competitive bids for any expense exceeding $50,000.',                     section: '§5.6',  severity: 'standard' },
  { id: 'm9',  party: 'manager', text: 'Conduct monthly property inspections; provide quarterly written reports.',        section: '§8.1',  severity: 'standard' },
  // Landlord obligations (lease layer — Suite 1201)
  { id: 'l1',  party: 'landlord', text: 'Maintain building structure, roof, core systems, and common areas.',             section: 'Lease §8.1', severity: 'standard' },
  { id: 'l2',  party: 'landlord', text: 'Provide base building HVAC, electrical, and plumbing to demised premises.',      section: 'Lease §8.2', severity: 'standard' },
  { id: 'l3',  party: 'landlord', text: 'Maintain property and casualty insurance on the building shell.',                section: 'Lease §11.1',severity: 'standard' },
  { id: 'l4',  party: 'landlord', text: 'Complete capital repairs exceeding $50,000 within 90 days of written notice.',   section: 'Lease §8.4', severity: 'standard' },
  { id: 'l5',  party: 'landlord', text: 'Provide quiet enjoyment of the demised premises for the full lease term.',       section: 'Lease §6.1', severity: 'standard' },
  // Tenant obligations (lease layer — Suite 1201)
  { id: 't1',  party: 'tenant',  text: 'Pay base rent ($58/sq ft NNN) on the 1st of each month.',                        section: 'Lease §3.1', severity: 'standard' },
  { id: 't2',  party: 'tenant',  text: 'Maintain interior of Suite 1201 in good repair and condition.',                  section: 'Lease §9.1', severity: 'standard' },
  { id: 't3',  party: 'tenant',  text: 'Carry general liability insurance — minimum $2M per occurrence.',                 section: 'Lease §11.2',severity: 'flag',      deviationNote: 'Insurance certificate expired March 31, 2026. Renewal not received. 22 days overdue.' },
  { id: 't4',  party: 'tenant',  text: 'Obtain written Landlord approval for any alterations exceeding $10,000.',        section: 'Lease §10.1',severity: 'standard' },
  { id: 't5',  party: 'tenant',  text: 'Restore premises to original condition upon lease expiry (Dec 31, 2028).',        section: 'Lease §15.2',severity: 'standard' },
  { id: 't6',  party: 'tenant',  text: 'Provide annual financial statements within 90 days of fiscal year end.',         section: 'Lease §12.3',severity: 'standard' },
  { id: 't7',  party: 'tenant',  text: 'Operate during building hours: 8:00 AM – 10:00 PM daily.',                       section: 'Lease §5.2', severity: 'standard' },
];

// ── Deviations ────────────────────────────────────────────────

export interface Deviation {
  id: string;
  severity: 'material' | 'informational';
  title: string;
  section: string;
  agreementText: string;
  standardText: string;
  recommendation: string;
  action: 'legal' | 'negotiate' | 'confirm';
}

export const DEVIATIONS: Deviation[] = [
  {
    id: 'd1',
    severity: 'material',
    title: 'Termination for convenience — 30 days, no fee',
    section: '§11.2',
    agreementText: 'Owner may terminate without cause on 30 days written notice. No termination fee payable.',
    standardText: 'CBRE standard: 60 days written notice plus termination fee equal to two months base management fee.',
    recommendation: 'Negotiate minimum 60 days notice with standard termination fee. As drafted this exposes CBRE to immediate revenue loss with no compensation.',
    action: 'negotiate',
  },
  {
    id: 'd2',
    severity: 'material',
    title: 'Owner approval threshold — $25k per item / $100k aggregate',
    section: '§5.5',
    agreementText: 'Owner approval required for any expenditure exceeding $25,000 per item or $100,000 in the aggregate per month.',
    standardText: 'CBRE portfolio standard: $50,000 per item, $250,000 aggregate per month.',
    recommendation: 'Negotiate to $50,000 per item and $250,000 aggregate. Current threshold will materially increase approval volume and delay routine maintenance.',
    action: 'negotiate',
  },
  {
    id: 'd3',
    severity: 'informational',
    title: 'Owner insurance — $100M umbrella (above standard)',
    section: '§7.1',
    agreementText: 'Owner is required to maintain a $100 million umbrella policy.',
    standardText: 'CBRE standard form requires $60 million umbrella. This obligation rests with the Owner.',
    recommendation: 'No action required from CBRE property management. Obtain confirmation of coverage from Crestline prior to execution.',
    action: 'confirm',
  },
];

// ── Operational action items ──────────────────────────────────

export type ActionPriority = 'urgent' | 'action' | 'info';

export interface ActionItem {
  id: string;
  priority: ActionPriority;
  title: string;
  description: string;
  entity: string;
  entityType: string;
  dueLabel: string;
  source: string;
  section: string;
  pulseFeed: boolean;
}

export const ACTION_ITEMS: ActionItem[] = [
  {
    id: 'a1',
    priority: 'urgent',
    title: 'Tenant insurance certificate expired',
    description: 'Northside Retail Partners LLC (Suite 1201) GL certificate expired March 31, 2026. Lease requires $2M per occurrence. 22 days overdue.',
    entity: 'Northside Hospitality Group',
    entityType: 'Tenant',
    dueLabel: '22 days overdue',
    source: 'Lease §11.2',
    section: 'Lease — Suite 1201',
    pulseFeed: true,
  },
  {
    id: 'a2',
    priority: 'urgent',
    title: 'Owner approval required — HVAC bid',
    description: 'Meridian Building Services Group submitted bid of $87,400 for rooftop unit replacement. Exceeds $25,000 per-item threshold. Owner approval required before proceeding.',
    entity: 'Crestline Capital Partners',
    entityType: 'Owner',
    dueLabel: 'Awaiting approval',
    source: 'Management Agreement §5.5',
    section: 'Management Agreement',
    pulseFeed: true,
  },
  {
    id: 'a3',
    priority: 'action',
    title: 'Annual budget submission due Nov 1',
    description: 'Draft annual operating budget for FY2027 must be delivered to Owner by November 1. Owner has 30 days to approve.',
    entity: 'Brickell One Tower',
    entityType: 'Property',
    dueLabel: '18 days remaining',
    source: 'Management Agreement §5.2',
    section: 'Management Agreement',
    pulseFeed: true,
  },
  {
    id: 'a4',
    priority: 'action',
    title: 'Lease deviation — negotiate termination clause',
    description: 'Management agreement §11.2 deviates from CBRE standard. 30-day no-fee termination exposes CBRE to immediate revenue loss. Legal review and negotiation recommended.',
    entity: 'Crestline Capital Partners',
    entityType: 'Owner',
    dueLabel: 'Before execution',
    source: 'Management Agreement §11.2',
    section: 'Management Agreement',
    pulseFeed: false,
  },
  {
    id: 'a5',
    priority: 'info',
    title: 'Monthly operating report due',
    description: 'April 2026 Monthly Operating Report due by May 15. Books and records current per GAAP.',
    entity: 'Brickell One Tower',
    entityType: 'Property',
    dueLabel: '8 days remaining',
    source: 'Management Agreement §6.2',
    section: 'Management Agreement',
    pulseFeed: true,
  },
  {
    id: 'a6',
    priority: 'info',
    title: 'Lease renewal window opens',
    description: 'Northside Retail Partners LLC (Suite 1201) lease expires Dec 31, 2028. 90-day notice window opens October 3, 2028. Renewal strategy to be initiated.',
    entity: 'Northside Hospitality Group',
    entityType: 'Tenant',
    dueLabel: 'Oct 3, 2028',
    source: 'Lease §14.1',
    section: 'Lease — Suite 1201',
    pulseFeed: true,
  },
];
