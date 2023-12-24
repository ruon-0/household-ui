export interface ItemRequestDto {
  itemName: string;
  vendor: string;
  price: number;
  dateOfPurchase: Date;
  discount: number;
}

export interface ItemResponseDto {
  id: number;
  itemName: string;
  vendor: string;
  price: number;
  dateOfPurchase: Date;
  discount: number;
}
