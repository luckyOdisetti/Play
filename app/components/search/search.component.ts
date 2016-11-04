import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
    moduleId: module.id,
    selector: 'search',
    templateUrl: 'search.component.html'
})
export class SearchComponent {
    private searchString: string;
    constructor(private spotifyService: SpotifyService){}
    searchMusic(){
        if(!!this.searchString){
            this.spotifyService.searchMusic(this.searchString)
                .subscribe(res => console.log(res));
        }
        

    }
 }
