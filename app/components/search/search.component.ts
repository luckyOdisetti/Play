import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../models/artist.model';

@Component({
    moduleId: module.id,
    selector: 'search',
    templateUrl: 'search.component.html'
})
export class SearchComponent {

    private searchString: string;
    private searchRes: Artist[];

    constructor(private spotifyService: SpotifyService){}
    
    searchMusic(){
        if(!!this.searchString){
            this.spotifyService.searchMusic(this.searchString)
                .subscribe(res => this.searchRes = res.artists.items )
        }     
    }
 }
