import React, { useState, useEffect } from "react"
import ViewDetail from "./ViewDetail";
import { NavLink, useParams } from "react-router-dom";
import ShowProduct from "./showProduct";

 export default function ProductMSI() {


  const [data, setData] = useState(null);
  const [loading, setLoading] = useState([])
  const [detail, setDetail] = useState([])

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/show/MSI'); 
        const result = await response.json();
      
        setData(result.product)

      } catch (error) {
        console.error('Error fetching data:', error);
      } finally{
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  const detailPage = (product) =>
  {
  return (<ShowProduct/>);
  }
  if (loading) {
    return  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
       <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      <p>Loading...</p>
      </div>
    </div>
  }
  else {
    return (
      <div className="bg-white ">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">MODEL MSI</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {data.map((product)=> (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={"http://127.0.0.1:8000/images/" + product.image}
                    alt={product.image}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <NavLink to={`/showId/${product.id}`} onClick={
                     detailPage
                      }>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </NavLink>
                    </h3>
                    {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price} $</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
