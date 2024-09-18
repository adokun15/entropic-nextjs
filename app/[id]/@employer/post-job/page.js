import Wrapper from "@/components/wrapper";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function PostAJob() {
  return (
    <Wrapper>
      <h2 className="text-3xl">Post a Job</h2>

      <form>
        <label>Title</label>
        <Input />
        <label>Description</label>
        <Input />
        <label>Skills</label>
        <Input />
        <label>Candidate Responsibility</label>
        <Input />
        <Button>Upload</Button>
      </form>
    </Wrapper>
  );
}
