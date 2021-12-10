import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { PagesRoutingModule } from './pages-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { PlayComponent } from './play/play.component';


@NgModule({
  declarations: [
    InicioComponent,
    PageErrorComponent,
    PlayComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule
  ]
})
export class PagesModule { }
