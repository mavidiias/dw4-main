<script>
// Ler o nome de uma cidade e exibir os usuários daquela cidade.
// {#each nomeusuario as usuario}
//<h5>{usuario.name}</h5>
//{/each}
   let usuarios = $state();
   let cidade = $state();
    

    async function buscarUsuario() {
        let resposta = await fetch(
            `https://jsonplaceholder.typicode.com/users?address.city=${cidade}`);
        usuarios = await resposta.json();

    }
</script>

<input type="text" placeholder="Nome Cidade" bind:value={cidade}>       
<button onclick={buscarUsuario}>Buscar</button>

{#if usuarios}
    <h3>cidade de {cidade}</h3>
{#each usuarios as usuario}
   <h5>{usuario.name}</h5>
{/each}
{/if}