<script>
   // Ler o ID de uma postagem e exibir apenas seu título.

    let idPostagem = $state();
    let postagem = $state();

    async function buscarPostagem() {
        let resposta = await fetch(
            ` https://jsonplaceholder.typicode.com/posts/${idPostagem}`);
        postagem = await resposta.json();
       
    }
</script>

<input type='number' placeholder="ID da postagem" bind:value={idPostagem} />
<button onclick={buscarPostagem}>Buscar Postagem</button>

{#if postagem}
    <h2>{postagem.title}</h2>
    
{/if}
