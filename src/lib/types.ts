export interface Product {
  id: number;
  name: string;
  image: string;
  badge?: string;
  slug?: string;
  description?: string;
  category: string;
  keywords?: string;
  isFeatured?: boolean;
 
}

export interface ProductCardProps {
  product: Product;
}

export interface ProductsPageProps {
  products: Product[];
}

export interface ProductPageProps {
  product: Product;
}

export interface Blog {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  publishDate: string;
  category: string;
  slug: string;
  readTime: string;
  tags: string[];
  isFeatured?: boolean;
}

export interface BlogCardProps {
  blog: Blog;
}

export interface BlogsPageProps {
  blogs: Blog[];
}

export interface BlogPageProps {
  blog: Blog;
}

export interface BreadcrumbItem {
  name: string;
  href: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export interface NextAppPageProps {
  params: { [key: string]: string | string[] | undefined };
  searchParams: { [key: string]: string | string[] | undefined };
}
