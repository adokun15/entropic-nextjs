//A table that show "review" from an employer

import { Button } from "@/components/ui/button";
import Wrapper from "@/components/wrapper";

//"pending" || "rejected" || "accepted, {message}"
export default function AppliedJobs() {
  return (
    <Wrapper>
      <h2 className="text-3xl">Job Applied For</h2>
      <table className="px-2 table-auto w-full table shadow rounded">
        <thead className="bg-slate-200 py-3 px-2">
          <tr>
            <td>Job Title</td>
            <td>Experience Required</td>
            <td>Fixed Budget</td>
            <td>Reviews</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody className="space-y-3 bg-white">
          <tr className="table-row my-5 border-spacing-5">
            <td>Senior Developer( C#)</td>
            <td>6+ year</td>
            <td>$3000 </td>
            <td>pending</td>
            <Button>View</Button>
          </tr>
          <tr>
            <td>Junior Developer( Javascript)</td>
            <td>2+ year</td>
            <td>$300 </td>
            <td>rejected </td>
            <Button>View</Button>
          </tr>
          <tr>
            <td>Entry level Developer( Javascript)</td>
            <td>1+ year</td>
            <td>$30 </td>
            <td>accepted </td>
            <Button>View</Button>
          </tr>
        </tbody>
      </table>
    </Wrapper>
  );
}
