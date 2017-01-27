import { Component } from '@angular/core';

@Component({
    selector: 'not-found',
    template: `
        <img src="https://secure.static.tumblr.com/adba564a0575cb3ac4af5d28c1654cc5/iennz6v/VQRmww7hh/tumblr_static_tumblr_mdt0v2ocgc1r2i1ka.jpg" />
        <a routerLink="/">Go Home</a>
    `
})
export class PageNotFoundComponent{
    constructor(){

    }
}