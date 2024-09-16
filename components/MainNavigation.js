export default function MainNavigation() {
  return (
    <nav
      className="flex sticky justify-between px-[15vw] py-[5vh] shadow items-center
    "
    >
      <h1 className="text-4xl font-600">JobDev</h1>
      <article>
        <button className=" px-8 py-2 rounded-xl text-xl ring-1 ring-black ">
          Login
        </button>
      </article>
    </nav>
  );
}
