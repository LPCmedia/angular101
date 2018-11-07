import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Route } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil, map, filter, mergeMap, tap } from 'rxjs/operators';

@Component({
  selector: 'll-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'slides';
  nextRoute: string;
  prevRoute = [''];

  componentDestroyed$: Subject<void> = new Subject();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.router.events.pipe(
      takeUntil(this.componentDestroyed$),
      filter((event) => event instanceof NavigationEnd),
      tap(({urlAfterRedirects}: NavigationEnd) => {
        console.log(urlAfterRedirects);
      }),
      map(() => this.activatedRoute),
      map((route) => {
          while (route.firstChild) {
              route = route.firstChild;
          }
          return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data),

    ).subscribe((rd) => {
      this.title = rd.title;
      this.nextRoute = rd.nextRoute;
    })
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }

  handleNextRoute(): void {
    if (this.nextRoute) {
      this.prevRoute.push(this.nextRoute);
      this.router.navigate([this.nextRoute]);
    }
  }

  handlePreviousRoute(): void {
    if (this.prevRoute.length > 0) {
      const prev = this.prevRoute.pop();
      this.router.navigate([prev]);
    }
  }

  gotoStart(): void {
    this.router.navigate(['']);
  }
}
