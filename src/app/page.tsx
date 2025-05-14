import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Flag } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Card>
        <div className="flex items-center justify-center h-full">
          <div>
            <p>Formula 1</p>
            <p>Racename</p>
            <p>location</p>
          </div>
          <div>
            <div>
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              <p>next session</p>
              <Button>some text</Button>
            </div>
          </div>
        </div>
      </Card>
      <Card className=" bg-green-800 text-white rounded-md overflow-hidden">
        <CardHeader className="pb-0 pt-4 px-4">
          <div className="flex items-center gap-2">
            <div className="bg-red-500 p-1 rounded">
              <span className="text-xs font-bold">WRC</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold mt-2">Rally de Portugal</h2>
          <div className="flex items-center gap-1 mt-1">
            <span className="text-2xl">🇵🇹</span>
            <span className="text-md">Portugal</span>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <div className="flex justify-between mt-2 text-center">
            <div className="bg-black p-3 w-1/4">
              <div className="text-3xl font-bold">0</div>
              <div className="text-xs">Days</div>
            </div>
            <div className="bg-black p-3 w-1/4">
              <div className="text-3xl font-bold">21</div>
              <div className="text-xs">Hours</div>
            </div>
            <div className="bg-black p-3 w-1/4">
              <div className="text-3xl font-bold">11</div>
              <div className="text-xs">Minutes</div>
            </div>
            <div className="bg-black p-3 w-1/4">
              <div className="text-3xl font-bold">15</div>
              <div className="text-xs">Seconds</div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-0">
          <div className="flex justify-between w-full">
            <div className="bg-black p-2 flex items-center gap-2">
              <Flag size={16} />
              <span className="font-medium">Rally</span>
            </div>
            <div className="bg-black p-2 text-center">
              <span className="font-medium">May 15</span>
            </div>
            <div className="bg-black p-2 text-center">
              <span className="font-medium">18:00</span>
            </div>
          </div>
        </CardFooter>
        <div className="bg-black p-2 flex justify-between items-center">
          <span className="text-sm">#RallyPortugal</span>
          <div className="rounded-full border border-white w-6 h-6 flex items-center justify-center">
            <span className="text-xs">©</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
