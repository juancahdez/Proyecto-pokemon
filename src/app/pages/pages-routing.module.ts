import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PlayComponent } from './play/play.component';
const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
   {
    path: 'play',
    component: PlayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
