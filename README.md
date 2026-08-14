# AI Signal Radar

A prototype for finding useful signals in a workflow without asking software to make the judgment.

It began as a newsroom workflow, but the underlying product problem is broader: source-grounded triage, confidence, and human review.

**Status:** Prototype
**Built for:** Editors, reporters, and audience teams
**My role:** Product idea, workflow, evidence model, and rule tests

## What I was trying to learn

Can a tool reduce the work of sorting through audience, search, and public-information signals while leaving the editorial judgment with a person?

## What I built

Signal Radar groups related signals into reviewable pitch cards. Each card keeps its sources, shows a confidence label, and gives an editor a place to decide what deserves attention.

## What remains unproven

The records are fictional, so this repository demonstrates the workflow and rules rather than newsroom impact. Source quality and the review process would need testing with real users.

## Next step

Test whether the cards help an editor reach a decision faster without hiding uncertainty or making weak signals look more important than they are.

## What this explores

- Clustering and summarizing signals without hiding their sources
- Confidence labels and evidence trails
- Editorial workflows rather than “AI decides” dashboards
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

The records are fictional. This is a portfolio prototype for exploring workflow and safeguards, not a newsroom system.
