import { NextRequest, NextResponse } from 'next/server';
import { getAllBlogs, getBlogBySlug, getBlogsByCategory, searchBlogs } from '@/lib/blog-data';

// GET handler for the API route
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    
    // Set CORS headers
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (slug) {
      // Get single blog by slug
      const blog = getBlogBySlug(slug);
      if (blog) {
        return NextResponse.json(blog, { headers });
      } else {
        return NextResponse.json(
          { message: 'Blog not found' },
          { status: 404, headers }
        );
      }
    } else if (category && category !== 'All') {
      // Get blogs by category
      const blogs = getBlogsByCategory(category);
      return NextResponse.json(blogs, { headers });
    } else if (search) {
      // Search blogs
      const blogs = searchBlogs(search);
      return NextResponse.json(blogs, { headers });
    } else {
      // Get all blogs
      const blogs = getAllBlogs();
      return NextResponse.json(blogs, { headers });
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