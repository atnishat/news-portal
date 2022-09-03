const allCategories = async () =>{
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url)
    const data = await res.json()
    displayCategories(data.data.news_category);
}


const displayCategories = (linksItem) =>{
  const newDivField = document.getElementById('all-categories');
  // console.log(linksItem);
  linksItem.forEach(link => {
    const creatediv = document.createElement('ul');
    creatediv.classList.add('navbar-nav');
    creatediv.innerHTML = `
    <li class="nav-item" id="full-news" >
    <a class="nav-link active" aria-current="page"  onclick="showallNews('${link.category_id}')">${link.category_name}</a>
  </li> `;
  newDivField.appendChild(creatediv);
  // start loader
  togglerSpinner(true);
});
}


const showallNews = async(category_id) =>{
    const url = ` https://openapi.programming-hero.com/api/news/category/${category_id}`
    const res = await fetch(url)
    const data = await res.json()
    // console.log(data);
    displayAllNews(data.data)

}
const displayAllNews = news =>{
    // console.log(news);
    const newsItem = document.getElementById('show-all-news');
    newsItem.textContent ='';
    news.forEach(allNewses =>{
      // console.log(allNewses);
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
         <button   data-bs-toggle="modal" data-bs-target="#phoneDetailModal" class="bg-primary text-white">Show Details</button>
        </div>
      </div>
        `;
        newsItem.appendChild(createNewsDiv);
       
        // stop loader
        togglerSpinner(false);
    } )
}
// onclick="newDetails('${allNewses.news_id}')"


const togglerSpinner = isLoader =>{
  const loaderSection = document.getElementById('loader');
  if (isLoader ) {
      loaderSection.classList.remove('d-none');
  }
  else{
      loaderSection.classList.add('d-none');
  }
}


const newDetails = async()=> {
  const url = `https://openapi.programming-hero.com/api/news/0282e0e58a5c404fbd15261f11c2ab6a`
  const res = await fetch(url)
  const data = await res.json()
  displayNewsDetails(data.data[0]);

} 
const displayNewsDetails = detailsNews =>{
console.log(detailsNews);  
const displayField = document.getElementById('phoneDetailModalLabel');
displayField.innerText = detailsNews.title;
const fullNewsField = document.getElementById('full-news');
fullNewsField.innerText = detailsNews.rating.number


}












newDetails();


showallNews();
allCategories();



