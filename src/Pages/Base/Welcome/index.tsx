import { useState, useEffect } from 'react';
import { PostCard } from '../../../components/PostCard';
import { client } from '../../../lib/client-urql';
import { gql } from 'urql';

const query = gql`
  query {
    posts {
      id
      title
      content {
        raw
      }
      author {
        id
        name
        avatar {
          url
        }
      }
    }
  }
`;

type PostProps = {
  id: string;
  title: string;
  content: {
    raw: {
      children: [{ type: string; children: [{ text: string }] }];
    };
  };
  author: {
    id: string;
    name: string;
    avatar: {
      url: string;
    };
  };
};

export function Posts() {
  const [data, setData] = useState<PostProps[]>([]);

  useEffect(() => {
    client.query(query, {}).then(res => setData(res.data.posts));
  }, []);

  return (
    <div className="flex bg-zinc-200 justify-center py-20">
      <div className="flex flex-col items-center gap-y-5 h-full w-full">
        {data.map(post => {
          return (
            <PostCard
              key={post.id}
              authorName={post.author.name}
              avatarUrl={post.author.avatar.url}
              content={post.content.raw.children}
              title={post.title}
              authorId={post.author.id}
            />
          );
        })}
      </div>
    </div>
  );
}
