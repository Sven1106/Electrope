import { Component, OnInit, Input } from '@angular/core';
import { IGame } from '../shared/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  @Input() game: IGame;
  // $gameList: JQuery | any;
  constructor() { }

  ngOnInit() {
  }

  downloadGame(event: MouseEvent, game: IGame) {
    // console.log(game);
    // const $this = event.currentTarget;
    // let i = 1; //  set your counter to 1
    // function myLoop() {
    //   //  create a loop function
    //   setTimeout(function () {
    //     //  call a 3s setTimeout when the loop is called
    //     if (i <= 99) {
    //       i++; //  increment the counter
    //       $($this).find('.progress-wrapper').css({
    //         '--sPercentage': '"' + i + '%"',
    //         '--iPercentage': i + ''
    //       });
    //       //  if the counter < 10, call the loop function
    //       myLoop(); //  ..  again which will trigger another
    //     } else {

    //       $($this).addClass('finished').clearQueue();
    //       $($this).removeClass('active');
    //       $($this).find('.progress__text').addClass('completed').clearQueue();
    //     }
    //   }, 30);
    // }

    // $($this).addClass('active');
    // $($this).closest('.game-card').addClass('game-card--active');
    // $($this).find('.progress-wrapper').addClass('active').clearQueue();
    // myLoop();
  }

  installGame(game: IGame) {
    // console.log(game);
    // alert(`You have started installing ${game.title}`);
  }


}
