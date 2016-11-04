import { Component } from '@angular/core';
// import { SpotifyService } from './services/spotify.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    // providers: [SpotifyService], Instead of injecting spotify service here i am injecting at app.module so service is available in all module
    templateUrl: 'app.component.html' 
})
export class AppComponent { }
