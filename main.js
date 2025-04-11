// Функция для загрузки новостей с API
async function loadNews() {
    try {
      const response = await fetch('/api/news');
      const newsList = await response.json();
      
      const newsContainer = document.getElementById("news-list");
      
      // Очищаем старые новости перед добавлением новых
      newsContainer.innerHTML = '';
  
      // Добавляем новости на страницу
      newsList.forEach(news => {
        const newsItem = document.createElement("li");
        newsItem.classList.add("news-item");
  
        const title = document.createElement("h3");
        title.textContent = news.title;
  
        const description = document.createElement("p");
        description.textContent = news.description;
  
        const link = document.createElement("a");
        link.href = news.link;
        link.textContent = "Читать дальше";
  
        newsItem.appendChild(title);
        newsItem.appendChild(description);
        newsItem.appendChild(link);
  
        newsContainer.appendChild(newsItem);
      });
    } catch (error) {
      console.error("Ошибка при загрузке новостей:", error);
    }
  }
  
  // Загружаем новости при загрузке страницы
  loadNews();
  