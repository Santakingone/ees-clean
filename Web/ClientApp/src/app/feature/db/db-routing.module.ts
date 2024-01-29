import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivate } from '@app/core/guard/core.guard';
import { Dbrt01DetailComponent } from './dbrt01/dbrt01-detail/dbrt01-detail.component';
import { Dbrt01Component } from './dbrt01/dbrt01.component';
import { Dbrt04DetailComponent } from './dbrt04/dbrt04-detail/dbrt04-detail.component';
import { detail, statuses } from './dbrt01/dbrt01.resolver';
import { Dbrt04Component} from './dbrt04/dbrt04.component';
import { provinces , districts, master } from './dbrt04/dbrt04.resolver';
import { dbrt04Detail ,dbrt04DistrictDetail } from './dbrt04/dbrt04.resolver';
import { Dbrt04DistrictComponent } from './dbrt04/dbrt04-district/dbrt04-district.component';
import { Dbrt04DistrictDetailComponent } from './dbrt04/dbrt04-district/dbrt04-district-detail/dbrt04-district-detail.component';

const routes: Routes = [
  { path: 'dbrt01', component: Dbrt01Component, title: 'Status', resolve: { statuses }, data: { code: 'dbrt01' } },
  { path: 'dbrt01/detail', component: Dbrt01DetailComponent, title: 'Status', resolve: { detail }, canDeactivate: [CanDeactivate], data: { code: 'dbrt01' } },
  { path: 'dbrt04', component: Dbrt04Component, title: 'Province', resolve: { provinces }, data: { code: 'dbrt04' }},
  { path: 'dbrt04/detail', component: Dbrt04DetailComponent, title: 'Province', resolve: { dbrt04Detail }, canDeactivate: [CanDeactivate], data: { code: 'dbrt04' } },
  { path: 'dbrt04/dbrt04-district', component: Dbrt04DistrictComponent, title: 'District', resolve: { districts , master}, data: { code: 'dbrt04' }},
  { path: 'dbrt04/dbrt04-district/dbrt04-district-detail', component: Dbrt04DistrictDetailComponent, title: 'District', resolve: { dbrt04DistrictDetail  , master}, canDeactivate: [CanDeactivate], data: { code: 'dbrt04' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DbRoutingModule { }
