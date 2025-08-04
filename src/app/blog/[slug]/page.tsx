/* eslint-disable @typescript-eslint/no-explicit-any */
import { getBlogBySlug } from '@/lib/blog-data';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Banner from '@/components/Banner';

export default async function BlogPostPage({ params }: { params: Promise<any> }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  
  if (!blog) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="max-w-8xl w-full mx-auto font-sans">
      <Banner title={blog.title} subtitle={blog.excerpt} />
      {/* Breadcrumbs */}
      <nav className="text-sm text-grey mb-8 pt-4 flex items-center gap-2 font-sans max-w-4xl mx-auto px-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:underline text-dark-brown">Home</Link>
        <span className="mx-1">/</span>
        <Link href="/blog" className="hover:underline text-dark-brown">Blog</Link>
        <span className="mx-1">/</span>
        <span className="text-black font-semibold">{blog.title}</span>
      </nav>

      <div className="max-w-4xl mx-auto px-6 pb-16">
        {/* Blog Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
            <span className="inline-block bg-gray-100 text-[#bc8157] px-3 py-1 rounded-full text-xs font-semibold">
              {blog.category}
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {blog.author}
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {formatDate(blog.publishDate)}
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {blog.readTime}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-heading font-bold text-dark-brown mb-6 leading-tight">
            {blog.title}
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            {blog.excerpt}
          </p>
        </div>

        {/* Featured Image */}
        <div className="relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Blog Content */}
        <div className="prose prose-lg max-w-none">
          <div 
            className="text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>

        {/* Tags */}
        {blog.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-heading font-semibold text-dark-brown mb-4">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-[#bc8157] hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Author Bio */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-[#bc8157] rounded-full flex items-center justify-center text-white font-heading font-bold text-xl">
              {blog.author.split(' ').map(name => name[0]).join('')}
            </div>
            <div>
              <h3 className="text-lg font-heading font-semibold text-dark-brown mb-2">
                About {blog.author}
              </h3>
              <p className="text-gray-600">
                A passionate baker and writer who loves sharing knowledge about the art of baking and pastry making.
              </p>
            </div>
          </div>
        </div>

        {/* Back to Blog */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-[#bc8157] font-semibold hover:text-dark-brown transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
} 