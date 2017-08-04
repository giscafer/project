import { Component, OnInit, AfterContentInit, Output, EventEmitter } from '@angular/core';
import { NAVS } from "../../mock-data/nav-data";
import { Router } from "@angular/router";

@Component({
  selector: 'banner-head',
  templateUrl: './banner-head.component.html',
  styleUrls: ['./banner-head.component.scss']
})
export class BannerHeadComponent implements OnInit, AfterContentInit {

  @Output()
  navChange = new EventEmitter();

  public navs: any[] = [];
  public navs2: any[] = [];
  public firstNav: any;

  public curRoutePath: string = '/all';

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.navs = NAVS;
    let arr = [].concat(NAVS);
    this.firstNav = arr.shift();
    this.navs2 = arr;
  }

  ngAfterContentInit(): void {
    if (location.pathname === '/') {
      this.curRoutePath = '/all';
    } else {
      this.curRoutePath = location.pathname;
    }
  }

  navClick(path: string) {
    this.curRoutePath = path || '/all';
    this.navChange.emit(path.substr(1));
  }

}
