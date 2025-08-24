import React from 'react';
import { Link, useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();
  
  const blogContent = {
    1: {
      title: "Getting Started with React Router",
      content: "React Router is a powerful library for handling routing in React applications. It allows you to create single-page applications with multiple views and navigation between them. This comprehensive guide will walk you through the basics of setting up React Router, creating routes, and handling navigation in your React applications.",
      author: "React Developer",
      date: "2024-01-15"
    },
    2: {
      title: "Advanced Routing Patterns",
      content: "Advanced routing patterns include nested routes for complex UI hierarchies, protected routes for authentication, and dynamic routes for handling variable content paths. These patterns help you build more sophisticated and secure applications with better user experiences.",
      author: "Frontend Expert",
      date: "2024-01-20"
    },
    3: {
      title: "State Management in React",
      content: "State management is crucial for building scalable React applications. You can choose from local state, Context API, or external libraries like Redux or Zustand. Each approach has its own benefits and use cases depending on your application's complexity and requirements.",
      author: "React Specialist",
      date: "2024-01-25"
    },
    4: {
      title: "Performance Optimization Tips",
      content: "Optimize your React apps with techniques like code splitting, lazy loading, memoization, and proper state structure to ensure smooth user experiences. Performance optimization is essential for maintaining good user experience as your application grows in complexity.",
      author: "Performance Engineer",
      date: "2024-01-30"
    }
  };

  const post = blogContent[id];

  if (!post) {
    return (
      <div className="container mx-auto px-4">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4">Post Not Found</h2>
          <p className="text-gray-600 mb-4">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="text-blue-600 hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 max-w-4xl">
      <Link to="/blog" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Back to Blog
      </Link>
      <article className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <div className="text-gray-600 mb-6">
          <span>By {post.author}</span> • <span>{post.date}</span>
        </div>
        <div className="prose max-w-none">
          <p className="text-gray-800 leading-relaxed text-lg">{post.content}</p>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;