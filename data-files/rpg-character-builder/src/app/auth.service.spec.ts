import { TestBed } from '@angular/core/testing';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

describe('AuthService', () => {
  let service: AuthService;
  let cookieServiceSpy: jasmine.SpyObj<CookieService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(() => {
    cookieServiceSpy = jasmine.createSpyObj('CookieService', ['set', 'deleteAll']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: CookieService, useValue: cookieServiceSpy },
        { provide: Router, useValue: routerSpy }
      ]
    });

    service = TestBed.inject(AuthService);
});

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set cookie and authState to true on successful signin', () => {
    const result = service.signin('knkelly725@gmail.com', 'BUwebdev123');
    expect(result).toBeTrue();

    expect(service.getAuthState().subscribe(state => expect(state).toBeTrue()));

    expect(cookieServiceSpy.set.calls.count()).toBe(1);
  });

  it('should not set cookie and authState to true on unsuccessful signin', () => {
    const result = service.signin('kmkelly725@gmail.com', 'BUwebdev321');
    expect(result).toBeFalse();

    expect(service.getAuthState().subscribe(state => expect(state).toBeFalse()));

    expect(cookieServiceSpy.set.calls.count()).toBe(0);
  });
});
