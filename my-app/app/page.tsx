import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="mt-40 flex justify-center">
      <Button variant="destructive">
        Subscribe to RoadsideCoder
      </Button>
    </div>
  );
}
