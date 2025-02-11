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
    <div className="container mx-auto px-4 pb-6 border-b-2 border-b-golden/20 lg:mb-6 mb-4">
      <h2 className="text-xl font-bold mb-4 text-center dark:text-stone-200">
        <a href="https://posts.oztamir.com">
          <code>Latest Blog Posts</code>
        </a>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300 dark:bg-zinc-600
                        dark:border dark:border-stone-200/50"
            onClick={() => window.open(`${post.url}`, "_blank")}
          >
            <img
              className="w-full h-20 object-cover border-b border-b-golden/20 dark:border-stone-200/50"
              src={post.feature_image}
              alt={post.title}
            />
            <div className="px-4 py-3">
              <div className="font-bold text-sm mb-1 dark:text-stone-200">
                {post.title}
              </div>
              <p className="text-gray-700 dark:text-stone-300 text-xs">
                {post.title.length < 60
                  ? post.excerpt
                  : post.excerpt.slice(
                      0,
                      post.excerpt.slice(0, 60).lastIndexOf(" ")
                    ) + "..."}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
