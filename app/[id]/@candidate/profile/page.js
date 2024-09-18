import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Wrapper from "@/components/wrapper";

export default function CandidateProfile() {
  return (
    <Wrapper>
      <h2 className="text-3xl "> Your Profile</h2>
      <form className="my-10">
        <label>First Name</label>
        <Input />
        <label>Last Name</label>
        <Input />
        <label>Job Title</label>
        <Input />
        <label>Email</label>
        <Input />
        <label>Experience</label>
        <Input />
        <label>Language</label>
        <Input />
        <label>Bio</label>
        <Input />
        <Button>Save</Button>
      </form>
    </Wrapper>
  );
}
