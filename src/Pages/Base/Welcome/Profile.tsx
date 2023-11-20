import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { GET_USER } from '../../../graphql/queries/users';
import { client } from '../../../lib/client-urql';

type Author = {
  name: string;
  avatar: {
    url: string;
  };
};

export function Profile() {
  const { state } = useLocation();
  const [data, setData] = useState<Author | null>(null);

  useEffect(() => {
    if (state) {
      client
        .query(GET_USER, { id: state.authorId })
        .then(res => setData(res.data.author));
    }
  }, [state]);

  if (state) {
    return (
      <>
        <div className="flex flex-col items-center py-10">
          <div className="p-10 bg-violet-100 rounded-xl shadow-md shadow-black/10 transition-shadow duration-300 hover:shadow-xl">
            <h1 className="text-center font-bold text-2xl underline mb-4">
              {data?.name}
            </h1>
            <img
              src={data?.avatar.url}
              className="w-40 h-40 rounded-full border-2 border-gray-400"
            />
          </div>
        </div>
        <div>
          <p className="text-center text-2xl font-light">Author's content</p>
        </div>
      </>
    );
  } else {
    return (
      <div>
        <h1>your Profile!</h1>
        <p>Author's Id: Your Id</p>
      </div>
    );
  }
}
