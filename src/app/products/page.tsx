"use client";
import React, { useEffect, useState, useMemo } from 'react';
import { getAllProducts } from '@/lib/products-data';
import { Product } from '@/lib/types';
import { categories as categoryList } from '@/lib/categories-data';
import { Search, MapPin, ShoppingCart, Plus } from 'lucide-react';
import Image from 'next/image';

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [orderSummaryOpen, setOrderSummaryOpen] = useState(false);
  const [cart, setCart] = useState<{ [key: number]: number }>({});

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

  // Cart functions
  const addToCart = (productId: number) => {
    setCart(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
  };

  const removeFromCart = (productId: number) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[productId] > 1) {
        newCart[productId] -= 1;
      } else {
        delete newCart[productId];
      }
      return newCart;
    });
  };

  const getCartItemCount = () => {
    return Object.values(cart).reduce((total, quantity) => total + quantity, 0);
  };

  const getCartItems = () => {
    return Object.entries(cart).map(([productId, quantity]) => {
      const product = products.find(p => p.id === parseInt(productId));
      return { product, quantity };
    }).filter(item => item.product);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2 px-4">
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
      </div>

      {/* Main Header */}
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          <h1 className="font-heading text-2xl font-bold text-gray-900">Party Delight</h1>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50">
            <Search className="w-4 h-4 text-gray-500 mr-2" />
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
      <div className="bg-blue-600 text-white py-3 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">You are ordering from Party Delight Bakery - Surrey Location. Pickup</span>
          </div>
          <button className="text-sm underline hover:no-underline">Change</button>
        </div>
      </div>

      {/* Order Summary */}
      <div className="bg-white border-b border-gray-200 py-3 px-4">
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
      </div>

      {/* Expanded Order Summary */}
      {orderSummaryOpen && (
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
                  <button className="w-full bg-red-600 text-white py-2 rounded-lg mt-3 font-medium hover:bg-red-700">
                    Proceed to Order
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        {loading ? (
          <div className="text-center text-lg font-sans py-8">Loading...</div>
        ) : (
          <div className="space-y-8">
            {/* Category Sections */}
            {categoriesWithProducts.map((category) => {
              const categoryProducts = filteredProducts.filter(p => p.category === category.name);
              if (categoryProducts.length === 0) return null;

              return (
                <div key={category.name} className="space-y-4">
                  <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-2">
                    {category.name}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {categoryProducts.map((product) => (
                      <div key={product.id} className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                        <div className="flex-shrink-0">
                          <Image
                            src={product.image}
                            alt={product.name}
                            width={60}
                            height={60}
                            className="w-15 h-15 rounded-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 text-sm truncate">
                            {product.name}
                          </h3>
                          {product.description && (
                            <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                              {product.description}
                            </p>
                          )}
                          <p className="text-sm font-medium text-gray-900 mt-2">
                            Contact for pricing
                          </p>
                        </div>
                        <button
                          onClick={() => addToCart(product.id)}
                          className="flex-shrink-0 w-8 h-8 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default ProductsPage;
