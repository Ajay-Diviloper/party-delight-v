// src/lib/api.ts
import axios from 'axios';
import { Product } from './types';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const api = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// API functions for client-side usage
export async function fetchAllProducts(): Promise<Product[]> {
  try {
    const response = await api.get<Product[]>('/api/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export async function fetchProductBySlug(slug: string): Promise<Product | null> {
  try {
    const response = await api.get<Product>(`/api/products?slug=${slug}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}