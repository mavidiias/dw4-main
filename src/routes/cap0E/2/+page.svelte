<script>
    // funcões assíncronas
    let contador = $state(0);

    async function iniciarContagem() {
    while (contador >= 0) {
      console.log(`${contador}...`);
      await bloquear(1); // Espera 1 segundo
      contador--;
    }
    console.log('Feliz Alguma coisa!');
  }

    function bloquear(segundos) {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Desbloqueando...');
                resolve();
            }, segundos * 1000);
        });
    }
</script>

<h1>Contador Regressivo</h1>

<input type="number" bind:value={contador} />
<br>
<button onclick={iniciarContagem}>iniciar contador</button>

{#if contador > 0}
   <h3 class="cont num">{contador}</h3>
{/if}

{#if contador < 0}
<h3 class="cont happy">Feliz alguma Coisa! </h3>
{/if}

<style>
    .num {
        text-align: center;
        font-size: 400px;
    }

    .happy {
        text-align: center;
        font-size: 150px;
    }

    h1 {
        text-align: center;
    }

    input {
        align-items: center;
        text-align: center;
    }
    
    button {
        text-align: center;
    }
</style>