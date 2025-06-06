<script>
	let { data } = $props();
</script>

<h1>Usuário</h1>

<form>
	<input name="idade" placeholder="Filtrar por idade" />
	<button>Filtrar</button>
</form>

<ul>
	{#each data.users.users as user}
		<li>
			<a href="/03/dummy/users/{user.id}">{user.firstName} ({user.age} anos) ➡️ {user.username}</a>
		</li>
	{/each}
</ul>
