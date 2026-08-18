# AI Signal Radar

A source-grounded triage workflow for turning noisy signals into reviewable next actions.

The first version came from a newsroom workflow, but the underlying product problem is broader: source-grounded triage, confidence, and human review.

**Built for:** Product, research, audience, and operations teams
**My role:** Product idea, workflow, evidence model, and rule tests

## What I was trying to learn

Can a tool reduce the work of sorting through audience, search, and public-information signals while leaving the editorial judgment with a person?

## What I built

Signal Radar groups related signals into reviewable cards. Each card keeps its sources, shows a confidence label, and gives a person a place to decide what deserves attention.

## What remains unproven

The records are fictional, so this repository demonstrates the workflow and rules rather than newsroom impact. Source quality and the review process would need testing with real users.

## Next step

Test whether the cards help an editor reach a decision faster without hiding uncertainty or making weak signals look more important than they are.

## What this explores

- Clustering and summarizing signals without hiding their sources
- Confidence labels and evidence trails
- Review workflows rather than “AI decides” dashboards
- Translating a product idea into business rules that can be tested
- Designing for a human handoff at the point where judgment matters

## Run it

No package install is required:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

Run the rule tests with:

```bash
node --test tests/radar.test.mjs
```

The records are fictional. This is a portfolio tool for exploring workflow and safeguards, not a newsroom system.
