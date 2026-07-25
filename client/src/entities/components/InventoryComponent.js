export class InventoryComponent {
  constructor(capacity = 20) {
    this.capacity = capacity;
    this.items = [];
    this.equipped = {}; // slot -> item
  }
}
