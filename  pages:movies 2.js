// pages/movies.js
import { useSession, signOut } from 'next-auth/react';

function MoviesPage() {
  const { data: session } = useSession();

  return (
    <div>
      <h1>Movies List</h1>
      {session ? (
        <>
          <p>Welcome, {session.user.name}!</p>
          <button onClick={() => signOut()}>Sign out</button>
          {/* Add movies list here */}
        </>
      ) : (
        <p>Please sign in to view the movies list.</p>
      )}
    </div>
  );
}

export default MoviesPage;