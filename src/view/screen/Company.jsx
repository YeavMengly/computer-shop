import React, { useState, useEffect } from "react"

 export default function Company() {
  const addCllick = ()=>{
    return <p>Description...</p>;
  }

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState([])

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/index'); 
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
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>
  
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
                      <a href={`/api/show/${product.id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
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