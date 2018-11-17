import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CocheCatalogComponent } from './coche-catalog/coche-catalog.component';
import { JugueteCatalogComponent } from './juguete-catalog/juguete-catalog.component';
import { RoutingManagerComponent } from './routing-manager/routing-manager.component';

const routes: Routes = [
  {path:'catalogo',component:CocheCatalogComponent},
  {path:'juguetes',component:JugueteCatalogComponent},
  {path:'',component:RoutingManagerComponent},
  {path:'**',redirectTo:'index'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
