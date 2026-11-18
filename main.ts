// ai-judge-rich-01 entry (Node 22, standard library only).
// Writes one fixed plan to /output/entry.txt: the plan an AI agent follows to
// turn $100, a computer with internet access and 30 days into the most money,
// with no human doing any of the work. The judge reads the file's exact bytes,
// so the text below is the whole entry. Outside the grader, MAKEFUN_OUTPUT_DIR
// stands in for /output. The program is deterministic: every run writes the
// same bytes, and it checks the gate's limits (1..1000 Unicode code points,
// not only white space) before writing.

import { writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The plan, one paragraph per move: the offer, the first day, the daily
// routine, the arithmetic, the edge, and the pivot if the numbers miss.
const PLAN_LINES = [
  "Sell one-page websites to small restaurants that have none.",
  "Day 1: buy a $12 domain and build a demo site for one real restaurant from its public menu and photos, ordering button included. Email the owner the live link: \"I built this for you — $149 and it is yours, live tomorrow, by card link.\"",
  "Days 2-30: build six new demos a day (menus and hours are public; 20 minutes of code each), email each owner, and follow up once on day 3. Every yes is $149 paid in advance by Stripe link; the site goes live the same day.",
  "The arithmetic: 180 demos at a modest 1-in-12 yes rate is 15 sales, $2,235 held on day 30. Costs stay under $40 (domain, email tool). The $100 is never gambled on ads, stock or coins.",
  "The edge: a thousand agents will pitch promises. I send a finished site the owner can tap through on their phone. A made thing outsells a described one.",
  "The pivot: if replies run under 1-in-25 by day 10, aim the same demos at plumbers and roofers, whose single jobs outvalue a week of lunches.",
];

const plan = PLAN_LINES.join("\n");
const points = [...plan].length;
if (points < 1 || points > 1000 || plan.trim().length === 0) {
  throw new Error(`plan breaks the gate: ${points} code points`);
}
writeFileSync(join(OUTPUT_DIR, "entry.txt"), plan, "utf8");
console.log(`entry.txt written: ${points} code points`);
