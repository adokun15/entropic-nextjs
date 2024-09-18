import {
  BadgeEuroIcon,
  BoxIcon,
  Contact,
  Delete,
  DeleteIcon,
  File,
  Group,
  GroupIcon,
  LucideDelete,
  Paperclip,
  Pen,
  PenIcon,
  PenLine,
  PenTool,
  PowerCircle,
  Printer,
  Settings,
  Trash,
  Trash2,
  User,
  Workflow,
} from "lucide-react";
import Link from "next/link";

const CandidateList = ({ userId }) => {
  return (
    <>
      <li className="flex justify-center gap-1">
        <Workflow />
        <Link href={`/${userId}/`}>Jobs List</Link>
      </li>
      <li className="flex justify-center gap-1">
        <Pen />
        <Link href={`/${userId}/appliedJobs`}>Applied Job</Link>
      </li>
      <li className="flex justify-center gap-1">
        <User />
        <Link href={`/${userId}/profile`}>Profile</Link>
      </li>
      <li className="flex justify-center gap-1">
        <Printer />
        <Link href={`/${userId}/resume`}>Resume</Link>
      </li>
    </>
  );
};
const EmployerList = ({ userId }) => {
  return (
    <>
      <li className="flex justify-center gap-1">
        <GroupIcon />
        <Link href={`/${userId}`}>JobHub Talents</Link>
      </li>
      <li className="flex justify-center gap-1">
        <File />
        <Link href={`/${userId}/post-job`}>Post Job</Link>
      </li>
      <li className="flex justify-center gap-1">
        <User />
        <Link href={`/${userId}/profile`}>Profile</Link>
      </li>
      <li className="flex justify-center gap-1">
        <PenLine />
        <Link href={`/${userId}/manageJobs`}>Manage Jobs</Link>
      </li>
    </>
  );
};

export default function SideBar({ role, userId }) {
  return (
    <div className="basis-1/4 bg-slate-700 h-[100vh] text-white">
      <h1 className="text-3xl text-center my-5">
        <Link href="/">JobHub</Link>
      </h1>
      <ul className="text-center text-xl *:tracking-wider space-y-10 my-10">
        {/*
        <CandidateList userId={userId} />
        */}
        <EmployerList userId={userId} />
        <li className="flex justify-center gap-1">
          <Settings />
          <Link href={`/${userId}/settings`}>Settings</Link>
        </li>
        <li className="flex justify-center gap-1">
          <Trash2 />{" "}
          <Link href={`/${userId}/deleteProfile`}>Delete Profile</Link>
        </li>

        <li className="flex justify-center gap-1">
          <PowerCircle className="text-red-400" />
          <Link href="">Logout</Link>
        </li>
      </ul>
    </div>
  );
}
