"use client";
import React, { useEffect, useState, useMemo, Fragment } from 'react';
import BlogGrid from '@/components/BlogComponents/BlogGrid';
import Banner from '@/components/BlogComponents/Banner';
import { getAllBlogs, getAllCategories, getAllTags } from '@/lib/blog-data';
import { Blog } from '@/lib/types';

const BlogPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTag, setSelectedTag] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [showPerPage, setShowPerPage] = useState(6);
  const [sort, setSort] = useState('latest');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const categories = ['All', ...getAllCategories()];
  const tags = ['All', ...getAllTags()];

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      const allBlogs = getAllBlogs();
      setBlogs(allBlogs);
      setLoading(false);
    };
    fetchBlogs();
  }, []);

  // Filter blogs by category, tag, and search
  const filteredBlogs = useMemo(() => {
    let filtered = blogs;
    
    if (selectedCategory !== 'All') {
      filtered = filtered.filter((blog) => blog.category === selectedCategory);
    }
    
    if (selectedTag !== 'All') {
      filtered = filtered.filter((blog) => blog.tags.includes(selectedTag));
    }
    
    if (search.trim()) {
      filtered = filtered.filter((blog) => 
        blog.title.toLowerCase().includes(search.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(search.toLowerCase()) ||
        blog.author.toLowerCase().includes(search.toLowerCase()) ||
        blog.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
      );
    }
    
    // Sorting
    if (sort === 'latest') {
      filtered = [...filtered].sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
    } else if (sort === 'oldest') {
      filtered = [...filtered].sort((a, b) => new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime());
    } else if (sort === 'title') {
      filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
    }
    
    return filtered;
  }, [blogs, selectedCategory, selectedTag, search, sort]);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedTag, search, showPerPage]);

  // Pagination
  const totalResults = filteredBlogs.length;
  const startIdx = (currentPage - 1) * showPerPage;
  const endIdx = Math.min(startIdx + showPerPage, totalResults);
  const paginatedBlogs = filteredBlogs.slice(startIdx, endIdx);
  const totalPages = Math.ceil(totalResults / showPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#bc8157] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading blog posts...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Banner />
      <div className="container mx-auto px-4 py-16 max-w-9xl flex flex-col md:flex-row gap-8 relative">
        {/* MobileFilters Button */}
        <button
          className="md:hidden mb-4 px-4 py-2 border border-[#bc8157] text-[#bc8157] rounded font-heading text-lg w-max"
          onClick={() => setSidebarOpen(true)}
        >
          Filters
        </button>
        
        {/* Sidebar */}
        {sidebarOpen && (
          <Fragment>
            <div
              className="fixed inset-0 bg-black bg-opacity-30 z-30"
              onClick={() => setSidebarOpen(false)}
            />
            <aside
              className="fixed top-0 left-0 w-11/12 max-w-xs h-full bg-white z-40 p-6 flex flex-col gap-8 shadow-lg animate-slide-in overflow-y-auto"
              style={{ animation: 'slideIn 0.2s' }}
            >
              <button
                className="self-end mb-4 text-2xl font-bold text-[#920804]"
                onClick={() => setSidebarOpen(false)}
                aria-label="Close filters"
              >
                &times;
              </button>
              
              {/* Search */}
              <div>
                <label className="block text-lg font-heading mb-2">Search blog posts...</label>
                <div className="flex items-center border rounded px-2 py-1 bg-gray-50">
                  <input
                    type="text"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Search..."
                    className="flex-1 bg-transparent outline-none font-sans text-base"
                  />
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                </div>
              </div>
              
              {/* Categories */}
              <div>
                <h2 className="text-2xl font-heading mb-4">Categories</h2>
                <ul className="flex flex-col gap-2">
                  {categories.map((cat) => (
                    <li key={cat}>
                      <button
                        onClick={() => { setSelectedCategory(cat); setSidebarOpen(false); }}
                        className={`w-full text-left px-3 py-2 rounded font-heading text-lg transition-colors duration-200 ${selectedCategory === cat ? 'bg-[#920804] text-white' : 'bg-gray-100 text-[#920804] hover:bg-[#920804] hover:text-white'}`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Tags */}
              <div>
                <h2 className="text-2xl font-heading mb-4">Tags</h2>
                <ul className="flex flex-col gap-2">
                  {tags.map((tag) => (
                    <li key={tag}>
                      <button
                        onClick={() => { setSelectedTag(tag); setSidebarOpen(false); }}
                        className={`w-full text-left px-3 py-2 rounded font-heading text-lg transition-colors duration-200 ${selectedTag === tag ? 'bg-[#920804] text-white' : 'bg-gray-100 text-[#920804] hover:bg-[#920804] hover:text-white'}`}
                      >
                        {tag}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
            <style>{`
              @keyframes slideIn {
                from { transform: translateX(-100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
              }
            `}</style>
          </Fragment>
        )}
        
        {/* Sidebar for desktop */}
        <aside className="hidden md:flex w-72 min-w-[220px] border-r border-gray-200 pr-6 p-6 bg-white flex-col gap-8 mb-8 md:mb-0">
          {/* Search */}
          <div>
            <label className="block text-lg font-heading mb-2">Search blog posts...</label>
            <div className="flex items-center border rounded px-2 py-1 bg-gray-50">
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search..."
                className="flex-1 bg-transparent outline-none font-sans text-base"
              />
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </div>
          </div>
          
          {/* Categories */}
          <div>
            <h2 className="text-2xl font-heading mb-4">Categories</h2>
            <ul className="flex flex-col gap-2">
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-3 py-2 rounded font-heading text-lg transition-colors duration-200 ${selectedCategory === cat ? 'bg-[#920804] text-white' : 'bg-gray-100 text-[#920804] hover:bg-[#920804] hover:text-white'}`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Tags */}
          <div>
            <h2 className="text-2xl font-heading mb-4">Tags</h2>
            <ul className="flex flex-col gap-2">
              {tags.map((tag) => (
                <li key={tag}>
                  <button
                    onClick={() => setSelectedTag(tag)}
                    className={`w-full text-left px-3 py-2 rounded font-heading text-lg transition-colors duration-200 ${selectedTag === tag ? 'bg-[#920804] text-white' : 'bg-gray-100 text-[#920804] hover:bg-[#920804] hover:text-white'}`}
                  >
                    {tag}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>
        
        {/* Main Content */}
        <main className="flex-1">
          {/* Header with results and sort */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-heading font-bold text-dark-brown mb-2">
                Blog Posts
              </h2>
              <p className="text-gray-600">
                Showing {startIdx + 1}-{endIdx} of {totalResults} results
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 font-sans text-sm focus:outline-none focus:border-[#bc8157]"
              >
                <option value="latest">Latest First</option>
                <option value="oldest">Oldest First</option>
                <option value="title">Title A-Z</option>
              </select>
              
              <select
                value={showPerPage}
                onChange={(e) => setShowPerPage(Number(e.target.value))}
                className="border border-gray-300 rounded px-3 py-2 font-sans text-sm focus:outline-none focus:border-[#bc8157]"
              >
                <option value={6}>6 per page</option>
                <option value={9}>9 per page</option>
                <option value={12}>12 per page</option>
              </select>
            </div>
          </div>
          
          {/* Blog Grid */}
          <BlogGrid blogs={paginatedBlogs} />
          
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-12">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 border border-gray-300 rounded font-heading text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#920804] hover:text-white transition-colors"
              >
                Previous
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-4 py-2 border rounded font-heading text-sm transition-colors ${
                    currentPage === page
                      ? 'bg-[#920804] text-white border-[#920804]'
                      : 'border-gray-300 hover:bg-[#920804] hover:text-white'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 border border-gray-300 rounded font-heading text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#920804] hover:text-white transition-colors"
              >
                Next
              </button>
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default BlogPage;
