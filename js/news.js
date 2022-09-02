const allCategories = async () =>{
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url)
    const data = await res.json()
    displayCategories(data.data.news_category);
}


const displayCategories = linksItem =>{
  console.log(linksItem);
  const newDivField = document.getElementById('all-categories');
  linksItem.forEach(link => {
    const creatediv = document.createElement('ul');
    creatediv.classList.add('navbar-nav');
    creatediv.innerHTML = `

    <li class="nav-item" id="full-news">
    <a class="nav-link active" aria-current="page" href="#">${link.category_name}</a>
  </li>


  `;
  newDivField.appendChild(creatediv);
});
}


const showallNews = async() =>{
    const url = `https://openapi.programming-hero.com/api/news/category/01`
    const res = await fetch(url)
    const data = await res.json()
    displayAllNews(data.data)

}
const displayAllNews = news =>{
    console.log(news);
    const newsItem = document.getElementById('show-all-news');
    news.forEach(allNewses =>{
        const createNewsDiv = document.createElement('div');
        createNewsDiv.classList.add('row');
        createNewsDiv.innerHTML = `
        <div class="col-md-4">
        <img src="" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
        `;
        newsItem.appendChild(createNewsDiv);


    } )
}











showallNews();












allCategories();


