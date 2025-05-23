<script>
    let { data } = $props();
  </script>
  
  <h3>Post</h3>
  <p><strong>Título:</strong> {data.posts.title}</p>
  <p><strong>Corpo:</strong> {data.posts.body}</p>
  
  
  <h3>Postagens do usuário</h3>
  <ul>
    {#each data.comments as comment}
      <li><a href="/03/external/posts/{post.id}/comments">{comment.name} {comment.email} {comment.body}</a></li>
    {:else}
      <p>Esse post não tem comentários ainda!</p>
    {/each}
  </ul>
  <p>
    <a href="/03/external/posts">Voltar aos posts</a>
  </p>