import React from 'react';
import { useQuery } from '@tanstack/react-query'; // <-- import useQuery

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

function PostsComponent() {
  const { data, isLoading, isError, error, refetch, isFetching } = useQuery({
  queryKey: ['posts'],
  queryFn: fetchPosts,
  staleTime: 5 * 60 * 1000,
  cacheTime: 10 * 60 * 1000,
  refetchOnWindowFocus: false,
  keepPreviousData: true,
});


  if (isLoading) return <div>Loading posts...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Posts from JSONPlaceholder API</h2>
      <button
        onClick={() => refetch()}
        disabled={isFetching}
        style={{ marginBottom: '20px' }}
      >
        {isFetching ? 'Fetching latest posts...' : 'Refetch Posts'}
      </button>
      <div>
        {data &&
          data.slice(0, 10).map((post) => (
            <div
              key={post.id}
              style={{ border: '1px solid #ddd', margin: '10px', padding: '10px' }}
            >
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default PostsComponent;
