import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbRoutingModule } from './db-routing.module';
import { Dbrt01Component } from './dbrt01/dbrt01.component';
import { LazyTranslationService } from '@app/core/services/lazy-translation.service';
import { SharedModule } from '@app/shared/shared.module';
import { Dbrt01DetailComponent } from './dbrt01/dbrt01-detail/dbrt01-detail.component';
import { Dbrt02Component } from './dbrt02/dbrt02.component';
import { Dbrt02DetailComponent } from './dbrt02/dbrt02-detail/dbrt02-detail.component';
import { Dbrt03Component } from './dbrt03/dbrt03.component';

import { Dbrt04Component } from './dbrt04/dbrt04.component';
import { Dbrt04DetailComponent } from './dbrt04/dbrt04-detail/dbrt04-detail.component';
import { Dbrt04DistrictComponent } from './dbrt04/dbrt04-district/dbrt04-district.component';
import { Dbrt04DistrictDetailComponent } from './dbrt04/dbrt04-district/dbrt04-district-detail/dbrt04-district-detail.component';
import { Dbrt04SubdistrictsComponent } from './dbrt04/dbrt04-subdistricts/dbrt04-subdistricts.component';
import { Dbrt04SubdistrictsDetailComponent } from './dbrt04/dbrt04-subdistricts/dbrt04-subdistricts-detail/dbrt04-subdistricts-detail.component';
import { Dbrt03DetailComponent } from './dbrt03/dbrt03-detail/dbrt03-detail.component';


@NgModule({
  declarations: [
    Dbrt01Component,
    Dbrt01DetailComponent,
    Dbrt02Component,
    Dbrt02DetailComponent,
    Dbrt03Component,
    Dbrt04Component,
    Dbrt04DetailComponent,
    Dbrt04DistrictComponent,
    Dbrt04DistrictDetailComponent,
    Dbrt04SubdistrictsComponent,
    Dbrt04SubdistrictsDetailComponent,
    Dbrt03DetailComponent,
  ],
  imports: [
    CommonModule,
    DbRoutingModule,
    SharedModule
  ]
})
export class DbModule {
  constructor(private lazy: LazyTranslationService) {
    lazy.add('db');
  }
}
