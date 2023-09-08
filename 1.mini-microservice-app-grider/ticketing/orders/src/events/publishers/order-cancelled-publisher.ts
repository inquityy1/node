import {
  Publisher,
  OrderCancelledEvent,
  Subjects,
} from "@myfirstnpmhere/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
