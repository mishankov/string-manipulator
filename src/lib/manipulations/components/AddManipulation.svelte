<script lang="ts">
	import type { TManipulation } from '..';

	export let manipulations: TManipulation[] = [];

	function randomId() {
		return (Math.random() + 1).toString(36).substring(2);
	}

	function onNewManipulationSelect(event: Event) {
		const target = event.target as HTMLSelectElement;
		switch (target.value) {
			case 'replace':
				manipulations.push({
					type: 'replace',
					from: '',
					to: '',
					id: randomId()
				});
				break;
			case 'append':
				manipulations.push({
					type: 'append',
					suffix: '',
					id: randomId()
				});
				break;
			case 'prepend':
				manipulations.push({
					type: 'prepend',
					prefix: '',
					id: randomId()
				});
				break;
			case 'splitGetFromIndex':
				manipulations.push({
					type: 'splitGetFromIndex',
					splitString: '',
					index: 0,
					id: randomId()
				});
				break;
			case 'compose':
				manipulations.push({
					type: 'compose',
					pattern: '{}',
					placeholder: '{}',
					id: randomId()
				});
				break;
			case 'slice':
				manipulations.push({
					type: 'slice',
					start: 0,
					end: -1,
					id: randomId()
				});
				break;
			case 'splitCompose':
				manipulations.push({
					type: 'splitCompose',
					splitString: '!',
					placeholder: '{d}',
					pattern: '{1}, {0}',
					id: randomId()
				});
				break;
			case 'splitJoin':
				manipulations.push({
					type: 'splitJoin',
					splitString: ',',
					joinString: '!',
					innerManipulations: [],
					id: randomId()
				});
				break;
			case 'trim':
				manipulations.push({
					type: 'trim',
					trimType: 'all',
					id: randomId()
				});
				break;
			case 'case':
				manipulations.push({
					type: 'case',
					caseType: 'lower',
					id: randomId()
				});
				break;
		}

		manipulations = manipulations;
		target.value = 'add';
	}
</script>

<select on:change={onNewManipulationSelect}>
	<option value="add">Add</option>
	<option value="replace">Replace</option>
	<option value="prepend">Prepend</option>
	<option value="append">Append</option>
	<option value="splitGetFromIndex">Split, get from index</option>
	<option value="compose">Compose</option>
	<option value="slice">Slice</option>
	<option value="splitCompose">Split-compose</option>
	<option value="trim">Trim</option>
	<option value="case">Case</option>
	<option value="splitJoin">Split-join</option>
</select>
