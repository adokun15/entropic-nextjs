import JobList from "@/components/JobList";
import { Input } from "@/components/ui/input";
import Wrapper from "@/components/wrapper";
import { JOBS_DEMO } from "@/lib/utils";

export default function CandidatePage() {
  return (
    <Wrapper>
      <h2 className="text-3xl">Hey Amos, Let Find you a new Job</h2>
      <div className="flex gap-2 my-8">
        <Input placeholder="Search for Job" />
        <div className="flex">
          <Input placeholder="Category" />
          <Input placeholder="Filter" />
        </div>
      </div>
      <JobList jobs={JOBS_DEMO} />
    </Wrapper>
  );
}
