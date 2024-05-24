const fetchUsers = async () => {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data;
};

async function HomePage() {
  const users = await fetchUsers();

  return (
    <ul>
      {users.map((user) => (
        <li className="bg-teal-600 mb-2 p-4 rounded-md" key={user.id}>
          <div className="flex justify-between items-center gap-3">
            <div>
              <h3 className="text-neutral-950">email: {user.email}</h3>
              <p className="text-zinc-300">
                name: {user.first_name} {user.last_name}
              </p>
            </div>
            <img
              className="rounded-full w-20 border-2 border-solid border-zinc-300 shadow-2xl"
              src={user.avatar}
              alt={user.first_name}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default HomePage;
