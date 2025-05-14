<script>
let usuarios = $state();
   let email = $state();
    

    async function buscarUsuario() {
        let resposta = await fetch(
            `https://jsonplaceholder.typicode.com/users?email=${email}`);
        usuarios = await resposta.json();

    }
</script>

<input type="text" placeholder="Nome email" bind:value={email}>       
<button onclick={buscarUsuario}>Buscar</button>

{#if usuarios}
    <h3>email {email}</h3>
{#each usuarios as usuario}
   <h5>{usuario.name}</h5>
{/each}
{/if}