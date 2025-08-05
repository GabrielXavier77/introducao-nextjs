"use client";

import CommentForm from "@/components/CommentForm";
import CommentsList from "@/components/CommentsList";
import NavBar from "@/components/NavBar";
import { CommentSchema } from "@/types/comments";
import { useState } from "react";

export default function CommentsPage() {
  const [comments, setComments] = useState<CommentSchema[]>([]);

  return (
    <div className="w-full h-full">
      <NavBar
        links={[
          { label: "Início", href: "/" },
          { label: "Produtos", href: "/products" },
          { label: "Sobre Nós", href: "/about" },
          { label: "Comentarios", href: "/comments" },
        ]}
      />
      <div className="p-4 w-full grid grid-cols-[1fr_3fr] space-x-4">
        <CommentForm comments={comments} setComments={setComments} />
        <div>
          <CommentsList comments={comments} />
        </div>
      </div>
    </div>
  );
}
