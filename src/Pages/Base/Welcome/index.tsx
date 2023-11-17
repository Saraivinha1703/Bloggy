import { useMemo, useState } from 'react';
import { request, gql } from 'graphql-request';
import { PostCard } from '../../../components/PostCard';

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
      children: [{ type: string; children: { text: string }[] }];
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
  const dataMemo = useMemo(() => ({ data }), [data]);

  request<{ posts: PostProps[] }>(
    'https://api-eu-west-2.hygraph.com/v2/clozwpj9i09ga01ujeh3xeqfl/master',
    query
  ).then(({ posts }) => setData(posts));

  return (
    <div>
      <div className="flex flex-col items-center gap-y-5 my-20">
        {dataMemo.data.map((post, index) => {
          return (
            <PostCard
              key={index}
              authorName={post.author.name}
              avatarUrl={post.author.avatar.url}
              content={post.content.raw.children[0].children[0].text}
              title={post.title}
            />
          );
        })}
      </div>
    </div>
  );
}
