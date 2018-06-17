import { Component, OnInit } from "@angular/core";
import { PROJECTS } from "mock-data/project-data";
import { Jsonp, Http } from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  projects: any[] = [];

  hash: number = new Date().getTime();

  constructor(private http: Http) { }

  ngOnInit(): void {
    this.http.get(`./data/data.json?v=${this.hash}`).subscribe(res => {
      let json = res.json();
      this.projects = json;
    }, err => {
      console.log(err);
    })
  }

  navChange($event) {
    console.log($event);
    this.changeData($event);
  }

  changeData(type: string) {
    this.projects = this.filterPro(type);
  }

  filterPro(type: string): any[] {
    if (!type) {
      return PROJECTS;
    }
    return PROJECTS.filter(item => {
      return item.type.includes(type);
    })
  }
}
