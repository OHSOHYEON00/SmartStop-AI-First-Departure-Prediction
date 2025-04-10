import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { TStop } from "utils/types";

interface StopItemProps {
  stop: TStop;
  id: string;
}

const StopItem = ({ stop, id }: StopItemProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-white rounded-lg p-4 mb-2 shadow-sm cursor-move"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-gray-800">{stop.title}</span>
          <span className="text-gray-500 text-sm">{stop.number}</span>
        </div>
        {stop.description && (
          <div className="flex items-center gap-2">
            <span className="text-gray-500 text-sm">{stop.description}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default StopItem;
