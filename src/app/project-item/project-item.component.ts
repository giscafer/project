import {Component, OnInit} from '@angular/core';
import {PROJECTS} from "../../mock-data/project-data";
import {Router} from "@angular/router";

@Component({
  selector: 'project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {

  projects: any[] = [];

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.projects = PROJECTS;
    let type = this.router.url.substr(1);
    this.changeData(type)
  }

  changeData(type: string) {
    this.projects = this.filterPro(type);
  }

  filterPro(type: string): any[] {
    return PROJECTS.filter(item => {
      return item.type.includes(type);
    })
  }
}
