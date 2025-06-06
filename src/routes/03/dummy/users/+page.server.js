export async function load({ fetch, url }) {
    const pais = url.searchParams.get('pais');
    let link = 'https://dummyjson.com/users';
    if (pais) link
    const resUser = await fetch('https://dummyjson.com/users');
    const users = await resUser.json();
  
    return { users };
  }