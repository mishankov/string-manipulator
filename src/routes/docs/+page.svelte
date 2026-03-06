<script lang="ts">
	import { type TManipulation } from '$lib/manipulations';
	import Link from '$lib/components/Link.svelte';
	import ManipulationBlock from './ManipulationBlock.svelte';

	interface ManipulationDoc {
		name: string;
		description: string;
		source: string;
		manipulation: TManipulation;
	}

	const docsTemplate: ManipulationDoc[] = [
		{
			name: 'Replace',
			description: 'Replaces all occurencies of a string in input',
			source: 'I am your possible source',
			manipulation: { id: 'Replace', type: 'replace', from: 'source', to: 'output' }
		},
		{
			name: 'Prepend',
			description: 'Add a string before input',
			source: 'Source',
			manipulation: { id: 'Prepend', type: 'prepend', prefix: 'Best ' }
		},
		{
			name: 'Append',
			description: 'Add a string after input',
			source: 'Source',
			manipulation: { id: 'Append', type: 'append', suffix: ' -> output' }
		},
		{
			name: 'Split, get from index',
			description: 'Split input by string and get substring by index',
			source: 'Zero, one, two, three',
			manipulation: {
				id: 'splitGetFromIndex',
				type: 'splitGetFromIndex',
				splitString: ',',
				index: 1
			}
		},
		{
			name: 'Compose',
			description: 'Compose string using input string by pattern',
			source: 'Input',
			manipulation: { id: 'compose', type: 'compose', placeholder: '{}', pattern: '{}: {}, {}' }
		},
		{
			name: 'Slice',
			description: 'Get a slice from input string',
			source: 'Some good input',
			manipulation: { id: 'slice', type: 'slice', start: 5, end: 9 }
		},
		{
			name: 'Split-compose',
			description: 'Split input by delimeter and compose string by pattern',
			source: 'Zero, one, two, three',
			manipulation: {
				id: 'splitCompose',
				type: 'splitCompose',
				splitString: ', ',
				placeholder: '{d}',
				pattern: 'Reordered {1}, {0}, {2}!'
			}
		},
		{
			name: 'Trim',
			description: 'Trim all, leading or trailing spaces from input',
			source: '  Some good input  ',
			manipulation: { id: 'trim', type: 'trim', trimType: 'all' }
		},
		{
			name: 'Case',
			description: 'Transform input to lower or upper case',
			source: 'Some gOOd iNPuT',
			manipulation: { id: 'case', type: 'case', caseType: 'lower' }
		},
		{
			name: 'Split-join',
			description: 'Split input by delimeter, apply manipulations and join',
			source: 'Zero, one, two, three',
			manipulation: {
				id: 'splitJoin',
				type: 'splitJoin',
				splitString: ',',
				joinString: '\\n',
				innerManipulations: [
					{ id: 'splitJoinTrim', type: 'trim', trimType: 'leading' },
					{ id: 'splitJoinCase', type: 'case', caseType: 'lower' },
					{ id: 'splitJoinPrepend', type: 'prepend', prefix: 'Number: ' },
					{ id: 'splitJoinAppend', type: 'append', suffix: '!' }
				]
			}
		}
	];

	function cloneDocsTemplate(): ManipulationDoc[] {
		return JSON.parse(JSON.stringify(docsTemplate)) as ManipulationDoc[];
	}

	let docsState = $state(cloneDocsTemplate());
</script>

<div class="container">
	<div class="docs-row">
		<h1>Docs</h1>
		<Link link="/">Go to app</Link>
	</div>

	{#each docsState as doc (doc.name)}
		<div class="docs-row"><h2>{doc.name}</h2></div>
		<div class="docs-row">
			<p>{doc.description}</p>
		</div>

		<div class="docs-row">
			<ManipulationBlock source={doc.source} manipulation={doc.manipulation} />
		</div>
	{/each}
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 10px;

		padding: 10px;
		max-width: 1200px;
		margin: 0 auto;
	}

	.docs-row {
		display: flex;
		flex-direction: row;
		align-items: end;
		gap: 10px;
		flex-wrap: wrap;
	}

	h2 {
		margin-top: 20px;
	}

	@media (max-width: 768px) {
		.container {
			padding: 8px;
		}

		.docs-row {
			gap: 8px;
		}
	}
</style>
