<script>
    let { data } = $props();
  </script>
  
  <h3>Posts</h3>
  <ul>
    {#each data.posts as post}
      <li><a href="/03/external/posts/{post.id}">{post.title}</a></li>
    {/each}
  </ul>