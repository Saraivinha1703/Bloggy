import { useNavigate } from 'react-router-dom';

type PostCardProps = {
  authorId: string;
  authorName: string;
  avatarUrl: string;
  title: string;
  content: [{ type: string; children: { text: string }[] }];
};

export function PostCard({
  authorId,
  authorName,
  avatarUrl,
  content,
  title,
}: PostCardProps) {
  const navigate = useNavigate();
  return (
    <div className="bg-zinc-100 w-4/5 p-5 rounded-lg shadow shadow-black/20 transition-shadow duration-300 hover:shadow-lg sm:w-2/4 md:w-1/3">
      <button
        className="flex items-center group"
        onClick={() =>
          navigate('Profile', { replace: true, state: { authorId } })
        }
      >
        <img
          src={avatarUrl}
          className="w-16 h-16 bg-white rounded-full border-2 border-zinc-300"
        />
        <p className="ml-5 text-purple-500 font-semibold text-lg transition-all duration-300 group-hover:text-xl">
          {authorName}
        </p>
      </button>
      <p className="text-center my-3 font-bold text-2xl">{title}</p>
      <div className="bg-zinc-200 p-4 mt-10 rounded-lg">
        {content.map(({ children }, index) => {
          return (
            <p key={index} className="text-lg font-light">
              {children[0].text}
            </p>
          );
        })}
      </div>
    </div>
  );
}
