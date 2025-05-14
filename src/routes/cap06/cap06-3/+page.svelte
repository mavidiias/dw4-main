<script>
    function f(param) { alert(`Você clicou no botão ${param}!`); }
</script>
 
<button onclick={() => f('X')}>A</button>
<button onclick={() => f('Y')}>B</button>