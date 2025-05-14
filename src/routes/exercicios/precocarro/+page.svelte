<script>
    let cf= $state(0);
    let cc= $state(0);

    function calcularcusto() {
        if (cf <= 12000) {
            cc = cf + cf * 0.05;
        } else if (cf <= 25000) {
            cc = cf + cf * 0.1 + cf * 0.15;
        } else {
            cc = cf + cf * 0.15 + cf * 0.4;
        }
    }


</script>


<p> <b>
cap5
exercício 2:</b> O custo ao consumidor de um carro novo é a soma do custo de fábrica, da comissão do distribuidor, e dos impostos. A comissão e os impostos são calculados sobre o custo de fábrica, de acordo com a tabela abaixo. Dado o custo de fábrica, qual o custo ao consumidor?
</p>

<p> custo de fábrica: <input oninput={calcularcusto} type="number" bind:value={cf} /></p>
<p> custo do carro : R${cc}</p>