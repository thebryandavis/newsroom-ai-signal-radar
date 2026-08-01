# Newsroom AI Signal Radar

A product-management exercise about the boundary between AI assistance and editorial judgment. Signal Radar groups noisy audience, search, and public-information signals into reviewable pitch cards, but it never declares something newsworthy on its own.

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
