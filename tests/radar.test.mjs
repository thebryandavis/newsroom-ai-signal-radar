import test from 'node:test';import assert from 'node:assert/strict';import {evidenceLabel,signalScore,rankSignals,pitchCard} from '../src/core.js';
const base={id:1,theme:'Transit',type:'Search',count:10,sourceTypes:3,civicValue:4,urgency:3,sensitive:false,summary:'A neutral summary'};
test('evidence label uses documented thresholds',()=>{assert.equal(evidenceLabel(5),'thin');assert.equal(evidenceLabel(6),'moderate');assert.equal(evidenceLabel(12),'strong');});
test('sensitive clusters receive a score penalty',()=>{assert.ok(signalScore({...base,sensitive:true})<signalScore(base));});
test('ranking honors type and evidence filters',()=>{const result=rankSignals([base,{...base,id:2,type:'Comments',count:3}],{type:'Search',minimumEvidence:6});assert.deepEqual(result.map(x=>x.id),[1]);});
test('pitch warns when a cluster is sensitive',()=>{assert.match(pitchCard({...base,sensitive:true}).caveat,/manual standards review/i);});
