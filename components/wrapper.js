export default function Wrapper({ children }) {
  return (
    <main className="px-[3vw] overflow-y-scroll basis-3/4 py-[10vh]">
      {children}
    </main>
  );
}
