import {ProductButtons, ProductCard, ProductImage, ProductTitle} from "../components";
import '../styles/custom-styles.css';

const product = {
    id: '1',
    title: 'Coffe Mug - Card',
    img: './coffee-mug.png'
};
export const ShoppingPage = () => {
    return(
        <div>
            <h1>Shopping Store</h1>
            <hr/>

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                {/*COMPOUND COMPONENT PATTERN*/}
                <ProductCard product={ product }>
                    <ProductCard.Image className="custom-image"/>
                    <ProductCard.Title className="text-bold" title={ 'Cafe' } />
                    <ProductCard.Buttons className="custom-buttons" />
                </ProductCard>

                {/*COMPOUND COMPONENT PATTERN*/}
                <ProductCard
                    product={ product }
                    className="bg-dark text-white"
                >
                    <ProductImage className="custom-image" />
                    <ProductTitle className="text-bold" />
                    <ProductButtons className="custom-buttons" />
                </ProductCard>

                {/*COMPOUND COMPONENT PATTERN*/}
                <ProductCard
                    product={ product }
                    style={{
                        backgroundColor: '#70D1F8'
                    }}
                >
                    <ProductImage style={{
                        boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
                    }}/>
                    <ProductTitle style={{
                        fontWeight: 'bold'
                    }} />
                    <ProductButtons style={{
                        display: 'flex',
                        justifyContent: 'end'
                    }} />
                </ProductCard>
            </div>
        </div>
    )
}