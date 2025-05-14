<script>
	let Real = $state(0);
	let Dolar = $state(0);

	function r2d() {
		Real = Dolar / 5.80;
	}

	function d2r() {
		Dolar = Real * 5.80;
	}
</script>

<p> <b>
    cap 04
    exercício 02: </b> Com base no exemplo de Calculadora de temperatura, faça uma página de conversão entre as moedas dólas e real, tomando como base a cotação do dólar de hoje.
</p>
Real: <input oninput={r2d} 
                type="number"
                bind:value={Dolar} />
Dolar: <input oninput={d2r}
                   type="number"
                   bind:value={Real} />
