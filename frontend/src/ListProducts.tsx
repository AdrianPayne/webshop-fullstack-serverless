import React, { useState, useEffect } from 'react';

import './ListProducts.css';

const usuario = "Adrian"

function ListProducts() {
  const [data,setData] = useState([]);
  const [buyProductShow, setBuyProductShow] = useState(false);
  const [buySuccess, setBuySuccess] = useState(false)
  const getData=()=>{
    fetch('https://ml197ts77d.execute-api.us-east-2.amazonaws.com/prod/shoes'
    ,{
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[]);
  return (
    <div className="listProduct">
     {
       data && data.length>0 && data.map((product)=><ProductCard product={product} buyProductShow={buyProductShow}
                                                                 setBuyProductShow={setBuyProductShow}/>)
     }
    <BuyProduct buyProductShow={buyProductShow} setBuyProductShow={setBuyProductShow} setBuySuccess={setBuySuccess}/>
    <BuySuccess buySuccess={buySuccess} setBuySuccess={setBuySuccess} setBuyProductShow={setBuyProductShow} />
    </div>
  );
}

function ProductCard(props:any){
    let product = props.product;
    return(
        <div className="card">
            <img id="imgTask" src={product['img']}/>
            <p>{product['id']}</p>
            <p>{product['brand']}</p>
            <p className="price">£{product['price']}</p>
            <p>Available sizes:</p>
            <p>| {product['available_sizes'].map((size:string)=><span>{size} | </span>)}</p>
            <button className="cardButton" onClick={()=>{props.setBuyProductShow(product)}}>Buy now</button>
        </div>
    )
}

function BuyProduct(props:any){
    const [size, setSize] = useState("")
    const sendOrder = function(order:any) {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(order)
        };
        fetch("https://ml197ts77d.execute-api.us-east-2.amazonaws.com/prod/orders", requestOptions)
            .then(response => console.log(response.status))
    }

    const submitOrder = function(e:any) {
        e.preventDefault()
        let address = e.currentTarget.elements.address.value;
        let postCode = e.currentTarget.elements.postCode.value;
        let city = e.currentTarget.elements.city.value;
        let country = e.currentTarget.elements.country.value;

        const createOrder = function() {
            return( {
                "payload": {
                    "client": usuario,
                    "shoe_reference": product.id,
                    "size": size,
                    "shipping_information": {
                        "address": address,
                        "postal_code": postCode,
                        "city": city,
                        "country": country
                    }
                }
            })
        }
        sendOrder(createOrder())
        props.setBuySuccess(true)
    }

    if (!props.buyProductShow){
        return (<></>)
    }
    let product = props.buyProductShow;

    return(
        <div>
            <div className="BuyProductBackground" onClick={()=>{props.setBuyProductShow(false)}}/>
            <div className="BuyProduct">
                <div className="BuyProductDetails">
                    <img id="imgTask" src={product['img']}/>
                    <h3>{product['id']}</h3>
                    <p>{product['brand']}</p>
                    <p className="price">£{product['price']}</p>
                    <p>Sizes:</p>
                    <p>{product['available_sizes'].map((size:string) => <button onClick={() => {setSize(size)}}>{size} </button>)}</p>
                </div>
                <form className="BuyProductForm" onSubmit={submitOrder}>
                    <h3>Shipping information</h3>
                    <label>Address</label>
                    <input type="text" name="address"/>
                    <label>Post code</label>
                    <input type="text" name="postCode"/>
                    <label>City</label>
                    <input type="text" name="city"/>
                    <label>Country</label>
                    <input type="text" name="country"/>
                    <button type="submit" className="BuyProductButton">Buy</button>
                    </form>
            </div>
        </div>
    )
}

function BuySuccess(props:any){
    if (!props.buySuccess){
        return (<></>)
    }
    return (
        <div>
            <div className="BuySuccessBackground" onClick={()=>{props.setBuySuccess(false);
                props.setBuyProductShow(false)}}></div>
            <div className="BuySuccess">Purchase made correctly!</div>
        </div>
    )
}

export default ListProducts;
