export default function JobCard({ job }) {
  return (
    <>
      <div className=" py-1 shadow-slate-500 rounded shadow ">
        <h3 className=" px-3 text-3xl border-b">{job.title}</h3>
        <article className="my-4 m-[2vw]">{job.description}</article>
        {/* <article className="my-4 flex gap-2 m-[2vw]">
          <p>author : {job?.author?.name}</p>
          <p>Role : {job?.author?.company?.post}</p>
          <p>TimePosted : {job?.timeSent}</p>
          <p>Pay: $1000</p>
        </article>
*/}
      </div>
    </>
  );
}
