export interface PlayerList {
  name: string;
  gender: string;
  class: string;
  faction: string;
  startingLocation: string;
  funFact: string;
  avatar: string;
}

import { CommonModule } from "@angular/common";
import { Component } from '@angular/core';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [ CommonModule],
  template: `
    <main>
      <div>
        <h1>Players</h1>
        <h2>Waffle House Faction</h2>
        <p>The Waffle House faction was created out of a creative brainstorming session of the singular application developer. Her pregnant brain was completely devoid of all thoughts, except for her son's love of waffles. Thus, the Waffle House faction was born. She obviously forgot that the application was supposed to be space themed, but she is too far into development to change the faction now (hence the avatars). The Waffle House faction is made up of 10 players, each with their own unique characteristics and fun facts.</p>
        <ul class="players-container">
          @for (item of players; track item) {
          <li class="player-card">
            <div class="player-card-container">
              <h2>{{ item.name }}</h2>
              <img src="{{ item.avatar }}" alt="avatar image for {{ item.name }}" class="player-card-img">
              <p><b>Gender:</b> {{ item.gender }}</p>
              <p><b>Class:</b> {{ item.class }}</p>
              <p><b>Faction:</b> {{ item.faction }}</p>
              <p><b>Location:</b> {{ item.startingLocation }}</p>
              <p><b>Fun Fact:</b> {{ item.funFact }}</p>
            </div>
          </li>
          }
        </ul>
      </div>
    </main>
  `,
  styles: `

    main {
      max-width: 90%;
      margin: 0 auto;
    }

    h2 {
      color: #5FBD56;
    }

    p {
      max-width: 85%;
      margin: 10px auto 20px auto;
    }

    .players-container {
      display: flex;
      flex-wrap: wrap;
      list-style-type: none;
      padding: 0;
      justify-content: center;
    }

    .player-card {
      flex: 0 1 calc(33.333% - 20px);
      margin: 10px;
      background-color: #e5e9e2;
      box-shadow: 5px 20px 20px #0d0314;
      padding: 0px 13px;
      max-width: 45vh;
      border: 2px solid #0d0314;
      border-radius: 20px;
    }

    .player-card-container h2 {
      text-shadow: 2px 1px 1px #133610;
    }

    .player-card-container img {
      max-width: 28vh;
      margin-bottom: 10px;
    }

    .player-card-container p {
      color: #180825;
      margin: 0.5em auto;
    }

    `
})
export class PlayersComponent {
  players: PlayerList[];

  constructor() {
    this.players = [
      {
        "name": "Blueberry",
        "gender": "Male",
        "class": "Warrior",
        "faction": "Waffle House",
        "startingLocation": "Maple Maze",
        "funFact": "Blueberry's favorite waffle flavor is actually strawberry.",
        "avatar": "/assets/blueberry-avatar.png"
      },
      {
        "name": "Strawberry",
        "gender": "Female",
        "class": "Warrior",
        "faction": "Waffle House",
        "startingLocation": "Hashbrown Hills",
        "funFact": "Strawberry identifies as a pacifist.",
        "avatar": "/assets/strawberry-avatar.png"
      },
      {
        "name": "Chocolate Chip",
        "gender": "Female",
        "class": "Warrior",
        "faction": "Waffle House",
        "startingLocation": "Syrup Swamp",
        "funFact": "Chocolate Chip's weapon is made out of hardened chocolate.",
        "avatar": "/assets/chocolatechip-avatar.png"
      },
      {
        "name": "Cinnamon Sugar",
        "gender": "Male",
        "class": "Mage",
        "faction": "Waffle House",
        "startingLocation": "Frittata Fields",
        "funFact": "When a spell is cast, cinnamon sugar falls from the sky.",
        "avatar": "/assets/cinnamonsugar-avatar.png"
      },
      {
        "name": "Pumpkin",
        "gender": "Female",
        "class": "Mage",
        "faction": "Waffle House",
        "startingLocation": "Pancake Palace",
        "funFact": "Pumpkin despises the annual PSL craze.",
        "avatar": "/assets/pumpkin-avatar.png"
      },
      {
        "name": "Homestyle",
        "gender": "Male",
        "class": "Mage",
        "faction": "Waffle House",
        "startingLocation": "Bacon Bazaar",
        "funFact": "Homestyle considers himself the leader of the Waffle House faction.",
        "avatar": "/assets/homestyle-avatar.png"
      },
      {
        "name": "Belgian",
        "gender": "Female",
        "class": "Rogue",
        "faction": "Waffle House",
        "startingLocation": "French Toast Forest",
        "funFact": "Belgian is the only player who has successfully navigated the treacherous and sticky Maple Maze.",
        "avatar": "/assets/belgian-avatar.png"
      },
      {
        "name": "Apple Cinnamon",
        "gender": "Female",
        "class": "Rogue",
        "faction": "Waffle House",
        "startingLocation": "Granola Gorge",
        "funFact": "Apple Cinnamon is eldest of the three Cinnamon waffles, and the heir to their family fortune.",
        "avatar": "/assets/applecinnamon-avatar.png"
      },
      {
        "name": "Banana Nut",
        "gender": "Female",
        "class": "Rogue",
        "faction": "Waffle House",
        "startingLocation": "Toast Tower",
        "funFact": "Banana Nut is the current title holder of Breakfast Planet's annual Breakfast Bowl tournament.",
        "avatar": "/assets/banananut-avatar.png"
      },
      {
        "name": "Cinnamon Roll",
        "gender": "Male",
        "class": "Healer",
        "faction": "Waffle House",
        "startingLocation": "Wafflewood Wellness Clinic",
        "funFact": "Cinnamon Roll actually trained to be a Warrior, but was inspired to explore the art of healing after a tragic burn in the waffle iron.",
        "avatar": "/assets/cinnamonroll-avatar.png"
      },
    ];
  }
}
