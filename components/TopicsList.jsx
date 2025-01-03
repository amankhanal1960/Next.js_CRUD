import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

export default async function TopicsList() {
  try {
    const response = await fetch("http://localhost:3000/api/topics", {
      method: "POST",
      body: { test: "test" },
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error.message);
  }

  return (
    <>
      <div className="p-4 border border-slate-300 my-3 flex gap-5 justify-between items-start">
        <div>
          <h2 className="font-bold text-2xl">Topic Title</h2>
          <div>Topic Description</div>
        </div>
        <div className="flex gap-2">
          <RemoveBtn />
          <Link href={"/editTopic/123"}>
            <HiPencilAlt size={24} />
          </Link>
        </div>
      </div>
    </>
  );
}
