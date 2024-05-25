import Link from "next/link";

function Users({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <Link key={user.id} href={`/users/${user.id}`}>
          <li className="bg-teal-600 mb-2 p-4 rounded-md">
            <div className="flex justify-between items-center gap-3">
              <div>
                <h3 className="text-neutral-950">email: {user.email}</h3>
                <p className="text-zinc-300">
                  name: {user.first_name} {user.last_name}
                </p>
              </div>
              <img
                className="rounded-full w-20 border-2 border-solid border-zinc-300 shadow-2xl shadow-teal-950"
                src={user.avatar}
                alt={user.first_name}
              />
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default Users;
