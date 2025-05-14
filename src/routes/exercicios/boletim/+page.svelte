<script>
	let np = $state(0);
	let nt = $state(0);
	let ns = $state(0);
	let nf = $state(0);

	function calcularnota() {
		nf = (nt * 2 + ns * 3 + np * 5) / 10;
	}
</script>

<h1>Boletim Escolar</h1>

Nota da prova:
<input type="number" bind:value={np} min="0" max="10" />
<br />

Nota do Trabalho:
<input type="number" bind:value={nt} min="0" max="10" />
<br />

Nota do Seminário:
<input type="number" bind:value={ns} min="0" max="10" />
<br />

<button onclick={calcularnota}>Calcular a nota final!</button>

<p>Tua nota final é: {nf}</p>

Situação:
{#if nf >= 8.5}
	<p>A, Aprovado 😍</p>
{:else if nf >= 7}
	<p>B, Aprovado 😊</p>
{:else if nf >= 5}
	<p>C, Recuperação 😐</p>
{:else if nf >= 2.5}
	<p>D, Recuperação 😥</p>
{:else}
	<p>E, Reprovado 😭</p>
{/if}
