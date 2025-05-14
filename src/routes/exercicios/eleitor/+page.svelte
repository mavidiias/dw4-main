<script>
    let idade = $state(0);
    function tipo() {
		idade 
	}
</script>

<p> <b>
    cap 05
    exercício 01: </b> Cidadãos com menos de 16 anos não têm direito ao voto, aqueles com idades entre 16 e 17, bem como aqueles com mais de 70 anos, têm o voto como facultativo, enquanto os cidadãos entre 18 e 70 anos são obrigados a votar. Dada a idade de um cidadão, qual a sua classe eleitoral? (eleitor obrigatório, eleitor facultativo, não eleitor).
</p>

<h1>Veja se você ja pode votar!</h1>

Sua idade:
<input type="number" bind:value={idade} />
<br />



{#if idade > 70}
	<p>Eleitor Facultativo! 😊</p>
{:else if idade >= 18}
	<p>Eleitor Obrigatório! 🫡</p>
{:else if idade >= 16}
	<p>Eleitor Facultativo! 😊</p>
{:else}
	<p>Você ainda não pode votar! 😔</p>
{/if}