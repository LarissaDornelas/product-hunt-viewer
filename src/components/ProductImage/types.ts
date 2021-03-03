export enum ImageSize {
  SMALL = "15px",
  MEDIUM = "40px",
  LARGE = "80px",
}

export interface IProductImage {
  imageUrl: string;
  size: ImageSize;
}
