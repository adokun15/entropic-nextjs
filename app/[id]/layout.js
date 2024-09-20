import SideBar from "@/components/SideBarLg";
//children -- deleteProfile/ | settings
export default function Layout({ employer, candidate, params }) {
  return (
    <main className="flex overflow-hidden h-screen">
      <SideBar userId={params?.id} />
      {candidate}
      {/*employer*/}
    </main>
  );
}
