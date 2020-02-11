import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  document: Document;

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    public titleService: Title
  ) {}

  ngOnInit(): void {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`);
    document.documentElement.style.setProperty('--vw', `${window.innerWidth}px`);
    window.addEventListener('resize', () => {
        document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`);
        document.documentElement.style.setProperty('--vw', `${window.innerWidth}px`);
    });
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute;
          // find first route with a title set (if any)
          while (!this.getTitle(route) && route.firstChild) {
            route = route.firstChild;
          }

          return route;
        }),
        filter(route => route.outlet === 'primary'),
        map(route => this.getTitle(route)),
        filter((title): title is string => title !== undefined)
      )
      .subscribe(title => {
        this.titleService.setTitle(title);
      });
  }

  getTitle(route: ActivatedRoute): string | undefined {
    const routeData = route.snapshot.data;
    if (routeData.title) {
      return routeData.title;
    }

    return undefined;
  }
}
