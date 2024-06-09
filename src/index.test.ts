import { expect, it } from 'vitest';
import { doManipulation } from '$lib/manipulations';

it('Test replace manipulation', () => {
	expect(doManipulation('\\3', { type: 'replace', from: '\\\\3', to: 'result' })).eq('result');
	expect(doManipulation('\\', { type: 'replace', from: '\\\\', to: 'result' })).eq('result');
});

it('Test trim manipulation', () => {
	expect(doManipulation('   input    ', { type: 'trim', trimType: 'leading' })).eq('input    ');
	expect(doManipulation('   input    ', { type: 'trim', trimType: 'trailing' })).eq('   input');
	expect(doManipulation('   input    ', { type: 'trim', trimType: 'all' })).eq('input');
});

it('Test case manipulation', () => {
	expect(doManipulation('gOOd iNPuT', { type: 'case', caseType: 'lower' })).eq('good input');
	expect(doManipulation('gOOd iNPuT', { type: 'case', caseType: 'upper' })).eq('GOOD INPUT');
});
