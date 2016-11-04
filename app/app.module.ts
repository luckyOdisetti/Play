import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component'; 
import { SearchComponent} from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
import { SpotifyService } from './services/spotify.service';
import { routing } from './app.routing';
import { HttpModule } from '@angular/http';
 
@NgModule({
  imports:      [ BrowserModule, FormsModule, routing, HttpModule ],
  declarations: [ AppComponent,
                  NavbarComponent,
                  SearchComponent,
                  AboutComponent ],
  providers: [SpotifyService],                
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
