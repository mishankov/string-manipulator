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

	const manipulationsDocs: ManipulationDoc[] = [
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
					{ id: 'splitJoinPrepend', type: 'prepend', prefix: 'Number: ' },
					{ id: 'splitJoinAppend', type: 'append', suffix: '!' }
				]
			}
		}
	];
</script>

<div class="container">
	<div class="docs-row">
		<h1>Docs</h1>
		<Link link="/">Go to app</Link>
	</div>

	{#each manipulationsDocs as doc (doc.name)}
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

		padding-top: 10px;
		padding-bottom: 10px;
	}

	.docs-row {
		display: flex;
		flex-direction: row;
		margin: auto;
		align-items: end;
		gap: 10px;
	}

	h2 {
		margin-top: 20px;
	}
</style>
