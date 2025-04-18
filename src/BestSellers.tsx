import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router";

export type ProductType = {
    _id: string;
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
    createdAt: string;
    updatedAt: string;
    __v: number;
};

export const BestSellers = () => {

    const [products, setProducts] = useState<ProductType[]>([])

    useEffect(() => {
        //обращение к серверу при загрузке страницы
        const promise = axios.get('https://masterclass.kimitsu.it-incubator.io/api/products')
        promise.then((res) => {
            const products = res.data
            setProducts(products)
        })
    }, []);

    // const products = [
    //     {
    //         _id: "664476983793ba7564c50ba2",
    //         id: 8,
    //         title: "Zip hoodie",
    //         price: 91.99,
    //         description: "Этот зип-худи, изготовленный из мягкого и уютного материала, предлагает идеальное сочетание стиля и комфорта для прохладной погоды. Его удобный крой с молнией спереди и капюшоном позволяет легко регулировать тепло, делая его идеальным выбором для повседневного ношения или для слоя одежды во время активных занятий на открытом воздухе.",
    //         category: "men's clothing",
    //         image: "https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/e12cebe8-7d13-4842-98ab-f71e0df6a2f4_8-zip-hoodie.png",
    //         rating: {
    //             rate: 4.7,
    //             count: 120
    //         },
    //         createdAt: "2024-05-15T08:47:20.180Z",
    //         updatedAt: "2024-05-15T12:20:34.117Z",
    //         __v: 0
    //     },
    //     {
    //         _id: "664476983793ba7564c50ba2",
    //         id: 9,
    //         title: "Second - Zip hoodie",
    //         price: 191.99,
    //         description: "Этот зип-худи, изготовленный из мягкого и уютного материала, предлагает идеальное сочетание стиля и комфорта для прохладной погоды. Его удобный крой с молнией спереди и капюшоном позволяет легко регулировать тепло, делая его идеальным выбором для повседневного ношения или для слоя одежды во время активных занятий на открытом воздухе.",
    //         category: "men's clothing",
    //         image: "https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/e12cebe8-7d13-4842-98ab-f71e0df6a2f4_8-zip-hoodie.png",
    //         rating: {
    //             rate: 4.7,
    //             count: 120
    //         },
    //         createdAt: "2024-05-15T08:47:20.180Z",
    //         updatedAt: "2024-05-15T12:20:34.117Z",
    //         __v: 0
    //     },
    //     {
    //         _id: "664476983793ba7564c50ba2",
    //         id: 10,
    //         title: "Third - Zip hoodie",
    //         price: 1191.99,
    //         description: "Этот зип-худи, изготовленный из мягкого и уютного материала, предлагает идеальное сочетание стиля и комфорта для прохладной погоды. Его удобный крой с молнией спереди и капюшоном позволяет легко регулировать тепло, делая его идеальным выбором для повседневного ношения или для слоя одежды во время активных занятий на открытом воздухе.",
    //         category: "men's clothing",
    //         image: "https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/e12cebe8-7d13-4842-98ab-f71e0df6a2f4_8-zip-hoodie.png",
    //         rating: {
    //             rate: 4.7,
    //             count: 120
    //         },
    //         createdAt: "2024-05-15T08:47:20.180Z",
    //         updatedAt: "2024-05-15T12:20:34.117Z",
    //         __v: 0
    //     }
    // ];

    return (
        <div className={'bestSeller'}>
            <h2>Best sellers</h2>
          <div className={'cards'}>
              {
                  products.map((pr) => {
                    return (
                        <div className="card" key={pr.id}>
                            <img src={pr.image} alt="img" />
                            <h4>{pr.title}</h4>
                            <p className="price">${pr.price}</p>
                            {/*<button>Show more</button>*/}
                            <Link to={`/product/${pr.id}`}>Show more</Link>
                        </div>
                    )
                  })
              }
          </div>
        </div>
    );
};
