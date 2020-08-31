import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BackdropPage } from './backdrop.page';

const routes: Routes = [
  {
    path: '',
    component: BackdropPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackdropPageRoutingModule {}
