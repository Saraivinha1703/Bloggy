import { useState, useEffect } from 'react';
import { PostCard } from '../../../components/PostCard';
import { client } from '../../../lib/client-urql';

const query = gql`
  query Query {
    posts {
      title
      content {
        raw
      }
      author {
        name
        avatar {
          url
        }
      }
    }
  }
`;

type PostProps = {
  title: string;
  content: {
    raw: {
      children: [{ type: string; children: { type: string; text: string }[] }];
    };
  };
  author: {
    name: string;
    avatar: {
      url: string;
    };
  };
};

export function Welcome() {
  const [data, setData] = useState<PostProps[]>([]);

  useEffect(() => {}, []);

  return (
    <div>
      <div className="flex flex-col items-center gap-y-5 my-20">
        {data.map((post, index) => {
          return (
            <PostCard
              key={index}
              authorName={post.author.name}
              avatarUrl={post.author.avatar.url}
              content={post.content.raw.children}
              title={post.title}
            />
          );
        })}
      </div>
    </div>
  );
}
