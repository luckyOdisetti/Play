import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Injectable()
export class SpotifyService{

    private searchUrl: string;
    private artistUrl: string;
    private albumUrl: string;
    private songsUrl: string;

    constructor(private _http: Http){}

    searchMusic(str: string, type='artist'){
        this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&type='+type+'&market=US';
        return this._http.get(this.searchUrl)
                .map( res => res.json());        
    }

    getArtist(id: string){
        this.artistUrl = 'https://api.spotify.com/v1/artists/'+id;
        return this._http.get(this.artistUrl)
                .map(res => res.json())
    }

    getAlbums(artistId: string){
        this.albumUrl = 'https://api.spotify.com/v1/artists/'+artistId+'/albums';
        return this._http.get(this.albumUrl)
                .map(res => res.json());
    }

    getAlbum(albumId: string){
        this.songsUrl = 'https://api.spotify.com/v1/albums/'+albumId;
        return this._http.get(this.songsUrl)
                .map(res => res.json());
    }

}