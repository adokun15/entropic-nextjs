import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Wrapper from "@/components/wrapper";

export default function EmployerProfile() {
  return (
    <Wrapper>
      <h2 className="text-3xl">Your Profile</h2>
      <form>
        <label>Name</label>
        <Input />
        <label>Company Name</label>
        <Input />
        <label>Company Position</label>
        <Input />
        <label>Company Location</label>
        <Input />
        <label>Number of Workers</label>
        <Input />
        <Button>Submit</Button>
      </form>
    </Wrapper>
  );
}
