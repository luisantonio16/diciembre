document.addEventListener('DOMContentLoaded', function () {
    const texto = "Happy new Year";
    let i = 0;
    const intervalo = setInterval(function () {
        document.getElementById('year-titulo').textContent += texto[i];
        i++;
        if (i > texto.length - 1) {
            clearInterval(intervalo);
        }
    }, 300); // velocidad de escritura en milisegundos
});

document.addEventListener('DOMContentLoaded', function () {
    const texto = "2024";
    let i = 0;
    
    const intervalo = setInterval(function () {
        document.getElementById('year').textContent += texto[i];
        i++;
        
        if (i > texto.length - 1) {
            clearInterval(intervalo);
        }
    }, 800);
    
   // velocidad de escritura en milisegundos
});