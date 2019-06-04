let team;
fetch('./js/portfolio.json')
.then(function (res) {
    return res.json();
})
.then(function (data) {
    console.log(data);
    let output = `
    <section id="portfolio"  class="section-bg" >
      <div class="container">

        <header class="section-header">
          <h3 class="section-title">Our Portfolio</h3>
        </header>

        <div class="row">
          <div class="col-lg-12">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div class="row portfolio-container">
    `;

    data.forEach(function (p) {
        output += `
        <div class="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp">
            <div class="portfolio-wrap">
              <figure>
                <img src="img/portfolio/${p.pic}" class="img-fluid" alt="">
                <a href="img/portfolio/${p.pic}" data-lightbox="portfolio" data-title="App 1" class="link-preview" title="Preview"><i class="ion ion-eye"></i></a>
                <a href="#" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
              </figure>

              <div class="portfolio-info">
                <h4><a href="#">${p.name}</a></h4>
                <p>${p.category}</p>
              </div>
            </div>
          </div>
     `;
    });
    output +=`
    </div>

     </div>
    `
    document.getElementById('portfolio').innerHTML = output;
})
.catch(function (err) {
    console.log(err);
});