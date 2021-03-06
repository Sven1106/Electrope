import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { IGame } from '../shared/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})

export class GameComponent implements OnInit, AfterViewInit {
  @Input() game: IGame;
  $width: Number;
  isReady: Boolean = true;
  isDownloading: Boolean = false;
  isCompleted: Boolean = false;
  percentage: Number = 0;
  i = 1; //  set your counter to 1
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

 }

getGame(event: MouseEvent, game: IGame) {

  if (this.isReady) {
    this.downloadGame(event, game);
  } else {
    if (this.isCompleted) {
      this.installGame(event, game);
    }
  }

}

 downloadGame(event: MouseEvent, game: IGame) {
   const $this = event.currentTarget;
   this.isReady = false;
   console.log('Downloading ' + game.title);
    $($this).addClass('active');
    $($this).closest('.game-card').addClass('game-card--active');
    $($this).find('.progress-wrapper').addClass('active').clearQueue();
    this.myLoop($this);
  }


  myLoop (target) {
    //  create a loop function

      //  call a 3s setTimeout when the loop is called
      if (this.i <= 100) {
        this.i++; //  increment the counter
        $(target).find('.progress-wrapper').css({
          '--sPercentage': '"' + this.i + '%"',
          '--iPercentage': this.i + ''
        });

        this.myLoop(target);
      } else {

        $(target).addClass('finished').clearQueue();
        $(target).removeClass('active');
        $(target).find('.progress__text').addClass('completed').clearQueue();
        this.isCompleted = true;
      }

  }
  installGame(event: MouseEvent, game: IGame) {
     console.log('Installing ' + game.title);
    // alert(`You have started installing ${game.title}`);
  }
}
