import { OrderStatus } from "../classes/interfaces/order-status";
import { CustomerOrder } from "../classes/interfaces/customer-protocol";
import { ShoppingCartProtocol } from "../classes/interfaces/shopping-cart-protocol";
import { MessagingProtocol } from "../classes/interfaces/messaging-protocol";
import { PersistencyProtocol } from "../classes/interfaces/persistency-protocol";

export class Order {
  private _orderStatus: OrderStatus = "open";

  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly messaging: MessagingProtocol,
    private readonly persistency: PersistencyProtocol,
    private readonly customer: CustomerOrder
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log("Seu carrinho está vazio");
      return;
    }

    this._orderStatus = "closed";
    this.messaging.sendMessage(
      `Seu pedido com total de ${this.cart.totalWithDicount()} foi recebido.`
    );
    this.persistency.saveOrder();
    this.cart.clear();

    console.log(
      "O cliente é:",
      this.customer.getName(),
      this.customer.getIDN()
    );
  }
}
