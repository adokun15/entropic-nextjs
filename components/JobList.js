import JobCard from "./JobCard";

export default function JobList({ jobs }) {
  return (
    <ul className="gap-4 grid my-5 grid-cols-2">
      {jobs &&
        jobs?.length !== 0 &&
        jobs.map((job) => <JobCard key={job?.id} job={job}></JobCard>)}
    </ul>
  );
}
