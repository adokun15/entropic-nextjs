import { Delete, DeleteIcon, LucideDelete, Settings } from "lucide-react";
import Link from "next/link";

const CandidateList = () => {
  return (
    <>
      <li>
        <Link href="">Jobs List</Link>
      </li>
      <li>
        <Link href="appliedJobs">Applied Job</Link>
      </li>
      <li>
        <Link href="profile">Profile</Link>
      </li>
      <li>
        <Link href="resume">Resume</Link>
      </li>
    </>
  );
};
const EmployerList = () => {
  return (
    <>
      <li>
        <Link href="">Applicants List</Link>
      </li>
      <li>
        <Link href="post-job">Post Job</Link>
      </li>
      <li>
        <Link href="profile">Profile</Link>
      </li>
      <li>
        <Link href="manageJobs">Resume</Link>
      </li>
    </>
  );
};

export default function SideBar({ role }) {
  return (
    <div className="basis-1/4 bg-slate-700 h-[100vh] text-white">
      <h1 className="text-3xl text-center my-5">JobHub</h1>
      <ul className="text-center text-xl space-y-6 my-10">
        {/*
        <EmployerList />
         */}
        <CandidateList />
        <li className="flex justify-center gap-1">
          <Settings />
          <Link href="settings">Settings</Link>
        </li>
        <li className="flex justify-center gap-1">
          <LucideDelete />
          <Link href="deleteProfile">Delete Profile</Link>
        </li>
        <li>
          <Link href="">Logout</Link>
        </li>
      </ul>
    </div>
  );
}
