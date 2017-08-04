import { Component } from "@angular/core";
import { PROJECTS } from "mock-data/project-data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  projects: any[] = PROJECTS;

  constructor() { }


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
