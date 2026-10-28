import fs from "node:fs";

const files = process.argv.slice(2);
if (files.length !== 2) {
  console.error("Usage: node scripts/compare-lighthouse.mjs baseline.report.json optimized.report.json");
  process.exit(1);
}
const load = (path) => JSON.parse(fs.readFileSync(path, "utf8"));
const get = (report, id) => report.audits?.[id]?.displayValue ?? "Not available";
const score = (report, category) => {
  const value = report.categories?.[category]?.score;
  return value == null ? "Not available" : Math.round(value * 100);
};
const a = load(files[0]), b = load(files[1]);
const rows = [
  ["Performance", score(a,"performance"), score(b,"performance")],
  ["Accessibility", score(a,"accessibility"), score(b,"accessibility")],
  ["Best Practices", score(a,"best-practices"), score(b,"best-practices")],
  ["SEO", score(a,"seo"), score(b,"seo")],
  ["First Contentful Paint", get(a,"first-contentful-paint"), get(b,"first-contentful-paint")],
  ["Largest Contentful Paint", get(a,"largest-contentful-paint"), get(b,"largest-contentful-paint")],
  ["Speed Index", get(a,"speed-index"), get(b,"speed-index")],
  ["Total Blocking Time", get(a,"total-blocking-time"), get(b,"total-blocking-time")],
  ["Cumulative Layout Shift", get(a,"cumulative-layout-shift"), get(b,"cumulative-layout-shift")]
];
console.log("| Metric | Baseline | Optimized |");
console.log("|---|---:|---:|");
for (const row of rows) console.log(`| ${row[0]} | ${row[1]} | ${row[2]} |`);
