type PostCardProps = {
  authorName: string;
  avatarUrl: string;
  title: string;
  content: [{ type: string; children: { text: string }[] }];
};

export function PostCard({
  authorName,
  avatarUrl,
  content,
  title,
}: PostCardProps) {
  return (
    <div className="bg-zinc-100 w-4/5 p-5 rounded-lg shadow shadow-black/20 transition-shadow duration-300 hover:shadow-lg sm:w-2/4 md:w-1/3">
      <div className="flex items-center">
        <img
          src={avatarUrl}
          className="w-16 bg-white rounded-full border-2 border-zinc-300"
        />
        <p className="ml-5 text-purple-500 font-semibold text-lg">
          {authorName}
        </p>
      </div>
      <p className="text-center my-3 font-bold text-2xl">{title}</p>
      <div className="bg-zinc-200 p-4 mt-10 rounded-lg">
        {content.map(({ _, children }) => {
          return <p className="text-lg font-light">{children[0].text}</p>;
        })}
      </div>
    </div>
  );
}
