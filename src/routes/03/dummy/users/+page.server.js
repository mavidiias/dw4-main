export async function load({ fetch, url }) {
    const idade = url.searchParams.get('idade');
    let link = 'https://dummyjson.com/users';
    if (idade) link += `/filter?key=age&value=${idade}`
    const resUser = await fetch(link);
    const users = await resUser.json();
    return { users };
  }