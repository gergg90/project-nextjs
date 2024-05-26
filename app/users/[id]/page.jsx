const fetchUserId = async (id) => {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
};

async function UserId({ params }) {
  const user = await fetchUserId(params.id);

  return (
    <div className="bg-teal-600 p-10 rounded-md ">
      <img className="rounded-full mx-auto my-4" src={user.avatar} alt="" />
      <h3 className="text-neutral-950 text-3xl font-bold">
        ID: {user.id} - Name: {user.first_name} {user.last_name}
      </h3>
      <p className="text-zinc-300">Email: {user.email}</p>
    </div>
  );
}

export default UserId;
