import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayersComponent } from './players.component';

describe('PlayersComponent', () => {
  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Hands on 3.1 Tests
  it('should correctly display list of characters', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const playersList = compiled.querySelectorAll('.player-card');
    expect(playersList.length).toBe(component.players.length);
  });
});
