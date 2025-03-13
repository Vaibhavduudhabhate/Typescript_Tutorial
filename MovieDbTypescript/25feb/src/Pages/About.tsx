import { useEffect, useState } from "react"

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export const About = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.in/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log(data)
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4 flex justify-center flex-col">
      <h1 className="text-[40px] text-center my-[20px]"> All Products</h1>
      <div className="flex flex-row gap-4 flex-wrap justify-center">
        {products.map(product => (
          <div className="shadow-xl col-span-1 w-32 md:w-72 lg:w-96 h-fit bg-gray-100 hover:bg-base-200">
            <div className="h-32 bg-[url('https://placeimg.com/500/225/arch')] bg-cover bg-no-repeat bg-center">
               <img className="object-cover h-[100%]" src={product.image} alt={product.title}
              //  style={{ width: '200px', height: 'auto' }}
              />
            </div>
            <div className="card-body">
              <h2 className="card-title">{product.title}</h2>
              <h2>Price: ${product.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

}
