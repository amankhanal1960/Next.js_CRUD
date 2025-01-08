import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const GetTopics = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch topics`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.log("Error Loading topics", error);
  }
};
export default async function TopicsList() {
  const { topics } = await GetTopics();

  return (
    <div>
      {topics.map((t) => (
        <div className="p-4 border border-slate-300 my-3 flex gap-5 justify-between items-start">
          <div>
            <h2 className="font-bold text-2xl">{`${t.title}`}</h2>
            <div>{`${t.description}`}</div>
          </div>
          <div className="flex gap-2">
            <RemoveBtn id={t._id} />
            <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
