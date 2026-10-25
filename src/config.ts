export const site = {
  name: 'FoundNexa',
  email: '', // Supply a monitored public contact email before launch.
  domain: '', // Full production origin, e.g. https://your-verified-domain.ca (no trailing slash).
  status: 'Preparing our inaugural program',
  location: 'Greater Toronto Area, Ontario, Canada',
  description: 'A founder-led incubator preparing to help early-stage Canadian technology ventures validate customer problems, shape products, and build sustainable businesses.',
  navigation: [['About', 'about'], ['Program', 'program'], ['Services', 'services'], ['Partners', 'partners'], ['FAQ', 'faq'], ['Contact', 'contact']],
  stages: [
    ['01', 'Weeks 1–2', 'Diagnose and prioritize', 'Assess your venture, identify the assumptions that matter most, and set focused milestones.'],
    ['02', 'Weeks 3–4', 'Validate the customer problem', 'Gather customer evidence and refine a value proposition grounded in a real need.'],
    ['03', 'Weeks 5–6', 'Define the offer and product', 'Clarify pricing, shape product scope, and assess technical feasibility.'],
    ['04', 'Weeks 7–10', 'Execute and learn', 'Run product, pilot, or sales experiments. Measure what happens and use it to decide what comes next.'],
    ['05', 'Weeks 11–12', 'Prepare for the next stage', 'Bring the learning together in a practical roadmap, financial model, and clearer pitch.'],
  ],
  services: [
    ['Product discovery & planning', 'Turn business needs into a clear product direction, technical approach, and scope.'],
    ['Clickable prototypes', 'Make an idea tangible so you can explore workflows and gather useful feedback.'],
    ['Scoped MVP development', 'Build a focused first product around the assumptions you need to test.'],
    ['Maintenance & technical advisory', 'Support an existing product and make informed decisions about its next steps.'],
  ],
  priorities: [
    ['Customer validation', 'The quality of customer evidence and clarity of the problem.'],
    ['Product & pilot milestones', 'Progress against focused product and experiment goals.'],
    ['Commercial progress', 'Learning about pricing, sales, and the path to a sustainable business.'],
    ['Founder capability', 'Stronger judgment, practical skills, and ownership of decisions.'],
    ['Canadian outcomes', 'Business development and employment outcomes in Canada.'],
  ],
  faqs: [
    ['Who is the program intended for?', 'Early-stage Canadian founders building B2B software, SaaS, AI-enabled ventures, or technology services. We look for relevant domain knowledge, a clear customer problem, commitment, customer evidence, technical feasibility, and program fit. Existing revenue is not a requirement.'],
    ['Can I express interest before launch?', 'Yes. We are preparing our inaugural program. Once our contact channel is available, founders can express interest in future participation. Expressing interest does not constitute admission, and a launch date has not been confirmed.'],
    ['How long is the program?', 'The planned program runs for 12 weeks, with structured milestones from initial diagnosis through customer validation, execution, and next-stage planning.'],
    ['Does participation involve equity?', 'Participation may involve negotiated minority equity. The scope of support and all terms will be documented in a separate agreement and disclosed before a founder joins. No fixed equity percentage is published.'],
    ['Must participants purchase software services?', 'No. Software services are optional and separately priced and contracted. Participants can decline them without losing program support and are free to use other providers.'],
    ['Can businesses outside the incubator use development services?', 'Yes. Commercial product and software services are also available to businesses outside the incubation program, under a separate agreement.'],
    ['Is support limited to the GTA?', 'FoundNexa is based in the Greater Toronto Area and intends to serve founders across Ontario. Delivery arrangements and participation requirements will be confirmed before joining.'],
    ['Does participation guarantee funding?', 'No. Participation does not guarantee investment, revenue, introductions, or product success. Our planned focus is practical venture development and better-informed founder decisions.'],
  ],
};
export function contactHref(subject: string) { return site.email ? `mailto:${site.email}?subject=${encodeURIComponent(subject)}` : undefined; }
// Reject malformed configuration instead of shipping broken contact or SEO links.
if (site.email && !/^[^\s@?&#]+@[^\s@?&#]+\.[^\s@?&#]+$/.test(site.email)) {
  throw new Error('site.email must be a valid plain email address or empty.');
}
if (site.domain) {
  const url = new URL(site.domain);
  if (url.protocol !== 'https:' || url.origin !== site.domain || url.username || url.password) {
    throw new Error('site.domain must be an HTTPS origin without a path or trailing slash.');
  }
}
