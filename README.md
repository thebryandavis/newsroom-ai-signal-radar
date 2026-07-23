# Newsroom AI Signal Radar

A product-management portfolio prototype that helps a newsroom turn a noisy stream of audience, search, and local signals into an **editorially accountable** coverage queue.

![Status](https://img.shields.io/badge/status-prototype-5B5BD6) ![No build step](https://img.shields.io/badge/build-none-success)

## The product idea
Newsrooms have more signals than attention: reader questions, search spikes, comments, public-meeting agendas, and social chatter. AI can cluster and summarize that material, but it should not decide what is newsworthy.

**Signal Radar** creates a deliberately constrained workflow:
1. Group similar incoming signals.
2. Reveal the sources and a concise AI-generated framing.
3. Let an editor set urgency and civic value.
4. Produce a reviewable pitch card—not an automatic assignment.

## Product case study
**Problem:** audience and reporting teams need a shared, low-friction view of emerging local information needs.

**Primary user:** audience editor / assignment editor.

**Outcome:** reduce time to identify a viable service-journalism pitch while protecting source provenance and editorial judgment.

**MVP principle:** every AI summary must retain a linkable evidence trail, uncertainty label, and a clear handoff to a human editor.

Read [`docs/product-brief.md`](docs/product-brief.md) for the opportunity framing, constraints, and validation plan.

## Run locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Test

```bash
node --test tests/radar.test.mjs
```

## Repository map

| File | Role |
| --- | --- |
| `index.html` | interactive editor workspace |
| `src/core.js` | signal ranking and pitch-card rules |
| `src/app.js` | sample-data UI implementation |
| `docs/product-brief.md` | product thinking and measurement plan |
| `tests/radar.test.mjs` | tests for decision rules |

## Demo workflow
- Filter by signal type or minimum evidence threshold.
- Select a cluster to inspect provenance and create a pitch.
- Promote a cluster only after considering editorial urgency and public value.

The seed records are fictional. The UI intentionally displays limitations such as source mix and confidence rather than asserting the model is correct.

## PM portfolio talking points
- Defines where AI assists (clustering and summarizing) versus where humans decide (newsworthiness and assignment).
- Treats provenance and uncertainty as first-class product requirements.
- Names a concrete operational metric alongside reader-value and quality guardrails.
- Shows a path from discovery signal to a reviewable editorial decision.

## Next iterations
- Integrate approved first-party feedback and public documents with consent controls.
- Build feedback labels for false clusters, duplicates, and missing context.
- Add reporter follow-through and outcome tracking.
- Conduct a red-team review for sensitive-topic and manipulation risks.

## License
MIT. This is a fictional portfolio prototype, not a production newsroom system.
