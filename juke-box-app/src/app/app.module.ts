import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaylistComponent } from './component/playlist/playlist.component';
import { SongComponent } from './component/song/song.component';
import { RegisterComponent } from './component/register/register.component';
import {FormsModule} from "@angular/forms";
import { MainMenuComponent } from './component/main-menu/main-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistComponent,
    SongComponent,
    RegisterComponent,
    MainMenuComponent
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
