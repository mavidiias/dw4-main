<script>
    let { data } = $props();
  </script>
  
  <h3>User</h3>
  <p><strong>Nome:</strong> {data.user.firstName} {data.user.maidenName} {data.user.lastName}</p>
  <p><strong>Email:</strong> {data.user.email}</p>
  <p><strong>Telefone:</strong> {data.user.phone}</p>
  <p><strong>Username:</strong> {data.user.username}</p>
  <p><strong>Companhia:</strong> {data.user.company.name}</p>
  <p><strong>Endereço:</strong> {data.user.address.address}, {data.user.address.city}, {data.user.address.satate} {data.user.address.stateCode}</p>
  <p><strong>Imagem:</strong><img src="{data.user.image}" alt="Imagem do usuário"></p>