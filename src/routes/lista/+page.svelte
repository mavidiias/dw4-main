<script>
	import Rodape from '../Rodape.svelte';

	const tarefas = $state([]);
	let tarefaNova = $state();
	let tarefaEditandoIndice = $state();
	let tarefaEditando = $state();

	function adicionarTarefa() {
		tarefas.push(tarefaNova);
		tarefaNova = '';
	}

	function excluirTarefa(i) {
		tarefas.splice(i, 1);
	}

	function editarTarefa(i) {
		tarefaEditandoIndice = i;
		tarefaEditando = tarefas[i];
	}

	function salvarTarefa(i) {
		tarefas[i] = tarefaEditando;
		tarefaEditandoIndice = null;
	}

	function cancelarEdicao(i) {
		tarefas[i] = tarefas[i];
		tarefaEditandoIndice = null;
	}
</script>

<div class="fundo">
	<h2>Lista do dia🩵</h2>
	<p>
		<input placeholder="Digite a tarefa..." bind:value={tarefaNova} />
		<button style="background: #ADD8E6" onclick={adicionarTarefa}>➕</button>
	</p>
	<ul>
		{#each tarefas as tarefa, i}
			<li>
				{#if tarefaEditandoIndice == i}
					<input bind:value={tarefaEditando} />
					<button style="background: #ADD8E6" onclick={() => salvarTarefa(i)}>✅</button>
					<button style="background: #ADD8E6" onclick={() => cancelarEdicao(i)}>❌</button>
				{:else}
					{tarefa}
					<button style="background: #ADD8E6" onclick={() => editarTarefa(i)}>✏</button>
					<button style="background: #ADD8E6" onclick={() => excluirTarefa(i)}>🗑</button>
				{/if}
			</li>
		{/each}
	</ul>
	
</div>

<style>
	.fundo {
		width: auto;
		height: auto;
		background-color: rgb(185, 216, 245);
	}

   
</style>
