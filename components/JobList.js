import JobCard from "./JobCard";

export default function JobList({ jobs }) {
  return (
    <ul>
      {jobs &&
        jobs?.length !== 0 &&
        jobs.map((job) => (
          <div key={job.id} className="my-10">
            <JobCard job={job}>
              <button className="px-3 w-[60%] py-2 block text-center m-auto text-white  rounded bg-blue-950">
                view more
              </button>
            </JobCard>
          </div>
        ))}
    </ul>
  );
}
