<script>
    let lunitemp = $state(0);
    let celcius = $state(0);

    function l2c() {
        celcius = lunitemp * 2.5 + 10;
    }

    function c2l() {
        lunitemp = (celcius - 10)  / 2.5;
    }
</script>

<h1 class="azul">Calculadora de Temperatura! </h1>

<u class="bb">Lunitemp:</u> <input oninput={l2c} 
                type="number"
                bind:value={lunitemp} />
<u class="aa">Celcios</u> <input oninput={c2l}
                   type="number"
                   bind:value={celcius} />


                   {#if celcius <= 20 }
                   <p>Que Frio da bixiga! 🥶</p>
               {:else if celcius <= 30}
                   <p>Haaa o clima ta agradável! 😍</p>
               {:else if celcius > 31 && celcius < 47}
                   <p>Que calor da bixiga! 🥵</p>
               {:else}
                   <p>Vixe fomos de arrasta! 💀</p>
               {/if}
<style>
    .azul{
        color: rgb(248, 0, 207);
    }

    .bb{
        color: blue;
    }

    .aa{
        color: orangered;
    }


</style>
