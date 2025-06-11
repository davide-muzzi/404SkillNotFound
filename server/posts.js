import { v4 as uuidv4 } from 'uuid';

const posts = [
  {
    id: uuidv4(),
    title: "Example Post 1",
    description: "This shall serve as a placeholder.",
    video_path: "../src/assets/posts/videos/file_1.mp4",
    date: new Date().toISOString(), // ISO format like "2025-06-11T14:23:00.000Z" (UTC Time)
    author: "Example User"
  },
  {
    id: uuidv4(),
    title: "Example Post 2",
    description: "This shall serve as a placeholder.",
    video_path: "../src/assets/posts/videos/file_2.mp4",
    date: new Date().toISOString(),
    author: "Example User"
  }
];

export default posts;
