import {JSX, ReactElement} from "react";
import {Props as ProductCardProps} from "../components/ProductCard";
import {ButtonsProps, ImageProps, TitleProps} from "../components";

export interface Product {
    id: string;
    title: string;
    img?: string;
}
export interface ProductContextProps {
    counter: number;
    increaseBy: ( value: number ) => void;
    product: Product;
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element,
    Title: ({ title, className }: TitleProps) => JSX.Element,
    Image: ({ img, className }: ImageProps) => JSX.Element,
    Buttons: ({ className }: ButtonsProps) => JSX.Element
}