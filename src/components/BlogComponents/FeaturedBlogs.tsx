import React from 'react';
import BlogCard from '@/components/BlogCard';
import { getFeaturedBlogs } from '@/lib/blog-data';
import Link from 'next/link';

const FeaturedBlogs = () => {
  const featuredBlogs = getFeaturedBlogs().slice(0, 3); // Show only 3 featured blogs

  if (featuredBlogs.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-dark-brown mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover baking tips, recipes, and stories from our passionate team of bakers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-[#bc8157] text-white px-8 py-3 rounded-lg font-heading font-semibold hover:bg-dark-brown transition-colors duration-200"
          >
            View All Posts
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogs; 