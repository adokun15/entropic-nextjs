import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Wrapper from "@/components/wrapper";

export default function CandidateResume() {
  return (
    <Wrapper>
      <h2 className="text-3xl "> Your Resume</h2>
      <form className="my-10">
        <label>Skill</label>
        <Input />
        <label>Education</label>
        <Input />
        <label>Experience & Work</label>
        <Input />
        <Button>Save</Button>
      </form>
    </Wrapper>
  );
}
