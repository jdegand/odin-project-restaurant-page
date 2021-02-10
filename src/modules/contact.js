function contact() {

  const contact = document.createElement("div");
  contact.classList.add("tab")

  contact.innerHTML = `
  <div class="text-center">
    <h1>Shakespeare and Company Cafe</h1>
    <ul class="nav">
      <li>HOME</li>
      <li>MENU</li>
      <li>CONTACT</li>
    </ul>
    <h2>3 Locations - 2 Cities</h2>
    <div class="new-york">
    <h3>New York, New York</h3>
    <div class="address">939 Lexington Ave</div>
    <div class="phone-number">(212) 772 - 3400</div>
    <br>
    <div class="hours">
        <span>Mon - Thurs: </span>8am - 5pm<br><span> Fri - Sun: </span>8am - 6pm
    </div>
    <br>
    <hr>
    <br>
    <div class="address">2020 Broadway</div>
    <div class="phone-number">(212) 738 - 0001</div>
    <br>
    <div class="hours">
        <span>Mon - Thurs: </span>7am - 6pm<br><span> Fri - Sun: </span>7am - 7pm
    </div>
    </div>
    <br>
    <hr>
    <br>
    <div class="philly">
    <h3>Philadelphia, PA</h3>
    <div class="address">1632 Walnut Street</div>
    <div class="phone-number">(215) 486 - 2106</div>
    <br>
    <div class="hours">
        <span>Mon - Thurs: </span>8am - 5pm<br><span> Fri - Sun: </span>8am - 6pm
    </div>
    </div>
    <br>
    <hr>
    <br>
    </div>`;

    return contact;
};

export default contact;
