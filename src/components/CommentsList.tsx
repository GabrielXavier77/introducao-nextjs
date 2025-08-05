import { CommentSchema } from "@/types/comments";
import Comment from "./Comment";

type CommentListProps = {
  comments: CommentSchema[];
};

export default function CommentsList({ comments }: CommentListProps) {
  const toTitleCase = (str: string) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return (
    <div className="grid grid-cols-[1fr_1.5fr] auto-rows-[220px] gap-x-4">
      {comments.map((comment, index) => (
        <div key={index}>
          <Comment
            title={toTitleCase(comment.user)}
            subTitle={comment.message}
            date={comment.date}
          />
        </div>
      ))}
    </div>
  );
}
