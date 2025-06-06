<script>
    let { data } = $props();
  </script>
  

  
  
  <h3>Comentários do Post!</h3>
  <ul>
    {#each data.comments as comment}
      <li><strong>Título do comentário:</strong>{comment.name}</li> 
      <li><strong>Email:</strong> {comment.email}</li> 
      <li><strong>Corpo do comentário:</strong>  {comment.body}</li>
      <br>
    {:else}
      <p>Esse post não tem comentários ainda!</p>
    {/each}
  </ul>
  <p>
    <a href="/03/external/posts">Voltar aos posts</a>
  </p> 