<script>
    let forca = $state(0)
    let acele = $state(0)
    let massa = $state(0)
 
    function leiden() {
     forca = massa * acele
    }
 
 </script>
 
 <h1 class="cortitulo" >Calcular Para lançar! 🛸</h1>
 
 <b class="margem">Massa:</b>
 <input type="number" bind:value={massa} min="0" />
 <br />
 <br />
 
 <b class="margem">Aceleração:</b>
 <input type="number" bind:value={acele} min="0" />
 <br />
 <br />
 
 
 <button onclick={leiden} class="botao">Calcular a Força!</button>
 
 
 <p class="margem">A força necessária para o lançamento é: <u class="bg-primary-subtle">{forca}</u></p>
 
 <b class="margem">A massa está:</b>
 {#if massa < 2000}
     <p class="bg-success-subtle">Dentro da margem de segurança. Voe Tranquilo! 😁</p>
 {:else if massa < 4000}
     <p class="bg-warning-subtle">Acima da margem de segurança. Você tem certeza disso? 😬</p>
 {:else}
     <p class="bg-danger-subtle">Acidente na certa! Depois não diga que eu não te avisei... 💀</p>
 {/if}
 
 
 <style>
 
     .margem {
         margin: 30px;
     }
 
     .bg-success-subtle {
         margin: 30px;
     }    
 
     .botao {
         color: rgb(255, 255, 255);
         background-color: rgb(182, 0, 0);
         margin-left: 30px;
         margin-right: 30px;
     }
 
     .cortitulo {
         color: rgb(109, 27, 185);
         margin: 30px;
     }
 
 </style>
 