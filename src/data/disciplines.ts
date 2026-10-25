export type DisciplineId = 'philosophy' | 'mathematics' | 'behavior' | 'business' | 'finance' | 'data' | 'creativity';

export const disciplines: { id: DisciplineId; name: string; short: string; line: string }[] = [
  { id: 'philosophy', name: 'Philosophy', short: 'Philosophy', line: 'The discipline of asking better questions before chasing answers.' },
  { id: 'mathematics', name: 'Mathematics', short: 'Math', line: 'Structure, proof, and the patience to find the pattern underneath.' },
  { id: 'behavior', name: 'Human Behavior', short: 'Behavior', line: 'Every system is a set of people making decisions under pressure.' },
  { id: 'business', name: 'Business', short: 'Business', line: 'Strategy as a design problem: incentives, constraints, and flows.' },
  { id: 'finance', name: 'Finance', short: 'Finance', line: 'The language of tradeoffs, risk, and compounding.' },
  { id: 'data', name: 'Data Analytics', short: 'Data', line: 'Evidence over opinion. Measure, model, then decide.' },
  { id: 'creativity', name: 'Creativity', short: 'Creative', line: 'The leap between two ideas that were never introduced.' },
];

// Every pairing of two disciplines, and the bridge between them.
// Key format: the two ids sorted alphabetically and joined with "+".
export const bridges: Record<string, { title: string; insight: string; applied: string }> = {
  'mathematics+philosophy': {
    title: 'Axioms are beliefs',
    insight: 'Every model starts with assumptions nobody proves. Naming them is the fastest way to find where a strategy will break.',
    applied: 'Before building a forecast, list the axioms it depends on and stress test each one.',
  },
  'behavior+philosophy': {
    title: 'Stoic decision hygiene',
    insight: 'Separating what you control from what you only react to removes most of the noise in human judgment.',
    applied: 'Decision reviews that grade the quality of the process, independent of the outcome.',
  },
  'business+philosophy': {
    title: 'First principles strategy',
    insight: 'Strip an industry back to what is physically and economically true, then rebuild from there.',
    applied: 'Repricing a service from its cost structure upward instead of from competitor pricing.',
  },
  'finance+philosophy': {
    title: 'The ethics of leverage',
    insight: 'Leverage magnifies judgment, good or bad. Knowing when to decline it is a philosophical position first.',
    applied: 'Capital allocation rules written as principles, set before markets get emotional.',
  },
  'data+philosophy': {
    title: 'The epistemology of dashboards',
    insight: 'A metric is a claim about reality. Asking how we know it is true keeps teams from optimizing a number that stopped meaning anything.',
    applied: 'Pairing every KPI with the question it is supposed to answer.',
  },
  'creativity+philosophy': {
    title: 'Constraint as muse',
    insight: 'Limits clarify. Original work usually comes from taking a constraint seriously enough to design around it.',
    applied: 'Product sprints with a deliberately narrow brief and a hard deadline.',
  },
  'behavior+mathematics': {
    title: 'The game theory of teams',
    insight: 'Incentives settle into an equilibrium. Change the payoffs and behavior follows, usually faster than any memo.',
    applied: 'Redesigning a commission plan so that collaboration becomes the winning move.',
  },
  'business+mathematics': {
    title: 'Queues are everywhere',
    insight: 'Most operational pain is a queueing problem: arrivals, capacity, and variance. Reduce the variance and throughput rises without new headcount.',
    applied: 'Smoothing intake schedules to cut cycle time across a service team.',
  },
  'finance+mathematics': {
    title: 'Compounding asymmetry',
    insight: 'Small, repeated edges outperform large, rare wins. The math rewards consistency and punishes ruin.',
    applied: 'Position sizing that keeps you in the game long enough for an edge to show up.',
  },
  'data+mathematics': {
    title: 'Signal versus variance',
    insight: 'Before celebrating a change, ask how much of it would have happened by chance alone.',
    applied: 'Experiment design with power calculations agreed on before launch.',
  },
  'creativity+mathematics': {
    title: 'Pattern as composition',
    insight: 'Symmetry, recursion, and rhythm show up in music, design, and proofs alike. Elegance lives in structure.',
    applied: 'Design systems built from a handful of recursive rules.',
  },
  'behavior+business': {
    title: 'Friction is a map',
    insight: 'Wherever customers hesitate, the business carries a hidden cost. Map the hesitation and you have a roadmap.',
    applied: 'Onboarding redesigns guided by exactly where people drop off.',
  },
  'behavior+finance': {
    title: 'Behavioral money',
    insight: 'People feel a loss roughly twice as strongly as an equal gain. Products that respect that bias earn trust and retention.',
    applied: 'Framing pricing changes around protection rather than upside.',
  },
  'behavior+data': {
    title: 'Data has a pulse',
    insight: 'Every row in a dataset is a person making a choice. Analysis improves the moment you ask what they were trying to do.',
    applied: 'Pairing quantitative funnels with five honest customer conversations.',
  },
  'behavior+creativity': {
    title: 'Empathy as material',
    insight: 'Creative work lands when it is built from an honest model of the audience and what they carry into the room.',
    applied: 'Messaging tested against real objections instead of internal assumptions.',
  },
  'business+finance': {
    title: 'Unit economics as narrative',
    insight: 'A business is a story told in margins. If the unit does not work, scale only tells that story louder.',
    applied: 'Contribution margin by channel before expanding spend.',
  },
  'business+data': {
    title: 'Operating rhythm',
    insight: 'Data becomes valuable when it is wired into the cadence of decisions, weekly and on purpose.',
    applied: 'A single scorecard that runs the Monday meeting.',
  },
  'business+creativity': {
    title: 'Strategy is design',
    insight: 'Good strategy shares the qualities of good design: clarity, coherence, and one move nobody predicted.',
    applied: 'Positioning work that begins with what to remove.',
  },
  'data+finance': {
    title: 'Models with humility',
    insight: 'A forecast is a range. Showing the range changes how leaders commit capital.',
    applied: 'Scenario bands in place of single point projections.',
  },
  'creativity+finance': {
    title: 'Creative capital',
    insight: 'Ideas compound like money when they are reinvested. A body of work behaves like a portfolio.',
    applied: 'Building knowledge products as assets with recurring returns.',
  },
  'creativity+data': {
    title: 'Visual reasoning',
    insight: 'The right chart turns a debate into a shared picture. Clarity is a creative act.',
    applied: 'Executive briefs designed around one decisive visual.',
  },
};

export const bridgeKey = (a: string, b: string) => [a, b].sort().join('+');
