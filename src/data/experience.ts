export type Track = 'analysis' | 'compliance' | 'both';

export interface Role {
  company: string;
  title: string;
  location: string;
  start: string;
  end: string;
  track: Track;
  highlights: readonly string[];
}

/** Source of truth: "Mayokun Adeniran's Resume - United Nations.docx" (Job Hunting folder), 2026-10-16 edit. */
export const experience: readonly Role[] = [
  {
    company: 'Mshel Homes Limited',
    title: 'Data Analyst',
    location: 'Federal Capital Territory',
    start: 'Jul 2026',
    end: 'Nov 2026',
    track: 'analysis',
    highlights: [
      'Cleaned and analyzed a 1,990-respondent household survey in Excel: set the correct base for each question, built 20 frequency tables and 10 cross-tabulations with chi-square and Cramer’s V, verified 62 figures with zero mismatches, and wrote a findings report with seven recommendations for management.',
      'Analyzed 1,327 Q3 customer service tickets in Excel: calculated response times, classified each ticket with a keyword rule, and found 37.8% exceeded the 5-day response standard, naming the categories behind the delays.',
      'Maintained a year-to-date dataset of 559 client survey responses with written scoring rules, producing period reports on satisfaction (83% in the latest run), sentiment and the top issues for leadership.',
      'Ran the group’s first quarterly strategic vetting cycle: wrote the scoring standard, scored three business units’ initiatives against their stated KPIs, and delivered three quarterly reports by the deadline.',
      'Turned the monthly Head of Business Development report into a written, repeatable method with a Power Query model and a validation step before each release.',
      'Built an Excel add-in that standardizes estate names and plot sizes across sales and payment exports in one click, with a report showing which rule fixed each value.',
    ],
  },
  {
    company: 'eHealth4everyone',
    title: 'Data Analyst',
    location: 'Federal Capital Territory',
    start: 'Feb 2026',
    end: 'Jul 2026',
    track: 'analysis',
    highlights: [
      'Designed and built two Tableau dashboards for MSDAT, the Federal Ministry of Health’s national health platform: the Health Workforce Scorecard, now live on MSDAT, and a proposed rebuild of the Health Financing Disaggregation section, each with a rebuild playbook for reproducibility.',
      'Led the IHME 2022–2023 data quality review: extracted and transformed 9,348+ records across 51 indicators and 38 subnational locations, and produced standard quality workbooks with Python-automated reconciliation.',
      'Validated facility records across all 37 Nigerian states (36 states + FCT) in the national Health Facility Registry, achieving 100% of the quarterly state accuracy target with Python-based ID matching.',
      'Reviewed existing MSDAT dashboards against live data and stakeholder requirements, and wrote redesign proposals that became the basis for approved rebuilds.',
      'Monitored the live MSDAT dashboard suites weekly, and led Python automation audits that removed all error states from the Health Facility Registry conversion pipeline.',
    ],
  },
  {
    company: 'AS-WORTH Professional Services Limited',
    title: 'Regulatory Compliance Manager & Data Analyst',
    location: 'Lagos State',
    start: 'Apr 2025',
    end: 'Dec 2025',
    track: 'both',
    highlights: [
      'Designed and implemented the company’s upstream regulatory compliance framework under the Nigerian Oil and Gas Industry Content Development Act 2010, and led NCDMB registration with statutory filings, capitalization evidence and Nigerian personnel records.',
      'Directed end-to-end NipeX registration, including the Desk Audit and Core Audit Module, achieving a 100% compliance rating across audits in 10 weeks.',
      'Managed regulator-facing desk and field audits with audit-readiness systems for HSE policies, corporate governance, financial records and facility inspections, cutting audit preparation time by 40% with zero non-compliance findings.',
      'Led vendor prequalification with NNPC Limited, Seplat Energy and WalterSmith Petroman Oil Limited, securing prequalification with 3 major operators and expanding vendor opportunities by 50%.',
      'Built compliance and performance databases from regulatory and operational sources, and produced Power BI reports and executive dashboards for senior leadership.',
      'Wrote 2 HSE and corporate compliance manuals that reduced policy-related queries by 60%, and 3+ compliance checklists that increased compliance adherence by 75% in internal audits.',
      'Aligned company documentation with Nigerian Content Intervention Fund eligibility standards in engagement with the Bank of Industry and NEXIM Bank.',
    ],
  },
  {
    company: 'AA & C Professionals Limited',
    title: 'Data Analyst',
    location: 'Lagos State',
    start: 'Sep 2024',
    end: 'Mar 2025',
    track: 'analysis',
    highlights: [
      'Conducted data cleaning and statistical analysis on financial and operational data that uncovered inefficiencies, leading to a 22% cost reduction.',
      'Developed monthly and quarterly Power BI and Excel reports with trends, predictions and recommendations for management.',
      'Presented findings to cross-functional stakeholders in clear, non-technical language.',
    ],
  },
  {
    company: 'Excelerate',
    title: 'Data Analyst Associate Intern',
    location: 'Dubai, UAE (remote)',
    start: 'Jul 2024',
    end: 'Aug 2024',
    track: 'analysis',
    highlights: [
      'Built interactive Looker Studio and Google Sheets dashboards that accelerated decision-making by 30%.',
      'Recognized as a Star Performer of the Data Analyst Associate cohort.',
    ],
  },
  {
    company: 'Quantum Analytics',
    title: 'Data Analyst Intern',
    location: 'Lagos State',
    start: 'Jan 2024',
    end: 'May 2024',
    track: 'analysis',
    highlights: [
      'Cleaned and analyzed project datasets across 7 sectors using SQL, Python, Excel and Tableau, reducing data processing time by 35%.',
      'Prepared client-facing reports and presented recommendations directly to stakeholders.',
    ],
  },
  {
    company: 'Interstellar Technologies Limited',
    title: 'IT Intern',
    location: 'Lagos State',
    start: 'Mar 2023',
    end: 'Nov 2023',
    track: 'analysis',
    highlights: [
      'Maintained databases and performed routine data cleaning that reduced reporting errors by 25%.',
      'Automated recurring Excel and Google Sheets reports for management.',
    ],
  },
];

export const education = {
  degree: 'B.Eng. in Mechatronics Engineering',
  school: 'Bells University of Technology',
  location: 'Ogun State',
} as const;

export const memberships = [
  { title: 'Graduate Member (GISPN)', body: 'Institute of Safety Professionals of Nigeria (ISPON)', date: 'July 2025' },
] as const;
