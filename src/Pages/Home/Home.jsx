import { useEffect, useState } from "react";
import { Card } from "../../Components/Card/Card";
import { ProductDetail } from "../../Components/ProductDeatil/ProductDetail";

function Home() {
  const [items, setItems] = useState(null);
  useEffect(()=>{
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(response=> response.json())
    .then(data=> setItems(data))
  },[])
  return (
    <div>
      Home
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {
          items?.map((item)=>(
            <Card key={item.id} data={item}/>
          ))
        }
      </div>
      <ProductDetail/>
    </div>
  )
}

export {Home};