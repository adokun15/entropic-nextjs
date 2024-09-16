import SideBar from "@/components/SideBarLg";

export default function Layout({ employer, candidate }) {
  return (
    <main className="flex">
      <SideBar />
      {candidate}
      {/*employer*/}
    </main>
  );
}
