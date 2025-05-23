<script>

let unidades = [
        { nome: 'Lito', código: 'L 🍾', valor: 1 },
        { nome: 'Gota', código: 'Gota 💧', valor: 0.00005  },
        { nome: 'Colher de chá', código: 'C chá 🥄', valor: 0.0049 },
        { nome: 'Colher de sobremesa', código: 'C sobre 🥄', valor: 0.0098 },
        { nome: 'Colher de sopa', código: 'C sopa 🥄', valor: 0.0147 },
        { nome: 'Xícara', código: 'Xic ☕', valor: 0.236 },
        { nome: 'Galão', código: 'Galão 🍶', valor: 3.785 },
        { nome: 'Barril', código: 'Barril 🪣', valor: 158.987 },
        { nome: 'Tonel', código: 'Tonel 🛢️', valor: 953.923 },
        { nome: 'Metro cúbico', código: 'M³ 🧊', valor: 1000 }
    ];

    let código1 = $state(unidades[0].código);
    let código2 = $state(unidades[1].código);
    let cod1 = $state(unidades[0].valor)
    let cod2 = $state(unidades[1].valor)
    let unidade1 = $state(0);
    let unidade2 = $state(0);
    

    function converterDe() {
        unidade2 = cod2 / cod1;
    }
  
    function converterPara() {
        unidade1 = cod2 * cod1;
    }
    

    function inverterUnidades() {
        [código1, código2] = [código2, código1];
        
        let codtem = unidade1
        unidade1 = unidade2
        unidade2 = codtem

    }
    
</script>

<div class="container">
    <h1 class="titulo">Converssor de unidades</h1>


    <div class="input-group caixinha">
        <select class="form-select" bind:value={código1, cod1} onchange={mudarUnidade}>
            {#each unidades as unidade}
                <option value={unidade.código} title={unidade.nome}>{unidade.código} </option>
            {/each}
        </select>
        <input placeholder="0,00" type="number" class="form-control w-25" oninput={converterDe} bind:value={unidade1} />
        <button class="btn btn-outline-secondary" type="button" onclick={inverterUnidades}>⇄</button>
        <input placeholder="0,00" type="number" class="form-control w-25" oninput={converterPara} bind:value={unidade2} />
        <select class="form-select" bind:value={código2, cod2} onchange={converterPara}>
            {#each unidades as unidade}
                <option value={unidade.código} title={unidade.nome}>{unidade.código}</option>
            {/each}
        </select>
    </div>
</div>

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