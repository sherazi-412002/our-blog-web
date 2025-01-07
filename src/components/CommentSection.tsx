'use client'
import React, { useState, useEffect, ChangeEvent } from "react";

// Define types for the comment
interface Comment {
  name: string;
  comment: string;
}

const CommentsSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newName, setNewName] = useState<string>("");
  const [newComment, setNewComment] = useState<string>("");

  // Fetch comments from local storage or API on component load
  useEffect(() => {
    const savedComments = JSON.parse(
      localStorage.getItem("comments") || "[]"
    ) as Comment[];
    setComments(savedComments);
  }, []);

  // Persist comments to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const addComment = () => {
    if (newName.trim() === "" || newComment.trim() === "") {
      alert("Please fill out both fields!");
      return;
    }
    const newEntry: Comment = { name: newName, comment: newComment };
    setComments([...comments, newEntry]); // Add comment to state
    setNewName(""); // Reset the input fields
    setNewComment("");
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  };

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(e.target.value);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-auto p-6 mt-8 max-w-3xl">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Comments</h2>
      {comments.length === 0 ? (
        <p className="text-gray-500 italic">
          No comments yet. Be the first to comment!
        </p>
      ) : (
        <ul className="space-y-4">
          {comments.map((comment, index) => (
            <li
              key={index}
              className="bg-gray-100 p-4 rounded shadow-sm text-left"
            >
              <p className="font-bold text-gray-700">{comment.name}:</p>
              <p className="text-gray-600">{comment.comment}</p>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-6">
        <input
          type="text"
          value={newName}
          onChange={handleNameChange}
          placeholder="Your name..."
          className="border border-gray-300 p-2 rounded w-full mb-3 focus:ring-2 focus:ring-[#6c965c]"
        />
        <textarea
          value={newComment}
          onChange={handleCommentChange}
          placeholder="Write your comment..."
          className="border border-gray-300 p-2 rounded w-full mb-3 h-20 focus:ring-2 focus:ring-[#6c965c]"
        ></textarea>
        <button
          onClick={addComment}
          className="bg-[#6c965c] text-white px-4 py-2 rounded hover:opacity-85 w-full"
        >
          Add Comment
        </button>
      </div>
    </div>
  );
};

export default CommentsSection;


