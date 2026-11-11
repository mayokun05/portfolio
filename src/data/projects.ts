import type { ImageMetadata } from 'astro';
import msdatWorkforce from '../assets/projects/msdat-health-workforce-scorecard.png';
import msdatFinancing from '../assets/projects/msdat-health-financing-disaggregation.png';
import img0 from '../assets/projects/retail-banking-financial-health.png';
import img1 from '../assets/projects/parch-and-posey-sales.png';
import img2 from '../assets/projects/us-oil-pipeline-spills.png';
import img3 from '../assets/projects/flow-sessions-productivity.png';
import img4 from '../assets/projects/world-energy-consumption.png';
import img5 from '../assets/projects/olist-ecommerce.png';
import img6 from '../assets/projects/lai-manufacturing-operations.png';
import img7 from '../assets/projects/top-ten-companies-stock-history.png';
import img8 from '../assets/projects/dataco-global-sales.png';
import img9 from '../assets/projects/who-covid-19.png';
import img10 from '../assets/projects/excelerate-user-engagement.png';
import img11 from '../assets/projects/interactive-excel-sales-dashboard.png';
import img12 from '../assets/projects/sql-logistics-database.jpg';
import img13 from '../assets/projects/sql-sales-growth.png';
import img14 from '../assets/projects/python-global-co2-emissions.jpg';

export type Tool = 'Tableau' | 'Excel' | 'Power BI' | 'SQL' | 'Python' | 'Looker Studio';

export interface Point {
  /** Short bold lead-in, e.g. "Geographic Hotspots". Null when the point has no lead-in. */
  label: string | null;
  text: string;
}

export interface Section {
  heading: string;
  points: readonly Point[];
}

export interface Project {
  slug: string;
  title: string;
  tools: readonly Tool[];
  image: ImageMetadata;
  summary: string;
  objectives: readonly Point[];
  insights: readonly Point[];
  recommendations: readonly Point[];
  report: { url: string; host: 'Google Drive' | 'OneDrive' | 'Medium' | 'Looker Studio' | 'Tableau Public' };
  /** Production work for a real client. Featured projects lead the grid and carry a badge. */
  featured?: boolean;
  /** Who the work was for, shown under the title. */
  context?: string;
  /** Tableau Public view to embed live on the case-study page. */
  embedUrl?: string;
  /** A second public link, e.g. the live dashboard on the client's own site. */
  liveUrl?: { url: string; label: string };
  /** The region of the image a card shows: x and y are the top-left corner in % of the image, zoom 1 is the full width. */
  focus?: { x: number; y: number; zoom: number };
  /** One headline number from the project's own findings, shown on the card and at the top of the page. */
  result?: { value: string; label: string };
  /** Custom headings. When present, they replace objectives, insights and recommendations on the page. */
  sections?: readonly Section[];
}

/** Order here is the order on the home page. Migrated from the 2024 to 2026 HTML detail pages. */
export const projects: readonly Project[] = [
  {
    slug: "msdat-health-workforce-scorecard",
    title: "Health Workforce Scorecard for Nigeria\u2019s Federal Ministry of Health",
    tools: ["Tableau"],
    image: msdatWorkforce,
    focus: { x: 6, y: 0, zoom: 1.8 },
    result: { value: '37', label: 'states and the FCT on one scorecard, live on MSDAT' },
    featured: true,
    context: "Built at eHealth4everyone for MSDAT, the Federal Ministry of Health\u2019s data platform",
    summary: "The scorecard shows how Nigeria\u2019s health workforce has changed across the 36 states, the FCT and the country as a whole: doctors and dentists per population, community health workers and more. Some of these numbers are routine counts that a system records as it runs. Others come from periodic surveys and estimates. They measure the same thing in different ways, so they cannot be compared directly.",
    objectives: [],
    insights: [],
    recommendations: [],
    sections: [
      { heading: "The problem", points: [
        { label: "Mixed sources", text: "The fastest way to mislead with workforce data is to subtract a survey estimate from a registry count and call the difference change. The dashboard had to make that mistake impossible." },
      ] },
      { heading: "What I built", points: [
        { label: "Two locked blocks", text: "Routine and non-routine data sit in separate blocks, and each block shows one source at a time." },
        { label: "Visible sources", text: "Every cell names its source when you hover over it." },
        { label: "Period-on-period change", text: "Each cell shows the change from the previous period, colored up, down or flat, across the whole series." },
        { label: "Honest blanks", text: "The earliest year stays blank, with a note that says why, instead of a false zero." },
        { label: "Accessible color", text: "The colors stay readable for colorblind viewers." },
      ] },
      { heading: "The lesson", points: [
        { label: null, text: "A large part of analytical integrity is refusing to compare things that are not comparable, and showing that choice in the design instead of in a footnote." },
      ] },
    ],
    embedUrl: "https://public.tableau.com/views/HealthWorkforceScorecard_17864864496040/UpdatedHealthWorkforceScorecard",
    liveUrl: { url: "https://msdat.fmohconnect.gov.ng/dashboard/Health_Workforce", label: "Live on MSDAT" },
    report: { url: "https://public.tableau.com/app/profile/mayokun.adeniran/viz/HealthWorkforceScorecard_17864864496040/UpdatedHealthWorkforceScorecard", host: "Tableau Public" },
  },
  {
    slug: "msdat-health-financing-disaggregation",
    title: "Health Financing Disaggregation Dashboard: a Redesign for Nigeria\u2019s Federal Ministry of Health",
    tools: ["Tableau"],
    image: msdatFinancing,
    focus: { x: 0, y: 8, zoom: 1.1 },
    result: { value: '4', label: 'views of one question: where Nigeria\u2019s health funding comes from' },
    featured: true,
    context: "Built at eHealth4everyone as a proposed rebuild of a section of MSDAT, the Federal Ministry of Health\u2019s data platform",
    summary: "The dashboard shows where Nigeria\u2019s health funding comes from: government and donors, by source and by year. I rebuilt it from scratch in Tableau to replace the existing MSDAT section. The version below is the one I published on Tableau Public.",
    objectives: [],
    insights: [],
    recommendations: [],
    sections: [
      { heading: "The problem with the old dashboard", points: [
        { label: "Unreadable scale", text: "The y-axis was in thousands, so \u20a64.2 trillion showed as \u201c4,252,500K\u201d. A viewer had to count zeros to know whether a number was big." },
        { label: "Mixed currencies", text: "The NHA indicators report in Naira, and the HIV/AIDS spending indicator reports in US dollars. The old build put both on one scale, as if they were one currency." },
        { label: "Inconsistent controls", text: "Filters were scattered and units were inconsistent." },
      ] },
      { heading: "What I built", points: [
        { label: "One filter strip", text: "Source, Indicator, Disaggregation type and View Mode sit in one row, and every chart responds to them." },
        { label: "View Mode toggle", text: "One control switches the whole dashboard between absolute spending and percentage share." },
        { label: "Value with its share", text: "The disaggregation table shows each value with its share of the total, for example 755.9 (69.1%)." },
        { label: "Four views of one question", text: "A total, a latest-year breakdown, a trend line by funding source, and a 100% bar of the funding mix for every year." },
      ] },
      { heading: "A stakeholder decision", points: [
        { label: null, text: "I also proposed one normalized scale: millions, billions and US dollars converted to one unit, with the currency symbol and labels that size themselves (\u20a64,252.5B as \u20a64.25T). I built it, and the stakeholders chose to keep each value in the unit its source reports. I rolled the change back. The published version shows values as reported, with the unit in the indicator name." },
      ] },
    ],
    embedUrl: "https://public.tableau.com/views/HealthFinancingDisaggregationSection/HealthFinancingDisaggregation",
    report: { url: "https://public.tableau.com/app/profile/mayokun.adeniran/viz/HealthFinancingDisaggregationSection/HealthFinancingDisaggregation", host: "Tableau Public" },
  },
  {
    slug: "retail-banking-financial-health",
    title: "Analyzing Financial Health, Customer Value, and Operational Drivers in Retail Banking",
    tools: ["Excel"],
    image: img0,
    focus: { x: 3, y: 2, zoom: 1.9 },
    result: { value: '$4,746', label: 'net transaction flow on $2.43M in total assets' },
    summary: "This analysis examines a decade of retail banking data (2013–2023) to evaluate the institution's financial health, customer behavior patterns, and operational efficiency. The goal is to identify opportunities to strengthen liquidity, improve customer retention strategies, and optimize the balance between deposits and withdrawals for sustainable growth.",
    objectives: [],
    insights: [{ label: "Narrow Net Margin", text: "While Total Assets are high ($2,428,290), the Net Transaction Flow is remarkably tight at only $4,746. This indicates that nearly all incoming deposits are being offset by withdrawals, leaving very little retained liquidity from active transactions." }, { label: "Growth Deceleration in 2023", text: "The \"Growth Engine\" chart reveals a worrying trend. After a strong 2022 ($15,994 in deposits), 2023 has plummeted to just $349. Even accounting for a partial year, this represents a significant cooling of new capital inflow." }, { label: "Operational \"Power Users\"", text: "A small group of customers drive a disproportionate amount of activity. Laura Hammond, for instance, shows high withdrawal frequency compared to zero deposits, suggesting she is a \"drain\" on current liquidity." }, { label: "Perfect Liquidity Balance", text: "The institution maintains an almost exact 50/50 split between Savings ($1.18M) and Checking ($1.24M). While balanced, it suggests a lack of incentive for customers to move \"lazy\" checking cash into higher-yield savings vehicles." }],
    recommendations: [{ label: "Retention of High-Value Depositors", text: "Prioritize \"Power Users\" who have high deposit-to-withdrawal ratios with premium loyalty rewards to stabilize the net transaction flow." }, { label: "Investigate the 2023 Slump", text: "Conduct a cohort analysis to determine if the deposit drop is due to external market conditions or a specific segment of customers churning." }, { label: "Incentivize Long-term Savings", text: "Launch a campaign to transition checking balances into long-term CDs or high-yield accounts to improve the bank's capital stickiness." }, { label: "Review High-Withdrawal Accounts", text: "Engage customers like Laura Hammond to understand their withdrawal patterns and potentially offer wealth management services to retain their assets." }],
    report: { url: "https://drive.google.com/file/d/1fqE6YpVMnSgkumvUsdeOqZ06z1GMkUCu/view?usp=drive_link", host: "Google Drive" },
  },
  {
    slug: "parch-and-posey-sales",
    title: "Analyzing Sales Performance, Product Trends, and Geographic Strongholds for Parch & Posey",
    tools: ["Excel"],
    image: img1,
    focus: { x: 18, y: 2, zoom: 1.6 },
    result: { value: '$9.6M', label: 'revenue from Standard paper, the top product' },
    summary: "This analysis explores sales data for Parch & Posey, a paper company, to understand revenue drivers, customer engagement patterns, and channel effectiveness. The goal is to uncover opportunities for geographic expansion, optimize product mix, and develop targeted marketing strategies to maximize revenue growth.",
    objectives: [],
    insights: [{ label: "The \"Standard\" Dominance", text: "Standard paper is the clear revenue leader at $9.6M, significantly outperforming Glossy and Poster stocks. This indicates a \"utility-first\" customer base rather than a creative or marketing-heavy one." }, { label: "Geographic Stronghold (Northeast)", text: "The Northeast region generates more than double the revenue ($7.7M) of the Midwest ($3M). There is a massive untapped or underperforming market in the central US." }, { label: "Channel Dependency", text: "Direct traffic is the undisputed king of web events (5,298). However, \"Organic\" and \"Social\" (Twitter/Facebook) are lagging behind, suggesting the brand relies heavily on existing name recognition rather than digital discovery." }, { label: "Sales Rep Pareto Effect", text: "A few \"All-Stars\" like Earlie Schleusner ($1.09M) and Tia Amato ($1.01M) are carrying the revenue load. There is a significant performance gap between the top tier and the rest of the sales reps." }],
    recommendations: [{ label: "Midwest Expansion Strategy", text: "Assign one of the \"Revenue All-Stars\" to lead a dedicated Midwest growth pod to replicate the success found in the Northeast." }, { label: "Digital Marketing Pivot", text: "With conversion rates at a healthy 76%, the bottleneck isn't the website, it's the top-of-funnel traffic. Increase spend in Adwords and Social to diversify away from purely \"Direct\" traffic." }, { label: "Upsell \"Poster\" Stock to Top Clients", text: "Major clients like EOG Resources and Mosaic are already high spenders. Since Poster stock is currently the lowest earner, create bundled \"Standard + Poster\" packages to increase Average Order Value (AOV)." }, { label: "Sales Mentorship Program", text: "Pair top performers like Earlie Schleusner and Tia Amato with lower-performing reps to share best practices and close the performance gap." }],
    report: { url: "https://drive.google.com/file/d/1wIJtdvOVL7pt6gZH1QyLq2aiFQfomQe8/view?usp=drive_link", host: "Google Drive" },
  },
  {
    slug: "us-oil-pipeline-spills",
    title: "Analysis of Oil Pipeline Spill in the US from 2010-2017: Data-Driven Insights for Risk Mitigation and Operational Efficiency",
    tools: ["Power BI"],
    image: img2,
    focus: { x: 24, y: 42, zoom: 1.32 },
    result: { value: '$2B', label: 'in total spill costs, about half of it environmental' },
    summary: "The goal of this analysis is to analyze historical oil pipeline spill incidents using Power BI, identifying key trends, financial impacts, environmental consequences, and safety concerns. This project aims to provide data-driven insights to enhance pipeline management, improve response strategies, and mitigate risks in high-susceptibility regions.",
    objectives: [],
    insights: [{ label: "Significant Variability in Spill Volumes Over Time", text: "The data shows dramatic fluctuations in spill volumes, spikes in 2010, 2013, and 2015 contrasted with much lower volumes in 2012 and 2014, indicating inconsistent pipeline performance and potential external influences affecting spill magnitude." }, { label: "Substantial Financial and Environmental Impact", text: "With total costs nearing $2 billion, where environmental redemption costs account for about half, and major incidents incurring hundreds of millions in expenses, it is clear that spills impose a heavy financial burden and severe environmental consequences." }, { label: "Geographic Hotspots Indicate Regional Vulnerabilities", text: "Certain states, notably Texas, Oklahoma, and California, consistently record the highest spill frequencies and volumes. These areas, which are also prone to natural disasters, highlight regional vulnerabilities that demand targeted risk management." }, { label: "Operational Inefficiencies in Response Times", text: "The average shutdown durations vary widely, from as low as 43 days to peaks of 183 days, indicating inconsistency in response and maintenance practices. This suggests that operational inefficiencies might be contributing to extended downtime, thereby affecting recovery efforts and overall performance." }, { label: "Primary Causes Linked to Equipment and Infrastructure Failures", text: "The dominant spill causes, particularly material/weld/equipment failures and corrosion, highlight that technical issues and aging infrastructure play a significant role in spill incidents. This insight underscores the need for targeted infrastructure upgrades and enhanced technical oversight." }],
    recommendations: [{ label: "Implement Enhanced Monitoring and Preventative Maintenance", text: "Invest in advanced real-time monitoring technologies (e.g., smart sensors, drones) and enforce rigorous, scheduled inspections to detect early signs of pipeline deterioration, especially in high-risk regions." }, { label: "Strengthen Emergency Response and Training Programs", text: "Develop and regularly update comprehensive emergency response plans, coupled with extensive training drills for operators and emergency responders, to ensure rapid, coordinated actions that minimize both environmental and financial impacts during incidents." }, { label: "Upgrade Infrastructure and Enforce Stricter Regulatory Oversight", text: "Prioritize modernizing aging pipeline infrastructure, using corrosion-resistant materials and state-of-the-art construction practices, and enhance regulatory enforcement to reduce operational failures and mitigate spill risks." }, { label: "Increase Investment in Research & Development (R&D)", text: "Foster innovation by allocating resources to develop improved pipeline materials, state-of-the-art leak detection systems, and automated shutdown technologies. Collaborate with industry partners and research institutions to pilot and scale cutting-edge solutions that address technical vulnerabilities." }],
    report: { url: "https://drive.google.com/file/d/1X-hf6lbOudxNg4AILSFusCbReC-c86pr/view?usp=drive_link", host: "Google Drive" },
  },
  {
    slug: "flow-sessions-productivity",
    title: "My Flow Sessions: Analyzing My Learning Patterns and Productivity",
    tools: ["Power BI"],
    image: img3,
    focus: { x: 0, y: 0, zoom: 1.4 },
    summary: "The primary goal of this leisure project is to enhance personal productivity and skill development through the effective application of the Pomodoro Technique, leveraging insights gained from the Power BI Desktop usage report. By systematically engaging in focused work sessions, the project aims to optimize time management, improve concentration, and foster a deeper immersion in tasks, ultimately leading to a more fulfilling and productive experience.",
    objectives: [],
    insights: [{ label: "Maximize Engagement", text: "Utilize the identified peak usage times (morning and afternoon) to schedule high-intensity work sessions, ensuring that the most challenging tasks are tackled during periods of optimal focus." }, { label: "Reflect and Adapt", text: "Incorporate a reflective practice after each session to assess productivity and identify areas for improvement, allowing for continuous adaptation of strategies to maximize effectiveness." }, { label: "Diversify Activities", text: "While maintaining a focus on core activities such as practicing SQL and working on datasets, introduce a variety of tasks to stimulate creativity and prevent burnout, ensuring a balanced approach to personal development." }],
    recommendations: [],
    report: { url: "https://drive.google.com/file/d/15ti9Y-jW1PLdXdVuH7PMMxtWHEaXEB89/view?usp=drive_link", host: "Google Drive" },
  },
  {
    slug: "world-energy-consumption",
    title: "A Global Analysis of Energy Consumption: Trends, Patterns and Regional Variations",
    tools: ["Power BI"],
    image: img4,
    focus: { x: 0, y: 5, zoom: 1.1 },
    summary: "The goal of this analysis is to analyze and enhance global energy consumption patterns by promoting the transition from fossil fuels to renewable and low-carbon energy sources, thereby improving energy efficiency and sustainability across different regions.",
    objectives: [],
    insights: [{ label: "Fossil Fuel Consumption", text: "Coal, gas, and oil consumption remains high, with Asia Pacific and China as the largest consumers, showing continued reliance on fossil fuels." }, { label: "Renewable Energy", text: "Renewable energy use, including hydro, wind, and solar, is growing but still represents a small part of the energy mix, with Europe and North." }, { label: "Nuclear and Low-Carbon Energy", text: "Nuclear and low-carbon energy use is rising at a slower rate than renewables, with North America and Europe being the top consumers." }, { label: "Regional Differences", text: "Energy consumption varies by region; Asia Pacific and China rely heavily on fossil fuels, while Europe and North America focus more on renewables and low-carbon sources." }],
    recommendations: [{ label: "Promote Renewable Energy", text: "Focus on increasing the adoption of renewable energy sources like solar, wind, and hydropower through policy incentives, infrastructure investment, and public awareness." }, { label: "Improve Energy Efficiency", text: "Enhance energy efficiency in sectors such as transportation, industry, and buildings by implementing energy-efficient technologies and smart grid infrastructure." }, { label: "Reduce Fossil Fuel Dependency", text: "Transition towards cleaner energy sources like natural gas, nuclear power, and biofuels, with policies that discourage coal and oil use." }, { label: "Invest in R&D", text: "Allocate resources to research and development in energy efficiency and sustainability, focusing on innovative technologies and processes for renewable and low-carbon energy." }],
    report: { url: "https://drive.google.com/file/d/1LFN-uANbDvX_490CZzriqkUT819Ehc4E/view?usp=gmail", host: "Google Drive" },
  },
  {
    slug: "olist-ecommerce",
    title: "Analyzing Olist's E-commerce Performance: Insights from a Brazilian dataset",
    tools: ["Power BI"],
    image: img5,
    focus: { x: 0, y: 3, zoom: 1.5 },
    result: { value: '$160.99', label: 'average order value across 99K customers' },
    summary: "The objective of this analysis is to enhance the performance and customer satisfaction of the e-commerce platform by leveraging data-driven insights to optimize product offerings, improve payment options and streamline order fulfillment processes.",
    objectives: [],
    insights: [{ label: null, text: "The e-commerce platform has a large customer base of 99K total customers, with an average order value of $160.99." }, { label: null, text: "The platform experiences strong demand, with 113K total order items and 33K total products sold across 27 states." }, { label: null, text: "Watches, gifts, and sports/leisure products are the top-selling product categories, generating the highest total revenue." }, { label: null, text: "The platform has seen steady growth in total price over the years, reaching $7.4M in 2018." }, { label: null, text: "Credit cards are the dominant payment type, accounting for 78.54% of total payments." }],
    recommendations: [{ label: null, text: "Continue to optimize the platform's user experience and marketing strategies to attract and retain customers, leveraging insights on popular product categories and payment preferences." }, { label: null, text: "Invest in expanding the product catalog and inventory to meet the growing demand, particularly in the high-performing categories of watches, gifts, and sports/leisure." }, { label: null, text: "Explore opportunities to diversify the payment options beyond credit cards, such as integrating mobile wallets or alternative payment methods, to cater to evolving customer preferences." }, { label: null, text: "Leverage the insights on order status distribution to identify and address any bottlenecks in the order fulfillment process, ensuring timely deliveries." }],
    report: { url: "https://drive.google.com/file/d/17t3uLXd7fLqtDoqRBDAIqEDXAKlJJv3U/view?usp=sharing", host: "Google Drive" },
  },
  {
    slug: "lai-manufacturing-operations",
    title: "Analyzing and Visualizing Real Time Data for Operational Efficiency in Lai Manufacturing Plc",
    tools: ["Power BI"],
    image: img6,
    focus: { x: 0, y: 0, zoom: 1.6 },
    result: { value: '34.7%', label: 'of downtime caused by material shortages' },
    summary: "In this project, I utilized Power BI to analyze and visualize real-time data from Lai Manufacturing Plc, aiming to tackle key challenges such as: Production Downtime: Addressed breakdowns and maintenance delays. Optimizing Processes: Streamlined manufacturing processes. Unmanageable Reports: Simplified reporting systems. Inventory Management: Enhanced raw material management. Supply Chain: Improved coordination with suppliers and distributors.",
    objectives: [],
    insights: [{ label: null, text: "'Material Shortage' and 'Human Error' caused 34.7% and 34.6% of downtime, respectively." }, { label: null, text: "Washing Machine had the least downtime (5 hours); Diesel Generator had the most (6.5 hours)." }, { label: null, text: "Production peaked in August at 102.3k units." }, { label: null, text: "June had peak employee performance; July was lowest." }],
    recommendations: [{ label: null, text: "Improve inventory management and training, enhance technical support." }, { label: null, text: "Focus on reducing Diesel Generator downtime." }, { label: null, text: "Analyze factors for success and address issues from lower months." }, { label: null, text: "Enhance energy efficiency through equipment upgrades and renewable energy." }, { label: null, text: "Replicate successful strategies, support lower performers." }],
    report: { url: "https://drive.google.com/file/d/1ciUVKdt627yLpHcEvW3PqREBAhR8KTcc/view?usp=gmail", host: "Google Drive" },
  },
  {
    slug: "top-ten-companies-stock-history",
    title: "A Historical Analysis of the Top 10 Companies: Trends, Patterns and Performance",
    tools: ["Power BI"],
    image: img7,
    focus: { x: 0, y: 2, zoom: 1.5 },
    result: { value: '465bn', label: 'total trading volume across the ten companies' },
    summary: "The goal of this project is to analyze the performance and trading patterns of the top 10 companies to identify investment opportunities, understand market dynamics, and inform strategic decision-making for portfolio management.",
    objectives: [],
    insights: [{ label: null, text: "The total trading volume of the top 10 companies is substantial at 465bn, with an average volume of 30.12m per company." }, { label: null, text: "The companies with the highest stock prices are Amazon, Google, Netflix, Tesla, and Facebook, indicating their strong market performance." }, { label: null, text: "Amazon, Google, and Facebook have the highest average adjusted close prices, suggesting they are the top-performing companies in the group." }, { label: null, text: "The stock prices and trading volumes show significant variations across different weekdays and months, highlighting the dynamic nature of the market." }],
    recommendations: [{ label: null, text: "Closely monitor the performance and trading patterns of the top-performing companies, such as Amazon, Google, and Facebook, to identify potential investment opportunities." }, { label: null, text: "Analyze the factors driving the stock price and trading volume fluctuations across weekdays and months to optimize investment strategies and timing." }, { label: null, text: "Investigate the reasons behind the stock price differences between the top 5 companies by stock price and the top 5 companies by average adjusted close, as this could reveal insights into investor sentiment and market dynamics." }, { label: null, text: "Consider diversifying the portfolio to include a mix of high-performing and more stable companies to balance risk and potential returns." }],
    report: { url: "https://drive.google.com/file/d/1Yfh8wpEHKg6cTemimIvB2qWAFoncJUVh/view?usp=gmail", host: "Google Drive" },
  },
  {
    slug: "dataco-global-sales",
    title: "Analysis of Sales Growth, Customer Retention and Operational Efficiency: Insights from DataCo Global",
    tools: ["Excel"],
    image: img8,
    focus: { x: 7, y: 0, zoom: 1.25 },
    summary: "The goal of this analysis is to enhance DataCo Global company's profitability and customer satisfaction by optimizing operations, improving financial performance and implementing targeted marketing strategies, resulting in sustainable growth and increased competitiveness in the domestic and international markets.",
    objectives: [],
    insights: [],
    recommendations: [{ label: "Enhance Sales Strategies", text: "Given the positive sales growth, it is recommended to further analyze the factors contributing to this increase. Implement targeted marketing campaigns to capitalize on successful product lines and customer segments." }, { label: "Focus on Operational Efficiency", text: "With a significant number of operations in certain categories, it is advisable to conduct a detailed review of these areas to identify the best practices that can be replicated in underperforming categories. Streamlining operations could lead to improved efficiency and profitability." }, { label: "Monitor Financial Health", text: "Regularly track the Gross Operating Profit and other financial metrics to ensure that the growth in sales translates into sustainable profitability. Consider implementing cost-control measures to enhance the GOP further." }],
    report: { url: "https://drive.google.com/file/d/1zzJdP-QLK6XEyGryrlSnhMRSx1PRjMtN/view?usp=gmail", host: "Google Drive" },
  },
  {
    slug: "who-covid-19",
    title: "Analysis of the WHO COVID-19 Pandemic",
    tools: ["Power BI"],
    image: img9,
    focus: { x: 0, y: 2, zoom: 1.5 },
    result: { value: '240', label: 'countries affected by the pandemic' },
    summary: "The objective of this project is to develop and implement a comprehensive public health strategy that leverages data-driven insights from the COVID-19 pandemic to enhance response measures, improve healthcare access and mitigate the impact of future outbreaks globally.",
    objectives: [],
    insights: [{ label: "Total Countries Affected", text: "The pandemic has spread to 240 countries globally." }, { label: "Cumulative Cases and Deaths", text: "The data records about 775M COVID-19 cases and 7M deaths worldwide, the sum of all new cases and new deaths. The \"Cumulative\" cards on the dashboard add up running totals, so their 87bn and 1bn overstate the counts." }, { label: "Regional Trends", text: "Europe, America, and Western Pacific regions have reported the highest new cases in the last 7 days." }, { label: "Country-Specific Trends", text: "The United States, China, India, France and Germany have reported the most COVID-19 cases." }],
    recommendations: [{ label: null, text: "Continue to monitor the situation closely, particularly in the regions and countries with the highest case and death burdens." }, { label: null, text: "Strengthen public health measures, such as testing, contact tracing, and vaccination campaigns, to control the spread of the virus." }, { label: null, text: "Invest in research and development to better understand the evolving nature of the virus and develop more effective treatments and preventive strategies." }, { label: null, text: "Prepare for potential future waves or variants of the virus by maintaining a robust and adaptable pandemic response framework." }, { label: null, text: "Enhance international cooperation and coordination to ensure equitable access to medical resources and support countries with limited healthcare capacities." }],
    report: { url: "https://drive.google.com/file/d/1qINqJN1y4Q5cFGpaZJWyndUleWLX9QK7/view?usp=drive_link", host: "Google Drive" },
  },
  {
    slug: "excelerate-user-engagement",
    title: "Analysis of User Engagement and Opportunities for Excelerate",
    tools: ["Looker Studio"],
    image: img10,
    focus: { x: 0, y: 2, zoom: 1.5 },
    result: { value: '24.2K', label: 'user registrations in 2023, up from 3.3K in 2022' },
    summary: "The objective of this project was to analyze user engagement metrics and trends to uncover opportunities for improvement, and provide actionable recommendations aimed at enhancing the platform's performance and user experience.",
    objectives: [],
    insights: [{ label: null, text: "User registrations grew from 3.3K in 2022 to 24.2K in 2023, with 13.8K social media sign-ups. The male-to-female ratio of 1.60 highlights an opportunity to cater more to female users." }, { label: null, text: "$1.34M in rewards has been awarded, with top opportunities like Data Visualization and Digital Marketing generating the most engagement. Completion rates vary, with Data Visualization at 69.48% and Internships at 26.58%." }, { label: null, text: "Learners have earned 1.57M skill points, averaging 137 points per learner, with a focus on critical and creative thinking, collaboration, and communication. Most opportunities span 4-6 months, emphasizing in-depth learning." }],
    recommendations: [{ label: null, text: "To enhance user engagement and retention, it is important to investigate the factors behind the recent surge in user registrations, including seasonal trends, to maintain steady growth. Targeted strategies should also be implemented to attract and retain female users by offering content and opportunities that align with their preferences. Additionally, analyzing user registration patterns by weekday will help identify optimal times for marketing and outreach efforts." }, { label: null, text: "Identify the key factors contributing to the success of the top-performing opportunities and explore ways to replicate and scale these best practices across other opportunity categories." }, { label: null, text: "Investigate the reasons behind the varying completion rates and develop targeted interventions to improve participation and success rates, especially for lower-performing opportunity types." }, { label: null, text: "Leverage the insights on the duration of opportunities to refine the platform's offering, ensuring a balanced mix of short-term and long-term learning experiences to cater to diverse learner needs." }, { label: null, text: "Identify opportunities to introduce new skill-building areas that align with emerging industry trends and user demands." }],
    report: { url: "https://lookerstudio.google.com/s/mdjO9Td84lY", host: "Looker Studio" },
  },
  {
    slug: "interactive-excel-sales-dashboard",
    title: "Sales Data Analysis",
    tools: ["Excel"],
    image: img11,
    focus: { x: 0, y: 0, zoom: 1.6 },
    result: { value: '24.8%', label: 'drop in revenue from 2018 to 2019' },
    summary: "This report aims to analyze and enhance sales performance through a comprehensive review of the sales dataset, utilizing the interactive Excel dashboard to identify trends, strengths, and areas for improvement in revenue generation across various dimensions such as time, location, and product categories.",
    objectives: [],
    insights: [{ label: null, text: "The total revenue generated is $2,028,591.00, indicating a strong sales performance overall." }, { label: null, text: "The total quantity sold is 9,119 units, suggesting a healthy volume of transactions." }, { label: null, text: "Revenue fell from $1,158,151 in 2018 to $870,440 in 2019, a drop of 24.8%." }, { label: null, text: "Saturday earns the most revenue at $335,169, followed by Sunday at $312,936. Wednesday earns the least at $229,356." }, { label: null, text: "Item 1 earns $736,953, 36% of all revenue. Item 5 is next at $499,681." }, { label: null, text: "Revenue is spread evenly across the four states: Texas leads at 26%, California has 25%, and Arizona and New Mexico have 24% each." }],
    recommendations: [{ label: null, text: "Focus promotions on Saturdays and Sundays, the highest revenue days, and on Item 1, the top seller." }, { label: null, text: "Find the cause of the 24.8% drop from 2018 to 2019 before setting growth targets, then explore new markets or products to recover the lost revenue." }, { label: null, text: "Tailor marketing and sales strategies for states based on their revenue contributions. For instance, consider localized promotions in Texas, California, and Arizona to enhance engagement and sales." }],
    report: { url: "https://1drv.ms/x/c/373fb689e921779f/EW-ugOaUJ0JFmJ233l1zePIBgt0G9H8fwopBTuTYKi2spA?e=98hAsu", host: "OneDrive" },
  },
  {
    slug: "sql-logistics-database",
    title: "Discovering insights with SQL: Investigating Logistics Company Dataset",
    tools: ["SQL"],
    image: img12,
    summary: "The logistics company operates in both international and domestic sectors, focusing on cost-efficient integration of suppliers, manufacturers, and import/export processes. Customers can send various shipping content, with payment made upon delivery, and shipment status updates handled by delivery personnel and center heads. Effective product delivery, supported by infrastructure like transport and storage, plays a key role in driving the growth of both domestic and international trade.",
    objectives: [{ label: null, text: "Design and implement a comprehensive logistics management database schema focused on optimizing cost efficiency and enhancing customer satisfaction. This system will streamline operational integration by connecting key activities such as suppliers, manufacturers, and import/export processes across domestic and international logistics." }, { label: null, text: "By enabling data-driven decision-making and performance tracking, the database will improve the speed and reliability of logistics services. This will allow for more efficient resource management, ensuring faster deliveries and better overall service quality." }],
    insights: [],
    recommendations: [],
    report: { url: "https://medium.com/@adeniranmayo01/discovering-insights-with-sql-investigating-logistics-company-dataset-0cd1ba400530", host: "Medium" },
  },
  {
    slug: "sql-sales-growth",
    title: "Uncovering Insights with SQL: Analyzing Sales Data for Business Growth",
    tools: ["SQL"],
    image: img13,
    summary: "This dataset comprehensively overviews online sales transactions across different product categories. Each row represents a single transaction with detailed information, such as the transaction ID, date, product category, product name, quantity sold, unit price, revenue, region, and payment method.",
    objectives: [{ label: null, text: "Analyze sales trends over time to identify seasonal patterns or growth opportunities." }, { label: null, text: "Explore the popularity of different product categories across regions." }, { label: null, text: "Investigate the impact of payment methods on sales volume or revenue." }, { label: null, text: "Identify top-selling products within each category to optimize inventory and marketing strategies." }, { label: null, text: "Evaluate the performance of specific products or categories in different regions to tailor marketing campaigns accordingly." }],
    insights: [],
    recommendations: [],
    report: { url: "https://medium.com/@adeniranmayo01/uncovering-insights-with-sql-analyzing-sales-data-for-business-growth-df217816b486", host: "Medium" },
  },
  {
    slug: "python-global-co2-emissions",
    title: "A Comprehensive Analysis for Global CO₂ Emissions Using Python",
    tools: ["Python"],
    image: img14,
    result: { value: '0.94', label: 'correlation between coal use and total CO\u2082 emissions' },
    summary: "This project involved a comprehensive analysis of global CO₂ emissions data from 2000 to 2021 using Python. The goal was to explore emission patterns across countries, identify key contributors, and draw actionable insights to support climate-related decision-making. The project utilized data cleaning, exploratory data analysis (EDA), correlation and regression modeling, and interactive visualizations to uncover meaningful trends in carbon emissions by fuel type and country.",
    objectives: [{ label: null, text: "Clean and prepare a multi-year global CO₂ emissions dataset for analysis." }, { label: null, text: "Analyze total and per capita emissions by country." }, { label: null, text: "Visualize fuel-specific emission patterns (coal, oil, gas, etc.)" }, { label: null, text: "Identify top and bottom emitting countries." }, { label: null, text: "Generate region-specific insights and data-driven policy recommendations." }],
    insights: [{ label: null, text: "China, USA, and India are the top emitters by total CO₂ emissions, with China heavily reliant on coal." }, { label: null, text: "Qatar, Kuwait, and Trinidad & Tobago consistently recorded the highest per capita emissions." }, { label: null, text: "Coal showed the strongest correlation with total emissions (r = 0.94), followed by oil (r = 0.86) and gas (r = 0.70)." }, { label: null, text: "Emissions dropped significantly in 2020, aligning with the global COVID-19 slowdown, then began rising again in 2021." }],
    recommendations: [{ label: null, text: "Target coal reduction in high-emission countries like China and India to achieve the most immediate impact." }, { label: null, text: "Encourage clean transport and EV adoption in oil-reliant nations such as the USA and Japan." }, { label: null, text: "Use natural gas as a short-term transitional fuel while investing in renewable infrastructure." }, { label: null, text: "Support emissions monitoring and capacity-building in smaller nations with volatile emission trends." }],
    report: { url: "https://medium.com/@adeniranmayo01/unpacking-the-smoke-a-comprehensive-analysis-for-global-co₂-emissions-dataset-using-python-c5c8f1d6c93c", host: "Medium" },
  },
];

export const allTools: readonly Tool[] = ['Tableau', 'Power BI', 'Excel', 'SQL', 'Python', 'Looker Studio'];
