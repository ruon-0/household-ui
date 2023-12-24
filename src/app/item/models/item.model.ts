export interface Item {
  id?: number;
  itemName: string;
  vendor: string;
  price: number;
  dateOfPurchase: Date;
  discount: number;
}
export function createItem(itemName: string, vendor: string,
                           price: number, dateOfPurchase: Date, discount: number) {
  return {itemName, vendor, price, dateOfPurchase, discount}
}

