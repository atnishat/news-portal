const allCategories = async () =>{
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url)
    const data = await res.json()
    displayCategories(data.data.news_category);
}


const displayCategories = linksItem =>{
  // console.log(linksItem);
  const newDivField = document.getElementById('all-categories');
  linksItem.forEach(link => {
    const creatediv = document.createElement('ul');
    creatediv.classList.add('navbar-nav');
    creatediv.innerHTML = `

    <li class="nav-item" id="full-news" onclick="somefunc('categoryId')">
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
        <img src="${allNewses.thumbnail_url}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title mt-3">${allNewses.title}</h5>
          <p class="card-text">${allNewses.details}</p>
          <div class="d-flex">
          <div>
          <img src="${allNewses.author.img}" class="img-fluid rounded-start" style="width: 50px; height:50px;">
         <p class="card-text">${allNewses.author.name}</p>
         </div>
         <div class="rating">
         <h5> view : ${allNewses.total_view}</h5>
         <p><i class="arrow right"></i></p>
         </div>
         </div>
        </div>
      </div>
        `;
        newsItem.appendChild(createNewsDiv);

        
    } )
}











showallNews();












allCategories();



// {"status":true,"data":
// [
//   {"_id":"0282e0e58a5c404fbd15261f11c2ab6a",
// "others_info":
// {"is_todays_pick":false,"is_trending":true},
// "category_id":"01","rating":{"number":4.5,"badge":"Excellent"},
// "total_view":488,
// "title":"Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet",
// "author":{"name":"Jimmy Dane","published_date":"2022-08-24 17:27:34",
// "img":"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-