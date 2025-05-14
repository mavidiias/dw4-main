<script>
// Buscar usuários e exibir apenas os nomes.

let nomeusuario = $state();
    

    async function buscarUsuario() {
        let resposta = await fetch(
            ` https://jsonplaceholder.typicode.com/users/`);
        nomeusuario = await resposta.json();

    }
</script>

<button onclick={buscarUsuario}>Buscar Nomes</button>

{#each nomeusuario as usuario}
<h5>{usuario.name}</h5>
{/each}


