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
        alert('Por favor, selecciona una opción para cada pregunta en este grupo.');
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
                    text: `Promedio ${groupId}: ${average.toFixed(2)}`
                }
            }
        }
    });
}
