"use client";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";
export default function RemoveBtn({ id }) {
  const router = useRouter();

  const removeTopics = async () => {
    const confirmed = confirm("Are you sure you want to remove?");

    if (confirmed) {
      try {
        const response = await fetch(
          `http://localhost:3000/api/topics?id=${id}`,
          {
            method: "DELETE",
          }
        );

        if (!response.ok) {
          throw new Error("Failed to delete the topic");
        }

        console.log("Topic removed successfully");

        router.refresh();
      } catch (error) {
        console.error("Error deleting topic:", error);
      }
    }
  };
  return (
    <button className="text-red-400" onClick={removeTopics}>
      <HiOutlineTrash size={24} />
    </button>
  );
}
