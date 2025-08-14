function UserProfile() {
  return (
    <div className="user-profile bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="rounded-full w-36 h-36 mx-auto transform hover:scale-110 transition-transform duration-300 ease-in-out"
      />
      <h1 className="text-2xl font-bold mt-4 hover:text-blue-500 transition-colors duration-300 ease-in-out">
        John Doe
      </h1>
      <p className="mt-2 text-gray-600">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
