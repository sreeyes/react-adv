import {CSSProperties, useContext} from "react";
import styles from "../styles/styles.module.css";
import {ProductContext} from "./ProductCard";

export interface TitleProps { title?: string, className?: string, style?: CSSProperties; }
export const ProductTitle = ({ title, className, style }: TitleProps ) => {

    const { product } = useContext( ProductContext );

    return(
        <span style={style} className={ `${ styles.productDescription } ${ className } ` }> { title ? title : product.title } </span>
    )
}