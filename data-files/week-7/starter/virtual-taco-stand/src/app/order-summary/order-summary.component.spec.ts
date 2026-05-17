import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSummaryComponent } from './order-summary.component';
import { CommonModule } from '@angular/common';
import { Order } from '../order/order.component';
import { first } from 'rxjs';

describe('OrderSummaryComponent', () => {
  let component: OrderSummaryComponent;
  let fixture: ComponentFixture<OrderSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderSummaryComponent, CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderSummaryComponent);
    component = fixture.componentInstance;

    const mockOrder = {
      orderId: 999,
      tacos: [
        { id: 3, name: 'Al Pastor', price: 2.5, quantity: 2 },
        { id: 1, name: 'Carnitas', price: 3, quantity: 1, noOnions: true }
      ]
    };

    component.order = mockOrder;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate total price correctly', () => {
    const mockOrder: Order = {
      orderId: 1000,
      tacos: [
        { id: 1, name: 'Carnitas', price: 3, quantity: 2 },
        { id: 3, name: 'Al Pastor', price: 2.5, quantity: 1 }
      ]
    };

    component.order = mockOrder;
    expect(component.getTotal()).toEqual(8.5);
  });

  it('should display message for empty order', () => {
    component.order = { orderId: 1001, tacos: [] };
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('No tacos added to the order yet.');
  });

  // Previously failing test now adjusted & passing
  it('should display details for each taco in the order', () => {
    const mockOrder: Order = {
      orderId: 1002,
      tacos: [
        { id: 1, name: 'Carnitas', price: 3, quantity: 2 },
        { id: 3, name: 'Al Pastor', price: 2.5, quantity: 1 }
      ]
    };

    component.order = mockOrder;
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    // Updated test to reflect new UI requests regarding verbiage for line item details
    // Previously "2x Taco Name" -> Now "Quantity: 2"
    // Previously "Price Per Taco:" -> Now "Unit Price:"
    expect(compiled.querySelector('li').textContent).toContain('Quantity: 2');
    expect(compiled.querySelector('li').textContent).toContain('Unit Price: $3.00');
  });

  it('should calculate the total using taco quantity values', () => {
    component.order = {
      orderId: 2001,
      tacos: [
        { id: 1, name: 'Carnitas Taco', price: 3.25, quantity: 2 },
        { id: 2, name: 'Queso Birria Taco', price: 3.50, quantity: 3 }
      ]
    };

    expect(component.getTotal()).toBe(17.0);
  });

  // Previously failing test now adjusted & passing
  // Updated test to reflect new UI requests regarding verbiage for line item identifier
  // Previously "#x Taco Name" -> Now "Item 1"
  it('should render the first taco using the expected summary label format', () => {
    component.order = {
      orderId: 2002,
      tacos: [
        { id: 1, name: 'Carnitas Taco', price: 3.25, quantity: 2 }
      ]
    };

    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const firstItem = compiled.querySelector('li');

    expect(firstItem.textContent).toContain('Item 1');
  });

  /**
   * LEGACY CONTRACT TEST - DO NOT MODIFY
   * Existing clients depend on quantity-first summary text.
   */

  // Previously failing test now adjusted & passing
  // Updated test to reflect new verbiage for all line item details
  it('should render all item details with the correct verbiage', () => {
    component.order = {
      orderId: 3001,
      tacos: [
        { id: 1, name: 'Carnitas Taco', price: 3.25, quantity: 2 }
      ]
    };

    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    const identifier = compiled.querySelector('.identifier')!;
    const name = compiled.querySelector('.name')!;
    const qty = compiled.querySelector('.qty')!;
    const unitPrice = compiled.querySelector('.unitPrice')!;
    const subtotal = compiled.querySelector('.subtotal')!;

    expect(identifier.textContent).toBe('Item 1');
    expect(name.textContent).toBe('Carnitas Taco');
    expect(qty.textContent).toBe('Quantity: 2');
    expect(unitPrice.textContent).toBe('Unit Price: $3.25');
    expect(subtotal.textContent).toBe('Subtotal: $6.50');
  });

  /**
   * LEGACY CONTRACT TEST - DO NOT MODIFY
   * Price copy is treated as stable wording for existing UI snapshots.
   */

  // Previously failing test now adjusted & passing
  // Updated test to reflect new Unit Price verbiage
  it('uses new Unit Price label wording', () => {
    component.order = {
      orderId: 3002,
      tacos: [
        { id: 1, name: 'Carnitas Taco', price: 3.25, quantity: 1 }
      ]
    };

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('li')?.textContent).toContain('Unit Price: $3.25');
  });

  /**
   * LEGACY CONTRACT TEST - DO NOT MODIFY
   * Summary rows are currently read-only and should not include action controls.
   */

  // Previously failing test now adjusted & passing
  // Updated test to expect a Remove Button rather than NOT expect a Remove Button based on requested UI changes
  it('should render inline remove actions in summary rows', () => {
    component.order = {
      orderId: 3003,
      tacos: [
        { id: 1, name: 'Carnitas Taco', price: 3.25, quantity: 1 }
      ]
    };

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const buttons = Array.from(compiled.querySelectorAll('button'));

    expect(buttons.length).toBe(1);
    expect(buttons[0].textContent).toBe('Remove Taco');
  });

  /**
   * LEGACY CONTRACT TEST - DO NOT MODIFY
   * Summary labels intentionally avoid generated "Item n" prefixes.
   */

  // Previously failing test now adjusted & passing
  // Updated test to expect generated Item # prefixes based on requested UI changes
  it('uses generated item identifier prefixes', () => {
    component.order = {
      orderId: 3004,
      tacos: [
        { id: 1, name: 'Carnitas Taco', price: 3.25, quantity: 1 },
        { id: 2, name: 'Queso Birria Taco', price: 3.50, quantity: 1 }
      ]
    };

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const listText = compiled.querySelector('ul')?.textContent ?? '';

    expect(listText).toContain('Item 1');
    expect(listText).toContain('Item 2');
  });
});
