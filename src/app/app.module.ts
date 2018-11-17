import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MicomponenteComponent } from './micomponente/micomponente.component';
import { PersonaComponent } from './persona/persona.component';
import { CocheComponent } from './coche/coche.component';
import { CocheCatalogComponent } from './coche-catalog/coche-catalog.component';
import { JugueteComponent } from './juguete/juguete.component';
import { JugueteCatalogComponent } from './juguete-catalog/juguete-catalog.component';
import { RoutingManagerComponent } from './routing-manager/routing-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    MicomponenteComponent,
    PersonaComponent,
    CocheComponent,
    CocheCatalogComponent,
    JugueteComponent,
    JugueteCatalogComponent,
    RoutingManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
