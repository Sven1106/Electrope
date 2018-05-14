import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { IGame } from '../shared/game';
import * as $ from 'jquery';

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
  myStyles = { '--sPercentage': '"' + this.percentage + '%"', '--iPercentage': + this.percentage + ''};

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {

 }

 getGame(event: MouseEvent, game: IGame) {
   const $this = event.currentTarget;
   this.isReady = false;
   console.log('downloading ' + game.title);
    $($this).addClass('active');
    $($this).closest('.game-card').addClass('game-card--active');
    $($this).find('.progress-wrapper').addClass('active').clearQueue();


    let i = 1; //  set your counter to 1
    function myLoop() {
      //  create a loop function
      setTimeout(function () {
        //  call a 3s setTimeout when the loop is called
        if (i <= 100) {
          i++; //  increment the counter
          $($this).find('.progress-wrapper').css({
            '--sPercentage': '"' + i + '%"',
            '--iPercentage': i + ''
          });
          //  if the counter < 10, call the loop function
          myLoop(); //  ..  again which will trigger another
        } else {

          $($this).addClass('finished').clearQueue();
          $($this).removeClass('active');
          $($this).find('.progress__text').addClass('completed').clearQueue();
          this.isCompleted = true;
          console.log(this.isCompleted );
        }
      }, 30);
    }
    myLoop();
  }

  installGame(event: MouseEvent, game: IGame) {
     console.log('installing ' + game.title);
    // alert(`You have started installing ${game.title}`);
  }
}
