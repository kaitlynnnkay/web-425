import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes, Router } from '@angular/router';
import { PlayersComponent } from './players/players.component';

describe('AppComponent (Standalone)', () => {
  beforeEach(async () => {
    const activatedRouteStub = {
      snapshot: {
        paramMap: {
          get: () => 'staticValue',
        },
      },
      queryParams: of({}),
    };

    const routes: Routes = [
      { path: 'players', component: PlayersComponent },
    ]

    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub },
      ],
  }).compileComponents();
});

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // Hands on 3.1 Test
  it('should have correct route for Players Component', () => {
    const router = TestBed.inject(Router);
    const route = router.config.find(r => r.path === 'players');
    expect(route).toBeDefined();
    if (route) {
      expect(route.component).toBe(PlayersComponent);
    }
  });
});
