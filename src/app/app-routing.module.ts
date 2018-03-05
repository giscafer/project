/**
 * Created by giscafer on 2017/5/13.
 */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjectItemComponent} from "./project-item/project-item.component";

const appRoutes: Routes = [
  {
    path: '',
    component: ProjectItemComponent,
    pathMatch: 'full'
  },
  //  {
  //   path: 'all',
  //   component: ProjectItemComponent,
  // }, {
  //   path: 'vue',
  //   component: ProjectItemComponent,
  // }, {
  //   path: 'angular',
  //   component: ProjectItemComponent,
  // }, {
  //   path: 'react',
  //   component: ProjectItemComponent,
  // }, {
  //   path: 'nodejs',
  //   component: ProjectItemComponent,
  // }, {
  //   path: 'app',
  //   component: ProjectItemComponent,
  // }, {
  //   path: 'other',
  //   component: ProjectItemComponent,
  // },
  {
    path: '**', redirectTo: ""
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRouteModule {
}
