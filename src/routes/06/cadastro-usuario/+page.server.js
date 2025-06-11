import { fail, redirect } from '@sveltejs/kit';

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const name= data.get('nome');
    const email = data.get('email');
    const nascimento = data.get('nascimento');

    if (!name || !nascimento || !email) return fail(400, { error: 'Nome, email e nascimento são obrigatórios.', email });

    if (!email.includes('@')) return fail(400, { error: 'Email inválido.', email });

    if (senha.length < 4) return fail(400, { error: 'A senha deve ter pelo menos 4 caracteres.', email });

    if (email == "email@inexistente") return fail(400, { error: 'Email ou senha inválidos.', email });

    let agora = new Date();
    let nasc = new Date(nascimento);
    if (agora - nasc < 378691200000) 
        return fail(400, { error: 'Você ainda não completou 12 anos!', nome, email,nascimento })

    redirect(303, '/06/profile');
  }
};