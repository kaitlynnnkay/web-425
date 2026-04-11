import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="wrapper">
      <header>
        <img src="/assets/web425-header-banner.jpg" alt="website banner for Kaitlyn's Space Themed RPG Character Builder" class="main-banner-img">
      </header>

        <nav class="nav-content">
          <a routerLink="/">Home</a>&nbsp;&nbsp;|&nbsp;&nbsp;
            <a routerLink="/players">Players</a>&nbsp;&nbsp;|&nbsp;&nbsp;
            <a routerLink="/create-character">Create Character</a>&nbsp;&nbsp;|&nbsp;&nbsp;
            <a routerLink="/create-guild">Create Guild</a>&nbsp;&nbsp;|&nbsp;&nbsp;
            <a routerLink="/character-faction">Character Faction</a>&nbsp;&nbsp;|&nbsp;&nbsp;
            <a routerLink="/signin">Sign In</a>
        </nav>

        <main class="main-content">
          <router-outlet/>
        </main>

        <footer class="footer-content">
          <nav class="footer-nav-content">
            <a routerLink="/">Home</a> |
            <a routerLink="/players">Players</a> |
            <a routerLink="/create-character">Create Characters</a> |
            <a routerLink="/create-guild">Create Guild</a> |
            <a routerLink="/character-faction">Character Faction</a> |
            <a routerLink="/signin">Sign In</a>
          </nav>
          <p>&copy; 2026 RPG Character Builder</p>
        </footer>
      </div>
  `, styles: [
    `
    /* Import Google Fonts */
    @import
    url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&family=Nova+Flat&family=Silkscreen:wght@400;700&display=swap');

    body, header, nav, main, footer, ul, li {
      margin: 0;
      padding: 0;
      border: 0;
    }

    .main-banner-img {
      width: 80%;
    }

    .wrapper {
      margin: 0 auto;
      background-color: #2C1340;
      color: #D9DCD6;
      text-align: center;
      min-height: 100vh;
    }

    h1 {
      font-family: 'Nova Flat', sans-serif;
      font-size: 2.2em;
    }

    h2 {
      font-family: 'Silkscreen', san-serif;
    }

    p, nav, li {
      font-family: 'Exo 2', sans-serif;
    }

    .nav-content, .nav-content a {
      color: #5FBD56;
      text-decoration: none;
      font-size: 1.25em;
      margin-top: -60px;
      margin-bottom: 50px;
    }

    .nav-content a:visited {
      color: #368C2E
    }

    .nav-content a:hover, .footer-nav-content a:hover {
      text-decoration: underline;
    }

    .footer-nav-content {
      margin-top: 50px;
    }

    .footer-nav-content a {
       color: #D9DCD6;
       text-decoration: none;
    }

    .footer-nav-content a:visited {
      color: #afb1ae
    }
    `
  ]
})

export class AppComponent {
  title = 'rpg-character-builder';
}
