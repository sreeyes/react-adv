import {ProductTitle} from "./ProductTitle";

import { ProductCard as ProductCardHOC } from './ProductCard';
import {ProductImage} from "./ProductImage";
import {ProductButtons} from "./ProductButtons";
import {ProductCardHOCProps} from "../interfaces/interfaces";

export * from './ProductImage';
export * from './ProductButtons';
export * from './ProductTitle';

export const ProductCard: ProductCardHOCProps = Object.assign( ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
});

export default ProductCard;