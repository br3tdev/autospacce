import { add } from "@autospacce/sample-lib";

export default function Home() {
  return (
    <main className="bg-red-50">
      Let&apos;s build the parking app
      <span className="underline">{add(92, 8)}</span>
    </main>
  );
}
