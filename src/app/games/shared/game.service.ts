import { Injectable } from '@angular/core';
import { IGame } from './game';

@Injectable()
export class GameService {

  constructor() { }
  getGames(): IGame[] {
    return [
      { id: 1,
        title: 'Warcraft III: The Frozen Throne',
        genre: 'Rts',
        description: 'Real-time strategy game in a fantasy setting.',
        imageUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/warkeyigiyyknusmfev2.jpg',
        playerCount: 10,
        isClicked: false
      },
      { id: 2,
        title: 'Left 4 Dead 2',
        genre: 'Fps',
        description: 'Left 4 Dead 2 is a 2-4 player co-op first person shooter that requires tons of cooperation and intense zombie slaughtering in order to survive.There is a variety of enemies, weapons, and objectives to keep things interesting, with co-op that is focused around having fun playing with your friends.',
        imageUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/eckumjvspgvgsap4wmp2.jpg',
        playerCount: 4,
        isClicked: false
      },
      { id: 3,
        title: 'Dota 2',
        genre: 'Rts',
        description: 'Dota 2 is a multiplayer online battle arena video game and the stand-alone sequel to the Defense of the Ancients (DotA) mod. Each match of Dota 2 involves two teams, both containing five players and occupying a fortified stronghold at either end of the map. Victory is achieved by destroying the enemys Ancient, a building that is invulnerable until certain objectives are achieved. Each player controls a "Hero" character and focuses on leveling up, acquiring items and fighting against the other team to achieve victory during each match.',
        imageUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/qcx7vedma0pvf0hzisxc.jpg',
        playerCount: 5,
        isClicked: false
      },
      { id: 4,
        title: 'Rocket League',
        genre: 'Sports',
        description: 'Rocket League is a third-person, physics based soccer game, where players control rocket powered cars in order to hit the ball towards a goal. Basically, a car based soccer/football game.',
        imageUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/nocover_qhhlj6.jpg',
        playerCount: 3,
        isClicked: false
      },
      { id: 5,
        title: 'Team Fortress 2',
        genre: 'Fps',
        description: 'Team Fortress 2 is a multi-platform, first-person shooter, multiplayer game that focuses on team based gameplay, where each player has their own unique role on the team.',
        imageUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/ijp2rheve0eccuhtanli.jpg',
        playerCount: 4,
        isClicked: false
      },
      { id: 6,
        title: 'Supreme Commander: Forged Alliance',
        genre: 'Rts',
        description: 'Supreme Commander is a real time strategy game set in a fictional sci-fi universe.',
        imageUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/x2gbk38zhbhxhs2omgsr.jpg',
        playerCount: 7,
        isClicked: false
      },

    ];
  }
}
