<script>
    let { data } = $props();
  </script>

  <form>
    <input name="pais" placeholder="Filtrar po país">
    <button>Filtrar</button>
  </form>
  
  <h3>Usuários</h3>
  <ul>
    {#each data.users.users as user}
      <li><a href="/03/dummy/users/{user.id}">{user.firstName} ➡️ {user.username}</a></li>
    {/each}
  </ul>