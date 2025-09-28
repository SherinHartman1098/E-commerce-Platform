import PageHeading from "./PageHeading";
import ProductListings from "./ProductListings";
import BootstrapButton from "./BootstrapButton";
import apiClient from "../api/apiClient";
import { useState, useEffect } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //Run once when the component mounts
  //Mouting is the process of creating and adding the components into DOM
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(false);
      const response = await apiClient.get("/api/v1/products"); //Axios get request
      //console.log(response.data);
      if (Array.isArray(response.data)) {
        setProducts(response.data);
      } else {
        console.error("Unexpected API response:", response.data);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError(
        error.response?.data?.message ||
          "An error occurred while fetching products."
      );
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="text-xl font-semibold">Loading products...</span>
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="text-xl text-red-500">Error:{error}</span>
      </div>
    );
  }
  return (
    <div className="max-w-[1152px] mx-auto px-6 py-8">
      <PageHeading title="Explore Eazy Stickers!">
        Add a touch of creativity to your space with our wide range of fun and
        unique stickers/ Perfect for any occasion!.
      </PageHeading>
      <ProductListings products={products} />
    </div>
  );
}
