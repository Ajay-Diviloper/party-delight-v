// src/app/api/products/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getAllProducts, getProductBySlug } from '@/lib/products-data';

// GET handler for the API route
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');
    
    // Set CORS headers
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (slug) {
      // Get single product by slug
      const product = getProductBySlug(slug);
      if (product) {
        return NextResponse.json(product, { headers });
      } else {
        return NextResponse.json(
          { message: 'Product not found' },
          { status: 404, headers }
        );
      }
    } else {
      // Get all products
      const products = getAllProducts();
      return NextResponse.json(products, { headers });
    }
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}

// OPTIONS handler for CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}