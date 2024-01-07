import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuRoutingModule } from './su-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { LazyTranslationService } from '@app/core/services/lazy-translation.service';
import { Surt01Component } from './surt01/surt01.component';
import { Surt01DetailComponent } from './surt01/surt01-detail/surt01-detail.component';
import { Surt02Component } from './surt02/surt02.component';
import { Surt02DetailComponent } from './surt02/surt02-detail/surt02-detail.component';
import { Surt03Component } from './surt03/surt03.component';
import { Surt03DetailComponent } from './surt03/surt03-detail/surt03-detail.component';
import { Surt04Component } from './surt04/surt04.component';
import { Surt04DetailComponent } from './surt04/surt04-detail/surt04-detail.component';


@NgModule({
  declarations: [
    Surt01Component,
    Surt01DetailComponent,
    Surt02Component,
    Surt02DetailComponent,
    Surt03Component,
    Surt03DetailComponent,
    Surt04Component,
    Surt04DetailComponent,
  ],
  imports: [
    CommonModule,
    SuRoutingModule,
    SharedModule
  ]
})
export class SuModule {
  constructor(private lazy: LazyTranslationService) {
    lazy.add('su');
  }
}