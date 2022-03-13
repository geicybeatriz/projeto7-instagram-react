
export default function Navbar(){
    return (
        <header class="navbar">
          <section class="container">
            <article class="logo">
              <ion-icon name="logo-instagram"></ion-icon>
              <div class="partition"></div>
              <img src="assets/img/logo.png" />
            </article>

            <article class="logo-mobile">
              <ion-icon name="logo-instagram"></ion-icon>
            </article>

            <article class="instagram-mobile">
              <img src="assets/img/logo.png" />
            </article>
  
            <article class="search">
              <input type="text" placeholder="Pesquisar" />
            </article>
  
            <article class="icons">
              <ion-icon name="paper-plane-outline"></ion-icon>
              <ion-icon name="compass-outline"></ion-icon>
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="person-outline"></ion-icon>
            </article>

            <article class="icons-mobile">
              <ion-icon name="paper-plane-outline"></ion-icon>
            </article>
          </section>
        </header>
    );
}

