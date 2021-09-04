import React from 'react';
import TShirt from '../img/T-shirt.jpg';
import Jean from '../img/Jean.jpg';
import DressFlower from '../img/Dress flower.jpg';
import Sock from '../img/Sock.jpg';
import HatSummer from '../img/Hat-summer.jpg';
import PainShort from '../img/Paint short.jpg';


const clothes = [{
        id: '1',
        name: 'T-shirt',
        price: '150000 VND',
        status: 'Out of stock',
        img: TShirt
    },{
        id: '2',
        name: 'Jean',
        price: '250000 VND',
        status: 'Stocking',
        img: Jean
    },{
        id: '3',
        name: 'Dress flower',
        price: '2000000 VND',
        status: 'Stocking',
        img: DressFlower
    },{
        id: '4',
        name: 'Sock',
        price: '50000 VND',
        status: 'Stocking',
        img: Sock
    },{
        id: '5',
        name: 'Hat-summer',
        price: '100000 VND',
        status: 'Out of stock',
        img: HatSummer
    },{
        id: '6',
        name: 'Paint short',
        price: '180000 VND',
        status: 'Out of stock',
        img: PainShort
}];
const Products = clothes.map((product, index) => {
    return (
        <div key={index} className="item d-flex f-row">
            <div>
                <img src={ product.img } className="img" />
            </div>
            <div className="d-flex f-column grow-1">
                <h2 className="height-small d-flex centering">{ product.name }</h2>
                <div className="grow-1 d-flex centering f-column">
                    <div>Price: { product.price }</div>
                    <div>Status: { product.status }</div>
                </div>
                <div className="d-flex centering height-small">
                    <button className="btn  ">Buy</button>
                </div>
            </div>
        </div>
    )    
});

export default Products;

