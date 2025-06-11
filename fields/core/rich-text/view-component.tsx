"use client";

import { Field } from "@/types/field";
import "./edit-component.css"; // Keep the CSS for styling

const ViewComponent = ({
  value,
  field
}: {
  value: string,
  field: Field
}) => {
  if (!value) return null;

  // The 'prose' class from Tailwind Typography is great for styling rendered HTML.
  // We use `dangerouslySetInnerHTML` to render the saved HTML.
  // In a CMS context where you trust the content source (yourself), this is standard practice.
  return (
    <div
      className="prose dark:prose-invert max-w-none"
      dangerouslySetInnerHTML={{ __html: value }}
    />
  );
}

export { ViewComponent };
