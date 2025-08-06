"use client";
import React, { useEffect, useState, useMemo } from 'react';
import { getAllProducts } from '@/lib/products-data';
import { Product } from '@/lib/types';
import { categories as categoryList } from '@/lib/categories-data';
//import { Search, MapPin, ShoppingCart, Plus } from 'lucide-react';
import { Plus, X, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<{ [key: string]: boolean }>({});
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
 // const [orderSummaryOpen, setOrderSummaryOpen] = useState(false);
  //const [cart, setCart] = useState<{ [key: number]: number }>({});

  // After products are loaded, filter categories to only those with products
  const categoriesWithProducts = useMemo(() => categoryList.filter(cat => products.some(p => p.category === cat.name)), [products]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const allProducts = await getAllProducts();
      setProducts(allProducts);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  // Filter products by search
  const filteredProducts = useMemo(() => {
    let filtered = products;
    if (search.trim()) {
      filtered = filtered.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
    }
    return filtered;
  }, [products, search]);

  // Toggle category expansion
  const toggleCategory = (categoryName: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryName]: !prev[categoryName]
    }));
  };

  // Open product detail modal
  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Close product detail modal
  const closeProductModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  // Close modal on backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeProductModal();
    }
  };

  // Cart functions
  // const addToCart = (productId: number) => {
  //   setCart(prev => ({
  //     ...prev,
  //     [productId]: (prev[productId] || 0) + 1
  //   }));
  // };

  // const removeFromCart = (productId: number) => {
  //   setCart(prev => {
  //     const newCart = { ...prev };
  //     if (newCart[productId] > 1) {
  //       newCart[productId] -= 1;
  //     } else {
  //       delete newCart[productId];
  //     }
  //     return newCart;
  //   });
  // };

  // const getCartItemCount = () => {
  //   return Object.values(cart).reduce((total, quantity) => total + quantity, 0);
  // };

  // const getCartItems = () => {
  //   return Object.entries(cart).map(([productId, quantity]) => {
  //     const product = products.find(p => p.id === parseInt(productId));
  //     return { product, quantity };
  //   }).filter(item => item.product);
  // };

  return (
    <>
      {/* Top Bar */}
      {/* <div className="bg-gray-900 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <span className="font-heading text-lg">Party Delight</span>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-800 rounded">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-800 rounded relative">
              <ShoppingCart className="w-5 h-5" />
              {getCartItemCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getCartItemCount()}
                </span>
              )}
            </button>
          </div>
        </div>
      </div> */}

      {/* Main Header */}
      <div className="bg-white border-b border-gray-200 py-4 w-[90%] mx-auto">
        <div className="container mx-auto flex items-center justify-between px-4">
          <h1 className="font-heading text-2xl font-bold text-gray-900">Party Delight</h1>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50">
            {/* <Search className="w-4 h-4 text-gray-500 mr-2" /> */}
            <input
              type="text"
              placeholder="Search menu..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent outline-none text-sm w-64"
            />
          </div>
        </div>
      </div>

      {/* Location Banner */}
      {/* <div className="bg-blue-600 text-white py-3 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">You are ordering from Party Delight Bakery - Surrey Location. Pickup</span>
          </div>
          <button className="text-sm underline hover:no-underline">Change</button>
        </div>
      </div> */}

      {/* Order Summary */}
      {/* <div className="bg-white border-b border-gray-200 py-3 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h2 className="font-semibold text-gray-900">Your Order</h2>
            <p className="text-sm text-gray-600">{getCartItemCount()} items</p>
          </div>
          <button
            onClick={() => setOrderSummaryOpen(!orderSummaryOpen)}
            className="bg-gray-100 text-gray-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200"
          >
            View Order
          </button>
        </div>
      </div> */}

      {/* Expanded Order Summary */}
      {/* {orderSummaryOpen && (
        <div className="bg-white border-b border-gray-200 py-4 px-4">
          <div className="container mx-auto">
            {Object.keys(cart).length === 0 ? (
              <p className="text-gray-500 text-center py-4">Your order is empty</p>
            ) : (
              <div className="space-y-3">
                {getCartItems().map(({ product, quantity }) => {
                  if (!product) return null;
                  return (
                    <div key={product.id} className="flex items-center justify-between py-2">
                      <div className="flex items-center gap-3">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={40}
                          height={40}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="font-medium text-sm">{product.name}</h3>
                          <p className="text-xs text-gray-600">Quantity: {quantity}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => removeFromCart(product.id)}
                          className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-sm"
                        >
                          -
                        </button>
                        <span className="w-8 text-center text-sm">{quantity}</span>
                        <button
                          onClick={() => addToCart(product.id)}
                          className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-sm"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  );
                })}
                <div className="border-t pt-3">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Total Items</span>
                    <span className="font-semibold">{getCartItemCount()}</span>
                  </div>
                  <button className="w-full bg-[#ff3131] text-white py-2 rounded-lg mt-3 font-medium hover:bg-[#ff3131]/70">
                    Proceed to Order
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )} */}

      {/* Main Content */}
      <div className=" w-[90%]  container mx-auto px-4 py-6">
        {loading ? (
          <div className="text-center text-lg font-sans py-8">Loading...</div>
        ) : (
          <div className="space-y-4">
            {/* Category Sections */}
            {categoriesWithProducts.map((category) => {
              const categoryProducts = filteredProducts.filter(p => p.category === category.name);
              if (categoryProducts.length === 0) return null;
              const isExpanded = expandedCategories[category.name] || false;

              return (
                <div key={category.name} className="border border-gray-200 rounded-lg overflow-hidden">
                  {/* Category Header with Toggle Button */}
                  <button
                    onClick={() => toggleCategory(category.name)}
                    className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                    <h2 className="text-xl font-bold text-gray-900">
                        {category.name}
                      </h2>
                      {/* <div className="w-8 h-8 bg-[#ff3131] hover:bg-[#ff3131]/70 text-white rounded-full flex items-center justify-center transition-colors">
                        {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div> */}
                    
                    </div>

                    <div className="w-8 h-8 bg-gray-300 hover:bg-[#ff3131] text-white rounded-full flex items-center justify-center transition-colors">
  <ChevronUp
    className={`w-4 h-4 transform transition-transform duration-300 text-black  ${
      isExpanded ? 'rotate-180' : 'rotate-0'
    }`}
  />
</div>
                    {/* <span className="text-sm text-gray-500">
                      {categoryProducts.length} items
                    </span> */}
                  </button>

                  {/* Category Content - Collapsible */}
                  {isExpanded && (
                    <div className=" mx-auto border-t border-gray-200 bg-gray-50 p-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {categoryProducts.map((product) => (
              <div key={product.id} className="flex justify-between gap-4 p-4 bg-white rounded border border-gray-300 hover:shadow-md transition-shadow">
              {/* Left Side: Text Content */}
              <div className="flex flex-col justify-between">
                <div> 
                <h3 className="font-semibold text-gray-900 text-base mb-1">
                  {product.name}
                </h3>
            
                {product.description && (
                  <p className="text-sm text-gray-600 my-3">
                    {product.description}
                  </p>
                )}

</div>
            
                <Link
                  href="/contact"
                  className=" capitalize text-sm font-medium text-gray-900 hover:underline hover:text-[#ff3131] "
                >
                  Contact for pricing
                </Link>
              </div>
            
              {/* Right Side: Image + Plus Button Below */}
              <div className="flex flex-col justify-between items-center gap-2">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={80}
                  height={80}
                  className="w-20 h-20 object-cover rounded-md"
                />
            
                <button
                  onClick={() => openProductModal(product)}
                  className="w-8 h-8 bg-[#ff3131] hover:bg-[#ff3131]/80 text-white rounded-full flex items-center justify-center transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      {isModalOpen && selectedProduct && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={handleBackdropClick}
        >
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Product Details</h2>
              <button
                onClick={closeProductModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Product Image */}
              <div className="mb-6">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>

              {/* Product Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    Category: {selectedProduct.category}
                  </p>
                </div>

                {selectedProduct.description && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Description</h4>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedProduct.description}
                    </p>
                  </div>
                )}

                {/* Additional Details */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Product Information</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Product ID:</span>
                      <span className="font-medium">#{selectedProduct.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Category:</span>
                      <span className="font-medium">{selectedProduct.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Availability:</span>
                      <span className="font-medium text-green-600">In Stock</span>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">How to Order</h4>
                  <p className="text-blue-800 text-sm">
                    Contact us directly for pricing and ordering information. 
                    We offer custom designs and special requests for all occasions.
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex gap-3 p-6 border-t border-gray-200">
              <button
                onClick={closeProductModal}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  // Add to cart functionality can be implemented here
                  closeProductModal();
                }}
                className="flex-1 px-4 py-2 bg-[#ff3131] text-white rounded-lg hover:bg-[#ff3131]/70 transition-colors"
              >
                Contact for Order
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductsPage;
