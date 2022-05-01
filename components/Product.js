import Image from 'next/image'
import Link from 'next/link'
const Product = ({ product }) => {
    const { title, price, image, id } = product;
    return (
        <div className="product col-md-4">
            <div className="card my-2">
                <Image className="card-img-top" src={image} alt="" width={300} height={470} />

                <div className="card-body">
                    <h4 className="card-title">{title} </h4>
                    <p className="card-text">{price}$ </p>
                </div>
                <Link href={`products/${id}`} >
                    <a className="btn bg-primary text-black">More Details</a>
                </Link>
            </div>
        </div>
    );
}

export default Product;
