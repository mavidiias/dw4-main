<script>
    let moedas = [
        { nome: 'Dólar americano', código: '🏳️' },
        { nome: 'Real brasileiro', código: 'BRL' },
        { nome: 'Euro', código: 'EUR' },
        { nome: 'Libra esterlina', código: 'GBP' },
        { nome: 'Iene japonês', código: 'JPY' },
        { nome: 'Peso argentino', código: 'ARS' }
    ];
  
    let código1 = $state(moedas[0].código);
    let código2 = $state(moedas[1].código);
    let valor1 = $state(0);
    let valor2 = $state(0);
    let moedaPadrao = $state();
    let dataUltimaAtualizacao = $state('');
  
    async function mudarMoeda() {
        const resposta = await fetch(`https://open.er-api.com/v6/latest/${código1}`);
        moedaPadrao = await resposta.json();
        
       
        converterDe();
    }

  
    function converterDe() {
        valor2 = (valor1 * moedaPadrao.rates[código2]).toFixed(2);
    }
  
    function converterPara() {
        valor1 = (valor2 / moedaPadrao.rates[código2]).toFixed(2);
    }

    function invertermoedas() {
        [código1, código2] = [código2, código1];
        
        let codtem = valor1
        valor1 = valor2
        valor2 = codtem

        mudarMoeda();
    }
  
    async function Atualizacao() {
        const resposta = await fetch(`https://open.er-api.com/v6/latest/USD`);
        moedaPadrao = await resposta.json();

        dataUltimaAtualizacao = new Date(moedaPadrao.time_last_update_utc); // Convertendo a data para o formato Date
        dataUltimaAtualizacao = dataUltimaAtualizacao.toLocaleString('pt-BR')
        
     }

    mudarMoeda()
   
  </script>
  
  <div class="container">
    <h1 class="titulo">Cotação de moedas</h1>

    <p><b>Última atualização:</b> {dataUltimaAtualizacao} </p>

    <div class="input-group caixinha">
        <select class="form-select" bind:value={código1} onchange={mudarMoeda}>
            {#each moedas as moeda}
                <option value={moeda.código} title={moeda.nome}>{moeda.código} </option>
            {/each}
        </select>
        <input placeholder="0,00" type="number" class="form-control w-25" oninput={converterDe} bind:value={valor1} />
        <button class="btn btn-outline-secondary" type="button" onclick={invertermoedas}>⇄</button>
        <input placeholder="0,00" type="number" class="form-control w-25" oninput={converterPara} bind:value={valor2} />
        <select class="form-select" bind:value={código2} onchange={converterPara}>
            {#each moedas as moeda}
                <option value={moeda.código} title={moeda.nome}>{moeda.código}</option>
            {/each}
        </select>
    </div>

    
  
    <div class="position-fixed bottom-0 end-0 m-3">
        <a href="https://www.exchangerate-api.com">Rates By Exchange Rate API</a>
    </div>
  </div>

  <svelte:head>
	<style>
		body {
			background-color: rgb(232, 232, 215);
		}
	</style>
</svelte:head>



  <style>
        .titulo{
            text-align: center;
            color: rgb(0, 0, 163);
            font-family: 'Lucida Sans';
        }

        .caixinha{
            background-color: rgb(184, 184, 255);
        }

        input {
            background-color: rgb(212, 212, 255);
        }

        select {
            background-color: rgb(184, 184, 255);
        }

  </style>