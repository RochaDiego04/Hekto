export interface ProductCategories {
  id: number; // IMPORTANT: id must be related to the id of a product
  categoryName: string;
  categoryImage: Array<string>;
}
