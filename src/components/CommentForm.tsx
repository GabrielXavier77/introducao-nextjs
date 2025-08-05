"use client";

import React, { ChangeEvent, useState } from "react";
import { CommentSchema } from "@/types/comments";

type CommentFormProps = {
  comments: CommentSchema[];
  setComments: React.Dispatch<React.SetStateAction<CommentSchema[]>>;
};

export default function CommentForm({
  comments,
  setComments,
}: CommentFormProps) {
  const [user, setUser] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleUser = (e: ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  };

  const handleMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setComments((prev) => [
      ...prev,
      { user: user, message: message, date: new Date().toLocaleString() },
    ]);

    setUser("")
    setMessage("")
  };

  return (
    <div className="w-md">
      <form
        onSubmit={handleSubmit}
        className="border-2 border-purple-600 p-4 w-full rounded-2xl bg-gray-50"
      >
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-2xl text-center">
            Faça seu comentario
          </h1>

          <div className="mb-4 w-full flex flex-col items-center">
            <label htmlFor="" className="block mb-2 font-bold w-3/4">
              Nome:
            </label>
            <input
              type="text"
              value={user}
              onChange={handleUser}
              className="px-2 py-1 border-2 border-purple-600 rounded-2xl outline-none bg-white w-3/4"
              required
            />
          </div>

          <div className="mb-4 w-full flex flex-col items-center">
            <label htmlFor="" className="block mb-2 font-bold w-3/4">
              Menssagem:
            </label>
            <textarea
              name=""
              id=""
              rows={10}
              value={message}
              onChange={handleMessage}
              required
              className="border-2 p-2 border-purple-600 rounded-2xl outline-none resize-none bg-white w-3/4"
            ></textarea>
          </div>

          <div className="flex justify-center items-center w-full">
            <button className="bg-purple-600 px-4 py-2 text-white rounded-2xl cursor-pointer">
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
