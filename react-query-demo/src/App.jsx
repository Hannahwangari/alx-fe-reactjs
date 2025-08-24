import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PostsComponent from './components/PostsComponent';

// Create a QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // optional: default stale time
      cacheTime: 10 * 60 * 1000, // optional: default cache time
      refetchOnWindowFocus: false, // optional: default behavior
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PostsComponent />
    </QueryClientProvider>
  );
}

export default App;
