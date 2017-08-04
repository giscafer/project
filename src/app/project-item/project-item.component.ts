import { Component, OnInit, Input } from '@angular/core';
import { PROJECTS } from "../../mock-data/project-data";
import { Router } from "@angular/router";

@Component({
  selector: 'project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {

  @Input()
  projects: any[] = [];

  constructor(private router: Router) {
  }

  ngOnInit() {

  }

}
