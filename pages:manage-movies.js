// pages/manage-movies.js
import { useSession, signOut } from 'next-auth/react';

function ManageMoviesPage() {
  const { data: session } = useSession();

  return (
    <div>
      <h1>Manage Movies</h1>
      {session && session.user.role === 'admin' ? (
        <>
          <p>Welcome, {session.user.name} (Admin)!</p>
          <button onClick={() => signOut()}>Sign out</button>
          {/* Add functionality to add, edit, and delete movies here */}
        </>
      ) : (
        <p>You do not have permission to access this page.</p>
      )}
    </div>
  );
}

export default ManageMoviesPage;
