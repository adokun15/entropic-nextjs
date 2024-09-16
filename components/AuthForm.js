export default function AuthForm({ children }) {
  return (
    <form className="*:block leading-9 *:my-4 my-5">
      {children}

      <label className="text-2xl">Email</label>
      <input
        required
        name="email"
        type="email"
        className="bg-blue-200 focus:bg-blue-300 py-2 px-3 caret-blue-800 outline-blue-600 rounded w-full"
        placeholder="Enter email"
      />
      <label className="text-2xl">Password</label>
      <input
        name="password"
        type="password"
        className="bg-blue-200 focus:bg-blue-300 py-2 px-3 caret-blue-800 outline-blue-600 rounded w-full"
        placeholder="Enter Password"
      />
      <button
        className="bg-blue-800 py-1 px-3 text-white rounded-xl hover:bg-blue-400 hover:text-blue-950
          transition-colors duration-500 ease-in-out focus:translate-y-1
          "
      >
        Submit
      </button>
    </form>
  );
}

{
  /*    <form>
      {children}
      <label htmlFor="email">
        <span>Email</span>
        <input name="email" />
      </label>

      <label htmlFor="password">
        <span>Password</span>
        <input name="password" />
      </label>

      <button>Submit</button>
    </form>
  */
}
