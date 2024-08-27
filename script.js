function calculateGroupAverage(groupId) {
    // Obtener el grupo de preguntas
    const group = document.getElementById(groupId);
    
    // Obtener todos los select dentro del grupo
    const selects = group.querySelectorAll('select');
    
    let sum = 0;
    let count = 0;

    selects.forEach(select => {
        const value = parseInt(select.value);
        if (!isNaN(value)) {
            sum += value;
            count++;
        }
    });

    // Verificar si se han llenado todas las preguntas
    const totalQuestions = group.querySelectorAll('.question').length; // Número de preguntas en el grupo
    if (count < totalQuestions) {
        alert('Por favor, selecciona una opción para cada pregunta en este formulario.');
        return;
    }

    // Calcular el promedio
    const average = sum / count;

    // Crear o actualizar un gráfico de torta usando Chart.js
    const ctx = group.querySelector('canvas').getContext('2d');
    const chartId = 'myPieChart' + groupId.charAt(groupId.length - 1);

    // Verificar si ya existe un gráfico y destruirlo antes de crear uno nuevo
    if (window[chartId]) {
        window[chartId].destroy();
    }

    window[chartId] = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Promedio', 'Resto'],
            datasets: [{
                label: 'Resultados',
                data: [average, 5 - average], // Asumiendo que el valor máximo es 5
                backgroundColor: ['#007bff', '#e0e0e0']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: `Promedio ${average.toFixed(2)}`
                }
            }
        }
    });
}
function calculateFinalAverage() {
    let totalSum = 0;
    let groupCount = 6; // Asumiendo que tienes 6 grupos

    for (let i = 1; i <= groupCount; i++) {
        const chartId = 'myPieChart' + i;
        if (window[chartId]) {
            const average = window[chartId].data.datasets[0].data[0]; // Obtén el promedio del gráfico
            totalSum += average;
        }
    }

    const finalAverage = totalSum / groupCount;

    // Obtener el contexto del canvas donde se dibujará el gráfico final
    const ctx = document.getElementById('finalChart').getContext('2d');

    // Verificar si existe un gráfico previo y destruirlo si es necesario
    if (window.finalChart && typeof window.finalChart.destroy === 'function') {
        window.finalChart.destroy();
    }

    // Crear un nuevo gráfico de torta para mostrar el promedio final
    window.finalChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Promedio Final', 'Resto'],
            datasets: [{
                label: 'Resultados Finales',
                data: [finalAverage, 5 - finalAverage], // Asumiendo que el valor máximo es 5
                backgroundColor: ['#28a745', '#e0e0e0']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: `Promedio Final ${finalAverage.toFixed(2)}`
                }
            }
        }
    });
}
