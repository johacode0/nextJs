import Image from "next/image";
import Link from "next/link";
const singleProduct = ({ product }) => {

    const { title, price, description, category, image } = product;
    return (
        <div className="container">

            <div className="product">

                <div className="card col-md-12 my-2">
                    <Image className="card-img-top" src={image} alt="" width={300} height={700} />

                    <div className="card-body  col-md-4">
                        <h4 className="card-title">{title} </h4>
                        <p className="card-text">{description} </p>
                        <p className="card-text">{category} </p>
                        <p className="card-text">{price}$ </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default singleProduct;

export async function getStaticPaths() {
    const req = await fetch("https://fakestoreapi.com/products");
    const products = await req.json();
    const paths = products.map((product) => {
        return {
            params: { id: product.id.toString() },
        };
    });
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const id = context.params.id;
    const req = await fetch("https://fakestoreapi.com/products/" + id);
    const product = await req.json();
    return {
        props: { product },
    };
}
