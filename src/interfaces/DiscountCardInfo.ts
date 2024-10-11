export interface DiscountCardInfo {
  id: number; // IMPORTANT: id must be related to the id of a product
  cardTitle: string;
  additionalInfo: Array<{ listId: number; content: string }>;
  productImage: Array<string>;
}
