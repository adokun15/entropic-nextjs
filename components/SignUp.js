import AuthForm from "./AuthForm";

export default function SignUp() {
  return (
    <AuthForm>
      <h1 className="text-5xl">SignUp</h1>
      <label className="text-2xl">Full Name</label>
      <input
        name="fullname"
        className="bg-blue-200 focus:bg-blue-300 py-2 px-3 caret-blue-800 outline-blue-600 rounded w-full"
        placeholder="Enter Password"
      />
    </AuthForm>
  );
}
