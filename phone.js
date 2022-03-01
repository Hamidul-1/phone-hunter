
const allPhones = () => {
    const searchPhone = document.getElementById('search-phone').value;
    // searchPhone.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchPhone}`;
    fetch(url)
    // console.log(url);
    .then(response => response.json())
    .then(data => showMobileDetails(data.data));
};

const showMobileDetails = mobiles => {
    // console.log(mobiles);
    const searchMobile = document.getElementById('search-mobile');
    mobiles.forEach(mobile => {
        console.log(mobile);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
            <img src="${mobile.image}" class="card-img-top w-50" alt="...">
            <div class="card-body">
              <h5 class="card-title">Phone Name: ${mobile.phone_name}</h5>
              <h5>Phone Brand: ${mobile.brand}</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="all-button">
                <button onclick="details('${mobile.slug}')" class="btn btn-success">Details</button>
            </div>
            </div>
          </div>
        `;
        searchMobile.appendChild(div);
    })
    
};

const details = (id) => {
  const url = `https://openapi.programming-hero.com/api/phone/${id}
  `;
  console.log(url);
  fetch(url)
  .then(response => response.json())
  .then(data => setDetails(data.data));
}

const setDetails = (info) => {
  console.log(info);
  const phoneDetails = document.getElementById('phone-details');
  const div = document.createElement('div');
  div.classList.add('card');
  div.innerHTML = `
  <img src="${info.mainFeatures.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${info.mainFeatures}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  `;
  phoneDetails.appendChild(div);

}