# Product brief: accountable AI signal discovery

## Opportunity
A local newsroom learns about recurring questions too late: after a topic has already generated search demand, frustrated reader comments, or confusion around a public-service change. Existing dashboards surface volume but not a useful, reviewable editorial question.

## User and job
**Audience/assignment editor:** “When multiple weak signals point to a potential community information need, help me evaluate whether it deserves a pitch without asking me to trust an unexplained model.”

## Proposed MVP
A workbench that clusters approved inputs into a theme, displays source mix and confidence, proposes a neutral framing, and captures an editor’s disposition: investigate, monitor, or dismiss.

### Non-goals
- Auto-publishing, auto-assigning, or generating final reporting.
- Ingesting private/sensitive data without an approved policy.
- Inferring a reader's protected characteristics or personal circumstances.

## Hypothesis
If audience editors receive provenance-preserving, AI-assisted signal clusters, then the median time from “emerging reader need” to a vetted pitch will fall by **30%**, while editor-rated usefulness remains at least **4/5**.

## Success and guardrails
| Category | Measure | Target |
| --- | --- | --- |
| Primary | time from cluster creation to vetted pitch | -30% |
| Quality | editor usefulness rating | ≥4/5 |
| Quality | pitches rejected for unsupported framing | <10% |
| Safety | sensitive/single-source clusters surfaced | 0 without explicit review |
| Operations | weekly editor review burden | <45 minutes |

## Workflow
1. Ingest only consented, approved, or public sources.
2. Deduplicate and cluster; preserve count and source-type distribution.
3. Generate a neutral question and confidence explanation.
4. Editor reads sources, labels civic value/urgency, and chooses a disposition.
5. Track whether the resulting pitch led to reporting and reader value.

## Key risks and mitigations
- **Manipulated or coordinated inputs:** flag source concentration; never equate volume with public value.
- **Sensitive themes:** require a manual-review queue and prohibit personalization.
- **Hallucinated framing:** show source excerpts, neutral language, and a “dismiss as unsupported” feedback label.
- **Editorial over-reliance:** position output as a triage aid; evaluate whether it changes coverage diversity.

## Discovery plan
- Observe two assignment meetings and map current signal-to-pitch friction.
- Interview six editors/reporters about trust, time cost, and useful evidence.
- Conduct a retrospective: feed the prototype prior-week signals and compare blind editorial decisions.
- Convene legal, standards, and community-engagement stakeholders before connecting live inputs.
