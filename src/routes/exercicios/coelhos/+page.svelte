<script>
    let fibonacciNumbers = $state([0, 1]);
    let mes = $state(0);

    function increaseFibonacciNumbers() {
        mes++;
        let last = fibonacciNumbers[fibonacciNumbers.length - 1];
        let secondlast = fibonacciNumbers[fibonacciNumbers.length - 2];
        fibonacciNumbers.push(last + secondlast);
    }

    function decreaseFibonacciNumbers() {
        if (mes > 0) {
            mes--;
            fibonacciNumbers.pop();
        }
    }

    function updateFibonacciNumbers(event) {
        mes = event.target.value;
        fibonacciNumbers = [0, 1];
        for (let i = 2; i <= mes; i++) {
            let last = fibonacciNumbers[fibonacciNumbers.length - 1];
            let secondlast = fibonacciNumbers[fibonacciNumbers.length - 2];
            fibonacciNumbers.push(last + secondlast);
        }
    }
</script>

<h1><p class="azul"><b>Os coelhos de Fibonacci</b></p></h1>
<p>
    Mês: <input type="number" min="0" bind:value={mes} oninput={event => updateFibonacciNumbers(event)} />
    <button onclick={increaseFibonacciNumbers} class="btn btn-outline-secondary">próximo mês</button>
    <button onclick={decreaseFibonacciNumbers} class="btn btn-outline-secondary">mês anterior</button>
</p>
<p>Após {mes} meses, haverá {fibonacciNumbers[mes]} ninhadas de coelhos!!</p>

<style>
    .azul {
        color: rgb(111, 160, 252);
    }
</style>