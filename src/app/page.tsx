import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen min-w-screen items-center justify-center gap-2">
        <Link className="box-border p-4 border-black border-[2px] rounded-md" href="/no-useState">No useState</Link>
        <Link className="box-border p-4 border-black border-[2px] rounded-md" href="/with-useState">With useState</Link>
    </div>
  );
}
