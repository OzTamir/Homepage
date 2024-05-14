import useLatestPosts from "../hooks/useLatestPosts";

const BlogPosts = () => {
  const { posts, loading, error } = useLatestPosts();

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error || !posts) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 pb-10 border-b-2 border-b-indigo-700/20 lg:mb-10 mb-4">
      <h2 className="text-2xl font-bold mb-4 text-center">
        <a href="https://posts.oztamir.com">
          <code>Latest Blog Posts</code>
        </a>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="max-w-sm rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
            onClick={() => window.open(`${post.url}`, "_blank")}
          >
            <img
              className="w-full h-28 object-cover"
              src={post.feature_image}
              alt={post.title}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-md mb-2">{post.title}</div>
              <p className="text-gray-700 text-base">
                {post.title.length < 30 ? post.excerpt : "Read more..."}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
