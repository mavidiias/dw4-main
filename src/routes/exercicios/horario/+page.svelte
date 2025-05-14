<script>
    const now = new Date()
    let periodo = $state()
    if(now.getHours()<12 && now.getHours()>4){
    periodo = "Bom dia!"
    }else if(now.getHours()>12 && now.getHours()<19){
        periodo = "Boa tarde!"
    } else{
        periodo= "Boa Noite!"
    }
</script>

<p> <b>
    cap de
    exercícios 02: </b> Modifique teu sistema de autenticação de modo que, na mensagem de boas vindas ao usuário autenticado, seja exibido bom dia, boa tarde ou boa noite, dependendo do horário.
</p>

<h1>Bem Vindo(a), {periodo}</h1>

<p id="para1">Agora são {now.getHours()} horas e {now.getMinutes()} minutos.</p>

