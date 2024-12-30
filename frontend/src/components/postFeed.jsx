import React from 'react';

function Feed() {
  const posts = [
    { id: 1, content: 'Just had the best coffee ever!' },
    { id: 2, content: 'Loving the new React features.' },
    { id: 3, content: 'Anyone up for a coding session?' },
  ];

  return (
    <main className="feed">
      {posts.map(post => (
        <div key={post.id} className="post">
          <p>{post.content}</p>
        </div>
      ))}
    </main>
  );
}

export default Feed;
