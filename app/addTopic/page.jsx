"use client"; // This makes the component a Client Component

export default function AddTopic() {
  const postData = async (event) => {
    event.preventDefault(); // Prevent form submission from reloading the page
    const formData = new FormData(event.target); // Collect form data
    const title = formData.get("title");
    const description = formData.get("description");

    console.log({ title, description });

    try {
      const response = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }

      const data = await response.json();
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={postData}>
      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        name="title"
        placeholder="Topic Title"
        required
      />
      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        name="description"
        placeholder="Topic Description"
        required
      />
      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Add Topic
      </button>
    </form>
  );
}
