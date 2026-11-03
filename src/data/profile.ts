export interface Stat {
  value: string;
  label: string;
}

export interface SkillGroup {
  label: string;
  items: readonly string[];
}

export interface ServiceLine {
  id: 'analysis' | 'compliance';
  title: string;
  summary: string;
  stats: readonly Stat[];
  skillGroups: readonly SkillGroup[];
  proof: { href: string; label: string };
}
export const profile = {
  name: 'Mayokun Adeniran',
  role: 'Data Analyst and Regulatory Compliance Specialist',
  location: 'Abuja, Nigeria',
  availability: 'Open to remote contract and full-time work',
  email: 'adeniranmayo01@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mayokun-adeniran-05ama/',
  medium: 'https://medium.com/@adeniranmayo01',
  formspreeId: 'xoqgyooe',
  headline: 'I turn messy operational data into decisions, and regulatory requirements into systems that pass audit.',
  about: [
    'I am a data analyst with 3+ years of experience building dashboards, data quality systems, survey datasets and automated reporting for government and enterprise organizations.',
    'I am currently at Mshel Homes Limited. There I analyze household survey and customer service data in Excel, maintain a year-to-date client sentiment dataset, and run quarterly KPI reviews of business units. Before that, I delivered Tableau and Excel analytics across 37 Nigerian states for the Federal Ministry of Health.',
    'I also led regulatory compliance in Nigeria’s upstream oil and gas sector. I took a company through NCDMB and NipeX registration and audits, with a 100% compliance rating and zero non-compliance findings.',
    'My approach is the same in every sector: find what is broken in the data, fix it at the source, and write the method down so the next person can repeat it.',
  ],
} as const;

export const serviceLines: readonly ServiceLine[] = [
  {
    id: 'analysis',
    title: 'Data analysis',
    summary: 'Dashboards, survey analysis and data quality reviews for Nigeria\u2019s Federal Ministry of Health, a real estate group and financial services firms.',
    stats: [
      { value: '22%', label: 'cost reduction from operational analysis' },
      { value: '100%', label: 'state accuracy target met, 37 of 37 states' },
      { value: '9,348+', label: 'national health records quality-reviewed' },
    ],
    skillGroups: [
      { label: 'Visualize', items: ['Power BI', 'Tableau', 'Looker Studio'] },
      { label: 'Analyze', items: ['Advanced Excel', 'Power Query', 'SQL', 'Python'] },
      { label: 'Methods', items: ['Survey analysis', 'Chi-square & Cramer\u2019s V', 'Data validation'] },
    ],
    proof: { href: '#work', label: 'See the dashboards and case studies' },
  },
  {
    id: 'compliance',
    title: 'Regulatory compliance',
    summary: 'Upstream oil and gas compliance frameworks, NCDMB and NipeX registration, audit readiness and operator prequalification.',
    stats: [
      { value: '100%', label: 'NipeX compliance rating in 10 weeks' },
      { value: '0', label: 'non-compliance findings across audits' },
      { value: '3', label: 'major operators prequalified' },
    ],
    skillGroups: [
      { label: 'Frameworks', items: ['NOGICD Act 2010', 'NCDMB', 'NipeX'] },
      { label: 'Delivery', items: ['Desk & Core Audit', 'Vendor prequalification', 'Audit readiness'] },
      { label: 'Documents', items: ['HSE manuals', 'Compliance checklists'] },
    ],
    proof: { href: '#experience', label: 'See the AS-WORTH record' },
  },
];
