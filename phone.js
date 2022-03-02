const allPhones = () => {
    document.getElementById('phone-details').innerHTML = '';
    const searchField = document.getElementById('search-phone');
    const searchPhone = searchField.value;
    // clear data
    searchField.value = '';
    // clear phone detail
    // phoneDetails.innerHTML = '';
    if(searchPhone == ''){
      alert('Please inter a phone name');
    }
    else{
      const url = `https://openapi.programming-hero.com/api/phones?search=${searchPhone}`;
      // load data
      
      fetch(url)
        .then(response => response.json())
        .then(data => showMobileDetails(data.data));
    }
    
};

const showMobileDetails = mobiles => {
    // console.log(mobiles);
    const searchMobile = document.getElementById('search-mobile');
    searchMobile.textContent = '';
    if (!mobiles[0]){
      document.getElementById('hide2').style.display = 'block'
    }
    else{
      document.getElementById('hide2').style.display = 'none'
      mobiles.slice(0,20).forEach(mobile => {
        console.log(mobile);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100 w-100 p-2">
            <img src="${mobile.image}" class="card-img-top mx-auto p-3 w-75" alt="...">
            <div class="card-body w-100 p-3 mb-2">
              <h5 class="card-title text-center">Phone Name: ${mobile.phone_name}</h5>
              <h5 class="text-center">Phone Brand: ${mobile.brand}</h5>
              <div class="d-grid gap-2 col-6 mx-auto">
                <button onclick="details('${mobile.slug}')" class="btn btn-primary" type="button">Details</button>
              </div>
            </div>
          </div>
        `;
        searchMobile.appendChild(div);
    })
  }   
};

const details = (id) => {
  const url = `https://openapi.programming-hero.com/api/phone/${id} `;
  console.log(url);
  fetch(url)
    .then(response => response.json())
    .then(data => setDetails(data.data));
}

const setDetails = (info) => {
  console.log(info);
  const phoneDetails = document.getElementById('phone-details');
  phoneDetails.innerHTML = '';
  const div = document.createElement('div');
  div.classList.add('card');
  div.innerHTML = `
  <img src="${info.image}" class="card-img-top p-3 w-75 mx-auto" alt="...">
  <div class="p-3 mb-2 w-100">
    <h5 class="card-title">Name: ${info.name}</h5>
    
    <h5>Brand: ${info.brand}</h5>
    <h5><b>Release Date</b></h5>
    <h6>${info.releaseDate ? info.releaseDate : 'No-release date found' }</h6>
    <h5><b>Main Features</b></h5>
    <h6>Chip Set: ${info.mainFeatures.chipSet}</h6>
    <h6>Display Size: ${info.mainFeatures.displaySize}</h6>
    <h6>Memory: ${info.mainFeatures.memory}</h6>
    <h6>Storage: ${info.mainFeatures.storage}</h6>
    <h6>Sensor: ${info.mainFeatures.sensors}</h6>
    <h5><b>Others</b></h5>
    <h6>WLAN: ${info.others ? info.others.WLAN : 'No WLAN found'}</h6> 
    <h6>Bluetooth: ${info.others ? info.others.Bluetooth :'No'}</h6>
    <h6>GPS: ${info.others ? info.others.GPS : 'No'}</h6>
    <h6>NFC: ${info.others ? info.others.NFC  :'No'}</h6>
    <h6>Radio: ${info.others ?info.others.Radio : 'No'}</h6> 
  </div>
  `;
  phoneDetails.appendChild(div);

}