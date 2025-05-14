<script>
    // Ler o ID de um usuário e exibir os títulos de suas postagens.

    let idusuario = $state();
    let usuario = $state ();
    let postagens = $state();

    async function buscarPostagem() {
        let resposta = await fetch(
            `https://jsonplaceholder.typicode.com/users/${idusuario}`);
        usuario = await resposta.json();

         let resposta2 = await fetch(
            `https://jsonplaceholder.typicode.com/users/${idusuario}/posts`);
            postagens = await resposta2.json();        
    }
</script>

<input type='number' placeholder="ID da postagem" bind:value={idusuario} />
<button onclick={buscarPostagem}>Buscar Títulos</button>

{#if usuario}
    <h2>{usuario.name}</h2>
    <h3>Títulos Das Postagens</h3>
    {#each postagens as postagem}
        <ul>
            <li>
                <p>{postagem.title}</p>
            </li>
        </ul>
    {/each}
    
{/if}
