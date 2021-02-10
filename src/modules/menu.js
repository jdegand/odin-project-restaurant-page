function menu() {

  const menu = document.createElement("div");
  menu.classList.add("tab")

  menu.innerHTML = `
  <div class="text-center">
    <h1>Shakespeare and Company Cafe</h1>
    <ul class="nav">
      <li>HOME</li>
      <li>MENU</li>
      <li>CONTACT</li>
    </ul>
    <h2>Menu Items</h2>
    <div class="menu-item-container">
    <img src="./images/nikldn-qp7WA8AV2x0-unsplash.jpg" alt="pancakes">
    <div class="item">
      <h3>Pancakes <span>$3.99 - $6.99</span></h3>
      <p>Short stack or piled high.  Pancakes come with blueberries or bananas or both.</p>
      <span>Photo by <a href="https://unsplash.com/@nikldn?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">nikldn</a> on <a href="https://unsplash.com/@nikldn?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
    </div>
  </div>
  <br>
  <div class="menu-item-container">
  <img src="./images/christine-siracusa-bypcCMcIoVE-unsplash.jpg" alt="bagel">
  <div class="item">
    <h3>Bagel <span>$2.99 - $7.99</span></h3>
    <p>Whether you want cream cheese or not, our bagels can paired with fish, lunch meat or lox. </p>
    <span>Photo by <a href="https://unsplash.com/@christine_siracusa?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Christine Siracusa</a> on <a href="https://unsplash.com/@christine_siracusa?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
  </div>
</div>
<br>
<div class="menu-item-container">
<img src="./images/nathan-dumlao-Ax_jEc1Gs1k-unsplash.jpg" alt="omelet">
<div class="item">
  <h3>Omelet <span>$4.99</span></h3>
  <p>Omelet wrap. Compact and packed with a day's worth of energy. You won't snack during work day.</p>
  <span>Photo by <a href="https://unsplash.com/@nate_dumlao?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Nathan Dumlao</a> on <a href="https://unsplash.com/s/photos/omelette?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
</div>
</div>
<br>
<div class="menu-item-container">
<img src="./images/joseph-gonzalez-6WaevlPxFdw-unsplash.jpg" alt="cupcake">
  <div class="item">
    <h3>Cupcake <span>$2.99</span></h3>
    <p>Get a sugar high with our fresh-baked cupcakes.  Perfect with coffee and as a desert.</p>
    <span>Photo by <a href="https://unsplash.com/@miracletwentyone?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Joseph Gonzalez</a> on <a href="https://unsplash.com/@miracletwentyone?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
  </div>
</div>
</div>`;

    return menu;
};

export default menu;
