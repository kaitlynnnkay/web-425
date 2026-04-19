import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCharacterComponent } from './create-character.component';

describe('CreateCharacterComponent', () => {
  let component: CreateCharacterComponent;
  let fixture: ComponentFixture<CreateCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCharacterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate a random order ID between 1 and 1000 with no decimal places', () => {
        // Set required fields so test can run
        component.name = 'Mrs. Test';
        component.selectedGender = 'Female';
        component.selectedClass= 'Mage';

        component.addToCharacterGroup(); // This will trigger the generation of a new character ID

        const addedCharacter = component.characterGroup.characters[0];

        expect(addedCharacter.id).toBeGreaterThan(0);
        expect(addedCharacter.id).toBeLessThanOrEqual(1000);
        expect(Number.isInteger(addedCharacter.id)).toBe(true);
      });

  it('should add a character with the correct customization', () => {
    component.name = 'Mrs. Test';
    component.selectedGender = 'Female';
    component.selectedClass= 'Mage';
    component.addToCharacterGroup();

    const addedCharacter = component.characterGroup.characters[0];

    expect(addedCharacter.name).toBe('Mrs. Test');
    expect(addedCharacter.gender).toBe('Female');
    expect(addedCharacter.class).toBe('Mage');
  })
});
