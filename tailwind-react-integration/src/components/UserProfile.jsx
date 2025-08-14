function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 p-4 sm:p-4 md:p-8 rounded-lg shadow-md mx-auto max-w-xs md:max-w-sm">
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="rounded-full mx-auto w-24 h-24 md:w-36 md:h-36"
      />
      <h1 className="text-lg md:text-xl font-bold text-center mt-4">John Doe</h1>
      <p className="text-sm md:text-base text-center mt-2">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
