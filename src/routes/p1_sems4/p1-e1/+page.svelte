<script>
    let idade = $state(0);
    function tipo() {
        idade
    }
</script>


    

<h1 class="vermelho">Veja seu desconto no ingresso no cinema! 🍿</h1>

Sua idade:
<input type="number" bind:value={idade} /> 
<br />



{#if idade <= 12}
    <p>50% de desconto! 😁</p>
{:else if idade >= 13 && idade <= 17}
    <p>30% de desconto! 🫡</p>
{:else if idade > 60}
    <p>40% de desconto 😊</p>
{:else}
    <p>sem desconto! 😔</p>
{/if}

<style>
    
    .vermelho{
        color: brown;
    }

</style>