let valor = document.getElementById('num');
let usarDecimal = true; 

function transDecimal(num) {
    let i = 0;
    let res = []; 

    do {
        res[i] = num % 2;
        num = Math.floor(num / 2);
        i++;
    } while (num > 0);

    res.reverse();
    return res;
}

function transBinario(num) {
    let n = num.toString().split('').map(Number);
    n.reverse();
    let newValor = [];
    
    for(let i = 0; i < n.length; i++){
        newValor[i] = n[i] * Math.pow(2, i);
    }
    
    let acumulador = 0;
    for(let i = 0; i < newValor.length; i++){
        acumulador += newValor[i];
    }
    
    return acumulador;
}

function calcular() {
    let numero = parseInt(valor.value);
    let resultado;
  
    if (!usarDecimal) {
        resultado = transDecimal(numero);
        document.getElementById('result').innerHTML = resultado.join(" ");
    } else {
        resultado = transBinario(numero);
        document.getElementById('result').innerHTML = resultado;
    }
}

function toggleConversao() {
    usarDecimal = !usarDecimal; 

   
    let btn = document.getElementById('toggleButton');
    btn.textContent = usarDecimal ? "Usar Binário para Decimal " : "Usar Decimal para Binário";
    document.getElementById('result').innerHTML = "";
}

