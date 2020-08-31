import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouterLinkPage } from './router-link.page';

const routes: Routes = [
  {
    path: '',
    component: RouterLinkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RouterLinkPageRoutingModule {}
