import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
  {
    title: String, //specifies a title field in the document will be of type String
    description: String, //specifies the description field will be of string too
  },
  {
    timestamps: true, //adds two fields(createdAt and updatedAt) to the schema
  }
);
const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);
//creates a mongoose model named Topic using the topicSchema
//mongoose.model.Topic ||: Ensures that if the model already exists (e.g., when the code is re-executed during development), it doesn't try to redefine it, which would throw an error. Instead, it reuses the existing model.

export default Topic;

// const topicSchema = new Schema(
//   {
//     title: { type: "String", required: true, unique: true },
//     description: { type: "string", required: true },
//   },
//   {
//     timestamps: true,
//   }
// );
// const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);
