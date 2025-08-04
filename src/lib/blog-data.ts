import { Blog } from './types';

export const blogsData: Blog[] = [
  {
    id: 1,
    title: 'The Art of Perfect Cupcake Decoration',
    excerpt: 'Discover the secrets behind creating stunning cupcake decorations that will wow your guests at any celebration.',
    content: `
      <p>Cupcake decoration is an art form that combines creativity, precision, and a love for beautiful desserts. Whether you're a professional baker or a home enthusiast, mastering the art of cupcake decoration can transform your baking from ordinary to extraordinary.</p>
      
      <h2>Essential Tools for Cupcake Decoration</h2>
      <p>Before diving into decoration techniques, it's important to have the right tools. A good piping bag, various tips, offset spatula, and food coloring are essential for creating professional-looking cupcakes.</p>
      
      <h2>Basic Piping Techniques</h2>
      <p>Start with basic piping techniques like the classic swirl, rosette, and star patterns. These foundational skills will serve as the building blocks for more complex designs.</p>
      
      <h2>Color Theory in Baking</h2>
      <p>Understanding color theory can help you create visually appealing cupcakes. Consider complementary colors, seasonal themes, and the psychology of color when designing your decorations.</p>
      
      <h2>Advanced Decoration Ideas</h2>
      <p>Once you've mastered the basics, experiment with advanced techniques like fondant flowers, edible glitter, and 3D decorations. These elements can add a wow factor to your cupcakes.</p>
      
      <p>Remember, practice makes perfect. Don't be afraid to experiment and develop your own unique style. The most beautiful cupcakes often come from creative experimentation and personal expression.</p>
    `,
    image: '/images/cake.jpg',
    author: 'Sarah Johnson',
    publishDate: '2024-01-15',
    category: 'Baking Tips',
    slug: 'art-of-perfect-cupcake-decoration',
    readTime: '5 min read',
    tags: ['cupcakes', 'decoration', 'baking tips', 'desserts'],
    isFeatured: true,
  },
  {
    id: 2,
    title: 'Seasonal Baking: Spring Desserts to Brighten Your Day',
    excerpt: 'Explore delightful spring-inspired desserts that capture the essence of the season with fresh flavors and vibrant colors.',
    content: `
      <p>Spring is a time of renewal and fresh beginnings, and what better way to celebrate than with seasonal desserts that reflect the beauty of this time of year?</p>
      
      <h2>Spring Fruit Inspirations</h2>
      <p>Strawberries, rhubarb, and citrus fruits are at their peak during spring. These ingredients can be incorporated into various desserts, from light tarts to refreshing sorbets.</p>
      
      <h2>Light and Airy Textures</h2>
      <p>Spring desserts often feature light, airy textures that contrast with the heavier winter comfort foods. Think mousses, chiffon cakes, and delicate pastries.</p>
      
      <h2>Pastel Color Palettes</h2>
      <p>Embrace the soft, pastel colors of spring in your desserts. Light pinks, mint greens, and pale yellows can create beautiful and appetizing presentations.</p>
      
      <h2>Fresh Herbs and Flowers</h2>
      <p>Edible flowers and fresh herbs like lavender, mint, and basil can add unique flavors and beautiful garnishes to spring desserts.</p>
      
      <p>Spring baking is all about embracing the season's bounty and creating desserts that are as beautiful to look at as they are delicious to eat.</p>
    `,
    image: '/images/croissant.jpg',
    author: 'Michael Chen',
    publishDate: '2024-01-10',
    category: 'Seasonal Baking',
    slug: 'seasonal-baking-spring-desserts',
    readTime: '4 min read',
    tags: ['spring', 'seasonal', 'desserts', 'fresh flavors'],
    isFeatured: true,
  },
  {
    id: 3,
    title: 'The Science Behind Perfect Pastry Dough',
    excerpt: 'Understanding the chemistry and techniques behind creating flaky, tender pastry dough that melts in your mouth.',
    content: `
      <p>Creating perfect pastry dough is both an art and a science. Understanding the chemical reactions and physical processes involved can help you achieve consistent, professional results.</p>
      
      <h2>The Role of Fat in Pastry</h2>
      <p>Fat, whether butter, shortening, or lard, plays a crucial role in creating flaky layers. The fat coats flour particles, preventing gluten formation and creating the characteristic flaky texture.</p>
      
      <h2>Temperature Control</h2>
      <p>Temperature is critical in pastry making. Cold ingredients and equipment help maintain the fat's solid state, ensuring proper layering and preventing the dough from becoming tough.</p>
      
      <h2>Gluten Development</h2>
      <p>Minimal gluten development is key to tender pastry. Over-mixing or using too much water can lead to tough, chewy results instead of the desired flaky texture.</p>
      
      <h2>Resting and Chilling</h2>
      <p>Allowing the dough to rest and chill between steps is essential. This relaxes the gluten, firms up the fat, and makes the dough easier to work with.</p>
      
      <p>Mastering pastry dough takes practice and patience, but understanding the science behind it will help you troubleshoot and improve your results.</p>
    `,
    image: '/images/muffin.jpg',
    author: 'Emily Rodriguez',
    publishDate: '2024-01-05',
    category: 'Baking Science',
    slug: 'science-behind-perfect-pastry-dough',
    readTime: '6 min read',
    tags: ['pastry', 'baking science', 'dough', 'techniques'],
    isFeatured: false,
  },
  {
    id: 4,
    title: 'Celebration Cakes: From Simple to Spectacular',
    excerpt: 'Learn how to create stunning celebration cakes that will make any special occasion memorable and delicious.',
    content: `
      <p>Celebration cakes are more than just desserts—they're centerpieces that bring joy and create lasting memories. Whether simple or elaborate, a well-crafted celebration cake can make any event special.</p>
      
      <h2>Planning Your Celebration Cake</h2>
      <p>Start by considering the occasion, theme, and number of guests. This will help you determine the size, style, and complexity of your cake design.</p>
      
      <h2>Layer Cake Fundamentals</h2>
      <p>Creating stable, even layers is the foundation of any good celebration cake. Proper leveling, filling, and stacking techniques ensure your cake looks and tastes professional.</p>
      
      <h2>Frosting and Decoration Techniques</h2>
      <p>From smooth buttercream finishes to intricate fondant work, the right frosting and decoration techniques can transform a simple cake into a showstopper.</p>
      
      <h2>Transportation and Storage</h2>
      <p>Proper transportation and storage are crucial for maintaining your cake's appearance and taste. Plan ahead to ensure your creation arrives at the celebration in perfect condition.</p>
      
      <p>Remember, the best celebration cakes are those made with love and attention to detail. Don't be afraid to let your creativity shine!</p>
    `,
    image: '/images/bg1.jpg',
    author: 'David Thompson',
    publishDate: '2023-12-28',
    category: 'Celebration Baking',
    slug: 'celebration-cakes-simple-to-spectacular',
    readTime: '7 min read',
    tags: ['celebration cakes', 'decorating', 'special occasions', 'baking'],
    isFeatured: false,
  },
  {
    id: 5,
    title: 'Healthy Baking: Delicious Alternatives for Dietary Restrictions',
    excerpt: 'Discover how to create delicious baked goods that accommodate various dietary needs without compromising on taste or texture.',
    content: `
      <p>Baking for dietary restrictions doesn't mean sacrificing flavor or enjoyment. With the right ingredients and techniques, you can create delicious treats that everyone can enjoy.</p>
      
      <h2>Gluten-Free Baking</h2>
      <p>Gluten-free baking requires understanding alternative flours and their properties. Rice flour, almond flour, and coconut flour each bring unique characteristics to your baked goods.</p>
      
      <h2>Dairy-Free Alternatives</h2>
      <p>Plant-based milks, oils, and dairy-free butters can successfully replace traditional dairy ingredients while maintaining the desired texture and flavor.</p>
      
      <h2>Sugar-Free and Low-Sugar Options</h2>
      <p>Natural sweeteners like honey, maple syrup, and stevia can replace refined sugar, while fruits and spices can add natural sweetness and flavor.</p>
      
      <h2>Egg Replacements</h2>
      <p>Flax seeds, chia seeds, and commercial egg replacers can substitute for eggs in many recipes, making them suitable for vegan diets.</p>
      
      <p>Healthy baking is about creativity and experimentation. Don't be afraid to try new ingredients and techniques to find what works best for your needs.</p>
    `,
    image: '/images/bg2.jpg',
    author: 'Lisa Wang',
    publishDate: '2023-12-20',
    category: 'Healthy Baking',
    slug: 'healthy-baking-dietary-alternatives',
    readTime: '5 min read',
    tags: ['healthy baking', 'dietary restrictions', 'gluten-free', 'vegan'],
    isFeatured: false,
  },
  {
    id: 6,
    title: 'The History and Evolution of French Pastries',
    excerpt: 'Take a journey through time to explore the rich history and evolution of French pastry making, from medieval times to modern innovations.',
    content: `
      <p>French pastry has a rich and fascinating history that spans centuries, reflecting the cultural, social, and technological changes that have shaped French society.</p>
      
      <h2>Medieval Origins</h2>
      <p>French pastry making began in medieval times, with simple breads and pastries made from basic ingredients. These early creations were often sweetened with honey and flavored with spices.</p>
      
      <h2>The Renaissance Influence</h2>
      <p>During the Renaissance, French pastry making became more sophisticated, influenced by Italian techniques and the introduction of new ingredients from the New World.</p>
      
      <h2>The Golden Age of French Pastry</h2>
      <p>The 18th and 19th centuries marked the golden age of French pastry, with the development of classic techniques and the creation of iconic pastries like croissants and éclairs.</p>
      
      <h2>Modern Innovations</h2>
      <p>Today, French pastry continues to evolve, with modern chefs combining traditional techniques with contemporary flavors and presentation styles.</p>
      
      <p>The history of French pastry is a testament to the enduring appeal of beautiful, delicious food and the human desire to create and share culinary art.</p>
    `,
    image: '/images/bg3.jpg',
    author: 'Pierre Dubois',
    publishDate: '2023-12-15',
    category: 'Baking History',
    slug: 'history-evolution-french-pastries',
    readTime: '8 min read',
    tags: ['French pastry', 'history', 'baking traditions', 'culinary arts'],
    isFeatured: false,
  },
];

// Helper functions with proper typing
export function getAllBlogs(): Blog[] {
  return blogsData;
}

export function getBlogBySlug(slug: string): Blog | undefined {
  return blogsData.find(blog => blog.slug === slug);
}

export function getBlogById(id: number): Blog | undefined {
  return blogsData.find(blog => blog.id === id);
}

export function getBlogsByCategory(category: string): Blog[] {
  return blogsData.filter(blog => 
    blog.category.toLowerCase() === category.toLowerCase()
  );
}

export function searchBlogs(query: string): Blog[] {
  const lowerQuery = query.toLowerCase();
  return blogsData.filter(blog =>
    blog.title.toLowerCase().includes(lowerQuery) ||
    blog.excerpt.toLowerCase().includes(lowerQuery) ||
    blog.content.toLowerCase().includes(lowerQuery) ||
    blog.category.toLowerCase().includes(lowerQuery) ||
    blog.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}

export function getFeaturedBlogs(): Blog[] {
  return blogsData.filter(blog => blog.isFeatured);
}

export function getAllCategories(): string[] {
  const categories = blogsData.map(blog => blog.category);
  return [...new Set(categories)];
}

export function getAllTags(): string[] {
  const allTags = blogsData.flatMap(blog => blog.tags);
  return [...new Set(allTags)];
} 