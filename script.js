const cardsContainer = document.getElementById("cards");

async function loadCats() {
    try {
        const response = await fetch('https://cataas.com/api/cats');
        const cats = await response.json();

        const firstFiveCats = cats.slice(0, 5);

        for (let i = 0; i < firstFiveCats.length; i++) {
            const cat = firstFiveCats[i];

            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
            <img src="https://cataas.com/cat/${cat._id}" alt="Котик">
            <div class="card-content">
                <h3>Кот #${i + 1}</h3>
                <p class="tags">Теги: ${cat.tags.length > 0 ? cat.tags.join(', ') : 'нет'}</p>
            </div>
        `;

            cardsContainer.appendChild(card);
        }
    } catch (error) {
        console.error("Ошибка при загрузке котиков:", error);
        cardsContainer.innerHTML = "<p>Не удалось загрузить котиков :(</p>";
    }
}

loadCats();
