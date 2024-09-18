import { Button } from "@/components/ui/button";
import Wrapper from "@/components/wrapper";

export default function DeleteProfile() {
  return (
    <Wrapper>
      <h1 className="text-3xl mb-6">Delete Account</h1>
      <div className="my-4">
        <p>Are you sure yo want to delete your account?</p>
        <p>This action is irreversible.</p>
        <Button variant="destructive">Delete Account</Button>
      </div>
    </Wrapper>
  );
}
