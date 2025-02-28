import { motion } from "framer-motion";
import Footer from "@/components/common/footer";

const BlogDetailsPage = () => {
  const blogPost = {
    id: 1,
    title: "Introduction to Java Spring Framework",
    excerpt: "Learn the basics of the Spring Framework and its core concepts.",
    category: "Java",
    image: "/public/assets/images/blog1.jpg",
    date: "October 10, 2023",
    author: {
      name: "John Doe",
      bio: "John is a senior software engineer with over 10 years of experience in Java and Spring Framework.",
      avatar: "/public/assets/images/author.jpg",
      socialLinks: {
        twitter: "https://twitter.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe",
      },
    },
    content: `
      <h2>What is the Spring Framework?</h2>
      <p>The Spring Framework is a powerful and popular framework for building enterprise-level Java applications. It provides a comprehensive programming and configuration model for modern Java-based enterprise applications.</p>
      <h2>Core Features of Spring</h2>
      <p>Some of the core features of the Spring Framework include:</p>
      <ul>
        <li>Dependency Injection</li>
        <li>Aspect-Oriented Programming (AOP)</li>
        <li>Spring MVC Framework</li>
        <li>Spring Security</li>
        <li>Spring Boot</li>
      </ul>
      <h2>Why Use Spring?</h2>
      <p>Spring simplifies the development process and improves application performance. It also provides a robust ecosystem for building scalable, secure, and high-performance applications.</p>
    `,
    relatedPosts: [
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
    ],
  };

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <header className="relative h-[50vh] flex items-center justify-center text-white overflow-hidden">
        <img
          src={blogPost.image}
          alt={blogPost.title}
          className="absolute z-0 w-full h-full object-cover"
        />
        <div className="absolute z-10 bg-black bg-opacity-50 w-full h-full"></div>
        <div className="relative z-20 text-center">
          <h1 className="text-6xl font-bold mb-4">{blogPost.title}</h1>
          <p className="text-xl mb-2">By {blogPost.author.name} | {blogPost.date}</p>
          <p className="text-lg">{blogPost.excerpt}</p>
        </div>
      </header>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 md:px-20 py-16 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Side: Blog Content */}
        <div className="lg:col-span-3">
          {/* Blog Content */}
          <section className="prose prose-lg text-gray-300">
            <style>
              {`
                h1 {
                  font-size: 4rem;
                  font-weight: 800;
                  line-height: 1.2;
                  letter-spacing: -0.025em;
                  margin-bottom: 1.5rem;
                }
                h2 {
                  font-size: 3rem;
                  font-weight: 700;
                  line-height: 1.3;
                  letter-spacing: -0.02em;
                  margin-bottom: 1.25rem;
                }
                h3 {
                  font-size: 2.5rem;
                  font-weight: 600;
                  line-height: 1.4;
                  letter-spacing: -0.015em;
                  margin-bottom: 1rem;
                }
                h4 {
                  font-size: 2rem;
                  font-weight: 600;
                  line-height: 1.5;
                  letter-spacing: -0.01em;
                  margin-bottom: 0.75rem;
                }
              `}
            </style>
            <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
          </section>

          {/* Author Section */}
          <section className="mt-16 bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex items-center gap-6">
              <img
                src={blogPost.author.avatar}
                alt={blogPost.author.name}
                className="w-20 h-20 rounded-full"
              />
              <div>
                <h2 className="text-3xl font-bold">{blogPost.author.name}</h2>
                <p className="text-gray-300">{blogPost.author.bio}</p>
                <div className="flex gap-4 mt-4">
                  <a
                    href={blogPost.author.socialLinks.twitter}
                    className="text-gray-300 hover:text-red-600"
                  >
                    Twitter
                  </a>
                  <a
                    href={blogPost.author.socialLinks.linkedin}
                    className="text-gray-300 hover:text-red-600"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Comments Section */}
          <section className="mt-16">
            <h2 className="text-4xl font-bold mb-8">Comments</h2>
            <div className="space-y-8">
              {/* Comment 1 */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="/public/assets/images/user1.jpg"
                    alt="User 1"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="text-2xl font-bold">Jane Smith</h3>
                    <p className="text-sm text-gray-400">October 12, 2023</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  This is a great post! I learned a lot about the Spring Framework. Thanks for sharing!
                </p>
              </div>

              {/* Comment 2 */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="/public/assets/images/user2.jpg"
                    alt="User 2"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="text-2xl font-bold">Mike Johnson</h3>
                    <p className="text-sm text-gray-400">October 14, 2023</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  I really enjoyed reading this. Cant wait to try out Spring Boot!
                </p>
              </div>
            </div>

            {/* Comment Form */}
            <form className="mt-8 bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold mb-4">Leave a Comment</h3>
              <div className="mb-4">
                <label className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 mb-2">Comment</label>
                <textarea
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  rows={4}
                  placeholder="Enter your comment"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                type="submit"
                className="px-6 py-3 bg-red-600 text-white font-bold rounded-lg shadow-lg hover:bg-red-700 transition-all"
              >
                Submit
              </motion.button>
            </form>
          </section>
        </div>

        {/* Right Side: Sidebar */}
        <div className="lg:col-span-1">
          {/* Related Posts Section */}
          <section className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-3xl font-bold mb-4">Related Posts</h2>
            <div className="space-y-4">
              {blogPost.relatedPosts.map((post) => (
                <div key={post.id} className="bg-gray-700 p-4 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold">{post.title}</h3>
                  <p className="text-sm text-gray-400">{post.date}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Categories Section */}
          <section className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-3xl font-bold mb-4">Categories</h2>
            <div className="space-y-2">
              {["Java", "Spring Boot", "Spring Security", "Spring Cloud"].map((category) => (
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
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
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

export default BlogDetailsPage;