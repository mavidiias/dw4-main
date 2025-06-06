export async function load({ params, fetch }) {
    const resUser = await fetch(`https://dummyjson.com/users/${params.id}`);
    const user = await resUser.json();

    const resPosts = await fetch(`https://dummyjson.com/users/5/${params.id}/posts`);
    const posts = await resPosts.json();
  
    return { user, posts };
  }