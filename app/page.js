import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

export default function Page() {
  return (
    <main className="mt-[10vh] block space-y-3">
      <h1 className="text-4xl text-center">Entropic</h1>
      <Button className="block m-auto">
        <Rocket className="inline mr-3 " /> let go
      </Button>
    </main>
  );
}
