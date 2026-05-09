import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Order, Taco } from '../order/order.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [ CommonModule ],
  template: `
    <h1>Order Summary</h1>

    @if (order.tacos.length > 0) {
      <ul>
        @for (taco of order.tacos; let i = $index; track taco) {
          <li class="line-item">
            <strong>Item {{ i + 1 }}</strong>
            <div class="line-details">
              <div><strong>{{ taco.name }}</strong></div>
              <div>Quantity: {{ taco.quantity }}</div>
              <div>Unit Price: {{ taco.price | currency:'USD':'symbol':'1.2-2' }}</div>
              <div>Subtotal: {{ (taco.price * (taco.quantity ?? 1)) | currency:'USD':'symbol':'1.2-2' }}</div>

              @if (taco.noOnions || taco.noCilantro) {
                <div class="customizations">
                  <em>Customizations:</em>
                  <ul>
                    @if (taco.noOnions) {
                      <li>No onions</li>
                    }
                    @if (taco.noCilantro) {
                      <li>No cilantro</li>
                    }
                  </ul>
                </div>
              }
            </div>

            <button class="remove-btn" (click)="removeTaco(i)">Remove Taco</button>
          </li>
        }
      </ul>

      <p><strong>Total:</strong> {{ getTotal() | currency:'USD':'symbol':'1.2-2' }}</p>
    } @else {
      <p>No tacos added to the order yet.</p>
    }
  `,
  styles: `
    .line-item {
      margin-bottom: 15px;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 6px;
    }

    .line-details {
      margin-top: 5px;
      margin-bottom: 10px;
    }

    .customizations ul {
      margin: 0;
      padding-left: 18px;
    }

    .remove-btn {
      background-color: #c62828;
      color: white;
      border: none;
      padding: 6px 10px;
      border-radius: 4px;
      cursor: pointer;
    }

    .remove-btn:hover {
      background-color: #b71c1c;
    }
  `
})
export class OrderSummaryComponent {
  @Input() order!: Order;

  @Output() remove = new EventEmitter<number>();

  removeTaco(index: number) {
    this.remove.emit(index);
  }

  getTotal() {
    return this.order.tacos.reduce(
      (acc, taco) => acc + (taco.price * (taco.quantity ?? 1)),
      0
    );
  }
}

