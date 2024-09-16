import Card from "@/UI/Card";

export default function JobCard({ job, children }) {
  return (
    <>
      <Card className="w-[60%] bg-blue-800 text-white  m-auto">
        <h3 className="text-2xl">{job.title}</h3>
        <article className="my-4 m-[2vw]">{job.description}</article>
        <article className="my-4 flex gap-2 m-[2vw]">
          <p>author : {job.author.name}</p>
          <p>Role : {job.author?.company?.post}</p>
          <p>TimePosted : {job.timeSent}</p>
          <p>Pay: $1000</p>
        </article>
      </Card>
      {children}
    </>
  );
}
