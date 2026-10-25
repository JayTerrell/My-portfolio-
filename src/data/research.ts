// Data research studies. The numbers below are SAMPLE DATA for layout only.
// Replace each series with your real dataset. Charts are drawn as SVG at build time.
export type Study = {
  id: string;
  index: string;
  title: string;
  question: string;
  finding: string;
  method: string;
  source: string;
  chart:
    | { type: 'line'; xLabel: string; yLabel: string; unit: string; points: { x: string; y: number }[] }
    | { type: 'bar'; unit: string; bars: { label: string; value: number }[] }
    | { type: 'scatter'; xLabel: string; yLabel: string; points: { x: number; y: number; label?: string }[] };
};

export const studies: Study[] = [
  {
    id: 'cycle-time',
    index: 'R.01',
    title: 'Variance drives cycle time more than volume',
    question: 'When a team gets slower, is it because work increased or because work became less predictable?',
    finding: 'Sample finding: median cycle time tracked intake variance far more closely than intake volume across twelve months.',
    method: 'Monthly cohort analysis, rolling median.',
    source: 'Sample data',
    chart: {
      type: 'line',
      xLabel: 'Month',
      yLabel: 'Median cycle time',
      unit: 'days',
      points: [
        { x: 'Jan', y: 14.2 }, { x: 'Feb', y: 13.8 }, { x: 'Mar', y: 15.1 }, { x: 'Apr', y: 16.4 },
        { x: 'May', y: 15.9 }, { x: 'Jun', y: 12.7 }, { x: 'Jul', y: 11.3 }, { x: 'Aug', y: 10.6 },
        { x: 'Sep', y: 9.8 }, { x: 'Oct', y: 9.1 }, { x: 'Nov', y: 8.7 }, { x: 'Dec', y: 8.2 },
      ],
    },
  },
  {
    id: 'friction',
    index: 'R.02',
    title: 'Where customers hesitate',
    question: 'Which steps in an onboarding journey lose the most people, and why?',
    finding: 'Sample finding: the identity verification step accounted for the largest single drop in completion.',
    method: 'Funnel analysis with step level exit rates.',
    source: 'Sample data',
    chart: {
      type: 'bar',
      unit: '% exit',
      bars: [
        { label: 'Identity check', value: 31 },
        { label: 'Payment setup', value: 22 },
        { label: 'Profile details', value: 14 },
        { label: 'Plan selection', value: 9 },
        { label: 'Email confirm', value: 6 },
      ],
    },
  },
  {
    id: 'reading-depth',
    index: 'R.03',
    title: 'Depth of practice and decision quality',
    question: 'Do people who study across more fields make better calibrated forecasts?',
    finding: 'Sample finding: forecasters drawing on more disciplines showed lower calibration error, with diminishing returns past six.',
    method: 'Brier score by self reported breadth, n = 40.',
    source: 'Sample data',
    chart: {
      type: 'scatter',
      xLabel: 'Disciplines studied',
      yLabel: 'Calibration error',
      points: [
        { x: 1, y: 0.31 }, { x: 1, y: 0.27 }, { x: 2, y: 0.29 }, { x: 2, y: 0.24 }, { x: 2, y: 0.26 },
        { x: 3, y: 0.22 }, { x: 3, y: 0.25 }, { x: 3, y: 0.2 }, { x: 4, y: 0.19 }, { x: 4, y: 0.21 },
        { x: 4, y: 0.17 }, { x: 5, y: 0.16 }, { x: 5, y: 0.18 }, { x: 5, y: 0.14 }, { x: 6, y: 0.13 },
        { x: 6, y: 0.15 }, { x: 6, y: 0.12 }, { x: 7, y: 0.13 }, { x: 7, y: 0.12 }, { x: 8, y: 0.12 },
      ],
    },
  },
];
