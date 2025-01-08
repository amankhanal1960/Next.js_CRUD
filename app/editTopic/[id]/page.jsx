import EditTopicForm from "@/components/editTopicForm";

const getTopicBy = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/topics/${id}`, {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch data`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching topic", error);
  }
};

export default async function EditTopic({ params }) {
  const { id } = params;
  const { topic } = await getTopicBy(id);
  const { title, description } = topic;
  return <EditTopicForm id={id} title={title} description={description} />;
}
