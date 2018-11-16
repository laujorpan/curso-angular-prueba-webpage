import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MicomponenteComponent } from './micomponente/micomponente.component';
import { PersonaComponent } from './persona/persona.component';
import { CocheComponent } from './coche/coche.component';
import { CocheCatalogComponent } from './coche-catalog/coche-catalog.component';

@NgModule({
  declarations: [
    AppComponent,
    MicomponenteComponent,
    PersonaComponent,
    CocheComponent,
    CocheCatalogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
