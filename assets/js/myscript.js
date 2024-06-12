document.addEventListener('DOMContentLoaded', (event) => {
    // Data target da confrontare (formato YYYY-MM-DD)
    const targetDate = '2024-06-16';

    // Ottieni la data corrente
    const currentDate = new Date();
    const currentDateString = currentDate.toISOString().split('T')[0]; // formato YYYY-MM-DD

    // Confronta le date
    if (currentDateString === targetDate) {
        // Se coincidono, nascondi il div
        console.log("date coincidono");
        //document.getElementById('root').style.display = 'none';
        window.location.href = "menu/index.html";
    }
});


