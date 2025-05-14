<script>
// Ler o ID de uma postagem e exibir seu título, conteúdo e comentários.

    let idPostagem = $state();
    let postagem = $state();
    let comentarios = $state();

    async function buscarPostagem() {
        let resposta = await fetch(
            ` https://jsonplaceholder.typicode.com/posts/${idPostagem}`);
        postagem = await resposta.json();

        let resposta2 = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${idPostagem}/comments`);
            comentarios = await resposta2.json();        
    }
</script>

<input type='number' placeholder="ID da postagem" bind:value={idPostagem} />
<button onclick={buscarPostagem}>Buscar Postagem</button>

{#if postagem}
    <h2>{postagem.title}</h2>
    <p>{postagem.body}</p>

    <h3>Comentários</h3>
    {#each comentarios as comentario}
        <ul>
            <li>
                <p>{comentario.body}</p>
                <small>Por {comentario.email}</small>
            </li>
        </ul>
    {/each}
{/if}