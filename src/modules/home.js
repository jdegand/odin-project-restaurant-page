function render() {

  const home = document.createElement("div");
  home.classList.add("tab")

  home.innerHTML = `
  <div class="text-center">
    <h1>Shakespeare and Company Cafe</h1>
    <ul class="nav">
      <li>HOME</li>
      <li>MENU</li>
      <li>CONTACT</li>
    </ul>
    <h2>Cities: Philadelphia and New York</h2>
    <img src="./images/tabitha-turner-k48c--P5MnQ-unsplash.jpg" height="600px" width="600px">
    <div>Photo by <a href="https://unsplash.com/@tabithabrooke?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">tabitha turner</a> on <a href="https://unsplash.com/s/photos/shakespeare?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></div>
</div>
<br>
<div class="description">
<p>Found  picture on Unsplash looking around for inspiration.  Went to companies' real website and the cafe link just returns the homepage. The site, <a href="https://shop.shakeandco.com/">Shakespeare and Company</a> , is centered around its book business.
With Covid, I'd wager that the cafe is probably in deep trouble.
</p>
</div>`;

    return home;
};

export default render;
