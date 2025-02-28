import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/common/footer";

const BlogArchivePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const blogPosts = [
    {
      id: 1,
      title: "Introduction to Java Spring Framework",
      excerpt: "Learn the basics of the Spring Framework and its core concepts.",
      category: "Java",
      image: "/public/assets/images/blog1.jpg",
      date: "October 10, 2023",
    },
    {
      id: 2,
      title: "Mastering Dependency Injection",
      excerpt: "Understand how Dependency Injection works in Spring.",
      category: "Java",
      image: "/public/assets/images/blog2.jpg",
      date: "October 15, 2023",
    },
    {
      id: 3,
      title: "Building REST APIs with Spring Boot",
      excerpt: "Step-by-step guide to building RESTful APIs using Spring Boot.",
      category: "Spring Boot",
      image: "/public/assets/images/blog3.jpg",
      date: "October 20, 2023",
    },
    {
      id: 4,
      title: "Securing Spring Applications",
      excerpt: "Learn how to implement security in Spring applications.",
      category: "Spring Security",
      image: "/public/assets/images/blog4.jpg",
      date: "October 25, 2023",
    },
    {
      id: 5,
      title: "Microservices with Spring Cloud",
      excerpt: "Explore microservices architecture using Spring Cloud.",
      category: "Spring Cloud",
      image: "/public/assets/images/blog5.jpg",
      date: "October 30, 2023",
    },
    {
      id: 6,
      title: "Testing Spring Applications",
      excerpt: "Best practices for testing Spring applications.",
      category: "Testing",
      image: "/public/assets/images/blog6.jpg",
      date: "November 5, 2023",
    },
  ];

  const categories = ["All", "Java", "Spring Boot", "Spring Security", "Spring Cloud", "Testing"];

  // Filter blog posts based on search term and category
  const filteredPosts = blogPosts.filter(
    (post) =>
      (selectedCategory === "All" || post.category === selectedCategory) &&
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="bg-gray-900 text-white">
      {/* Banner Section */}
      <header className="relative h-[40vh] flex items-center justify-center text-white overflow-hidden">
        <div className="relative z-20 text-center">
          <h1 className="text-5xl font-bold mb-4">Blog Archive</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Explore our latest blog posts on Java, Spring Framework, and more.
          </p>
        </div>
      </header>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 md:px-20 py-16 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Side: Blog Posts */}
        <div className="lg:col-span-3">
          {/* Search and Filter Section */}
          <section className="mb-8">
            <div className="flex flex-wrap gap-4">
              <input
                type="text"
                placeholder="Search blog posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-1/3 px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <div className="flex gap-4">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-bold ${
                      selectedCategory === category
                        ? "bg-red-600 text-white"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.map((post) => (
              <motion.div
                key={post.id}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <p className="text-sm text-gray-400 mb-4">{post.date}</p>
                <a
                  href={`/blog/${post.id}`}
                  className="text-red-600 font-bold hover:text-red-700"
                >
                  Read More →
                </a>
              </motion.div>
            ))}
          </section>

          {/* Pagination */}
          <section className="mt-8 flex justify-center">
            {Array.from({ length: Math.ceil(filteredPosts.length / postsPerPage) }).map(
              (_, index) => (
                <motion.button
                  key={index + 1}
                  whileHover={{ scale: 1.1 }}
                  onClick={() => paginate(index + 1)}
                  className={`px-4 py-2 mx-1 rounded-lg font-bold ${
                    currentPage === index + 1
                      ? "bg-red-600 text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {index + 1}
                </motion.button>
              )
            )}
          </section>
        </div>

        {/* Right Side: Sidebar */}
        <div className="lg:col-span-1">
          {/* Popular Posts Section */}
          <section className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">Popular Posts</h2>
            <div className="space-y-4">
              {blogPosts.slice(0, 3).map((post) => (
                <div key={post.id} className="bg-gray-700 p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold">{post.title}</h3>
                  <p className="text-sm text-gray-400">{post.date}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Categories Section */}
          <section className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">Categories</h2>
            <div className="space-y-2">
              {categories.map((category) => (
                <div
                  key={category}
                  className="text-gray-300 hover:text-red-600 cursor-pointer"
                >
                  {category}
                </div>
              ))}
            </div>
          </section>

          {/* Newsletter Subscription Form */}
          <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <form>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                type="submit"
                className="w-full px-6 py-3 bg-red-600 text-white font-bold rounded-lg shadow-lg hover:bg-red-700 transition-all"
              >
                Subscribe
              </motion.button>
            </form>
          </section>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default BlogArchivePage;