import { Location, PlatformLocation } from '@angular/common';
import { Injectable } from '@angular/core';

import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { ScrollService } from './scroll.service';

@Injectable()
export class LocationService {

    readonly urlSubject = new ReplaySubject<string>(1);
    currentUrl = this.urlSubject
        .pipe(map(url => this.stripSlashes(url)));

    currentPath = this.currentUrl.pipe(
        map(url => (url.match(/[^?#]*/) || [])[0])  // strip query and hash
    );

    private readonly urlParser = document.createElement('a');

    constructor(
        readonly location: Location,
        readonly scrollService: ScrollService,
        readonly platformLocation: PlatformLocation
        ) {

        this.urlSubject.next(location.path(true));

        this.location.subscribe(state =>
            // tslint:disable-next-line: no-void-expression
            this.urlSubject.next(state.url || ''));

    }

    // TODO: ignore if url-without-hash-or-search matches current location?
    // tslint:disable-next-line: no-null-undefined-union
    go(url: string | null | undefined): any {
        if (!url) { return; }
        // tslint:disable-next-line: no-parameter-reassignment
        url = this.stripSlashes(url);
        // tslint:disable-next-line: no-non-null-assertion
        if (/^http/.test(url!)) {
            // Has http protocol so leave the site
            // tslint:disable-next-line: no-non-null-assertion
            this.goExternal(url!);
        } else {
            // tslint:disable-next-line: no-non-null-assertion
            this.location.go(url!);
            // tslint:disable-next-line: no-non-null-assertion
            this.urlSubject.next(url!);
        }
    }

    goExternal(url: string): any {
        window.location.assign(url);
    }

    replace(url: string): any {
        window.location.replace(url);
    }

    search(): any {
        const search: { [index: string]: string | undefined; } = {};
        const path = this.location.path();
        const q = path.indexOf('?');
        if (q > -1) {
            try {
                const params = path.substr(q + 1)
                    .split('&');
                params.forEach(p => {
                    const pair = p.split('=');
                    if (pair[0]) {
                        search[decodeURIComponent(pair[0])] = pair[1] && decodeURIComponent(pair[1]);
                    }
                });
            // tslint:disable-next-line: no-empty
            } catch (e) { }
        }

        return search;
    }

    setSearch(label: string, params: { [key: string]: string | undefined }): any {
        const search = Object.keys(params)
            .reduce((acc, key) => {
            const value = params[key];

            return (value === undefined) ? acc :
                // tslint:disable-next-line: no-parameter-reassignment
                acc += `${(acc ? '&' : '?')}${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
        }, '');

        this.platformLocation.replaceState({}, label, this.platformLocation.pathname + search);
    }

    /**
     * Handle user's anchor click
     *
     * @param anchor the anchor element clicked
     * @param button Number of the mouse button held down. 0 means left or none
     * @param ctrlKey True if control key held down
     * @param metaKey True if command or window key held down
     * @return false if service navigated with `go()`; true if browser should handle it.
     *
     * Since we are using `LocationService` to navigate between docs, without the browser
     * reloading the page, we must intercept clicks on links.
     * If the link is to a document that we will render, then we navigate using `Location.go()`
     * and tell the browser not to handle the event.
     *
     * In most apps you might do this in a `LinkDirective` attached to anchors but in this app
     * we have a special situation where the `DocViewerComponent` is displaying semi-static
     * content that cannot contain directives. So all the links in that content would not be
     * able to use such a `LinkDirective`. Instead we are adding a click handler to the
     * `AppComponent`, whose element contains all the of the application and so captures all
     * link clicks both inside and outside the `DocViewerComponent`.
     */

    handleAnchorClick(anchor: HTMLAnchorElement, button = 0, ctrlKey = false, metaKey = false): any {

        // Check for modifier keys and non-left-button, which indicate the user wants to control navigation
        if (button !== 0 || ctrlKey || metaKey) {
            return true;
        }

        // If there is a target and it is not `_self` then we take this
        // as a signal that it doesn't want to be intercepted.
        // TODO: should we also allow an explicit `_self` target to opt-out?
        const anchorTarget = anchor.target;
        if (anchorTarget && anchorTarget !== '_self') {
            return true;
        }

        if (anchor.getAttribute('download') !== undefined) {
            return true; // let the download happen
        }

        const { pathname, search, hash } = anchor;
        const relativeUrl = pathname + search + hash;
        this.urlParser.href = relativeUrl;

        // don't navigate if external link or has extension
        if (anchor.href !== this.urlParser.href ||
            !/\/[^/.]*$/.test(pathname)) {
            return true;
        }

        // approved for navigation
        this.go(relativeUrl);

        return false;
    }

    // tslint:disable-next-line: prefer-function-over-method
    private stripSlashes(url: string): any {
        return url.replace(/^\/+/, '')
            .replace(/\/+(\?|#|$)/, '$1');
    }
}
