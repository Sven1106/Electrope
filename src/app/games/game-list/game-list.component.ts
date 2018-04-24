import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GameService } from '../shared/game.service';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { IGame } from '../shared/game';

// import igdb from 'igdb-api-node';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
  providers: [GameService]
})

export class GameListComponent implements OnInit, AfterViewInit {
  filteredGames: IGame[];
  games: IGame[];
  // $gameList: JQuery | any;
  $width: number;


  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredGames = this.listFilter ? this.performFilter(this.listFilter) : this.games;
  }

  constructor(_gameService: GameService, private elementRef: ElementRef) {
    this.games = _gameService.getGames();
    this.filteredGames = this.games;
    this.listFilter = '';
  }

  performFilter(filterBy: string): IGame[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.games.filter((game: IGame) => game.title.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    // // #region Isotope
    // const fn = this;
    // fn.$gameList = $('.game-list').isotope({
    //   itemSelector: '.game-card-wrapper',
    //   masonry: {
    //     fitWidth: true
    //   }
    // });
    // this.$width = $('.download-btn').outerWidth();
    // // reveal all items after init
    // const $items = fn.$gameList.find('.game-card-wrapper');
    // $items.each(function () {
    //   fn.$gameList.addClass('is-showing-items')
    //     .isotope('revealItemElements', $items);
    // });
    // // #endregion
  }

  clear(event: MouseEvent) {
    // this.games.forEach(element => {
    //   element.isClicked = false;
    // });
    // $('.game-card').removeClass('game-card--active');
    // $('.download').removeClass('active');
    // $('.download-btn').removeClass('active finished');
    // $('.progress-wrapper').removeClass('active');
    // $('.progress__text').removeClass('completed').clearQueue();
    // $('.success').removeClass('active');
    // $('.progress-wrapper').css({ '--sPercentage': '"' + 0 + '%"', '--iPercentage': 0 + '' });
  }
}
