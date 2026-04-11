import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div class="home-wrapper">
      <main class="main-content-home">
        <h1>Welcome!</h1>

        <p>Kaitlyn's Space Themed RPG Character Builder combines two important passions: Professor Krasso's love of RPG examples, and Kaitlyn's love of the space genre. Spawned by her recent re-reading and the movie release of “Project Hail Mary,” Kaitlyn chose to unite these passions into a singular RPG web application.</p>

        <p>No matter your character preferences, or where you find joy in RPG character building, Kaitlyn’s Space Themed RPG Character Builder has something for everyone. Are you like Kaitlyn, where you prefer to spend as long as possible creating the character’s aesthetic, all to not end up playing the game? Or are you a die-hard gamer who rushes through the visuals to focus on character strengths and special abilities? Kaitlyn’s Space Themed RPG Character Builder caters to every gamer.</p>

        <p>Need some inspiration? Visit the <a href="#">Character Marketplace</a> where you can peruse other users’ characters. Find a user-created character that speaks to you? Save them to your account to add them to your space force.</p>

        <p>And coming soon… likely more features as this project continues! Forums, in-application games to utilize your characters, story writing features to bring your characters to life without a game, hosted contests to vote on your favorite characters created by fellow users, who knows! The possibilities are endless with Kaitlyn’s Space Themed RPG Character Builder.</p>

        <p>Questions, comments, concerns, or feature requests? <a href="#">Contact Kaitlyn</a> within the next eight calendar weeks before the course ends! Perhaps your feature request will be added, if she has the knowledge to make it come to life!</p>

        <div class="image-grid">
          <figure>
            <img src="/assets/web425-home-image-gameplay.png" alt="image of simulated 8-bit style space video game" class="home-img">
            <figcaption>Example image of potential built-in web application game.</figcaption>
          </figure>

          <figure>
            <img src="/assets/web425-home-image-builder.png" alt="image of simulated space-themed video game character builder" class="home-img">
            <figcaption>Simulated image of potential character builder functionality.</figcaption>
          </figure>
        </div>

        <h2>Ready to Blast Off? <a routerLink="/create-character">Start Creating!</a></h2>
      </main>
    </div>
  `,
  styles: `
    main {
      max-width: 85%;
      margin: 0 auto;
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

    p {
      font-size: 1.1em;
    }

    a {
      color: #5FBD56;
      text-decoration: none;
    }

    a:visited {
      color: #368C2E
    }

    a:hover {
      text-decoration: underline;
    }

    .image-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      justify-items: center;
      margin-top: 20px;
      margin-bottom: 20px;
    }

    .home-img {
      max-width: 40vh;
    }

    figcaption {
      font-family: 'Exo 2', sans-serif;
      font-size: 0.9em;
    }
  `
})
export class HomeComponent {

}
