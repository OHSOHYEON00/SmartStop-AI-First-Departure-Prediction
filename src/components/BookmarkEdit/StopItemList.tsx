import React from "react";
import { DndContext, DragEndEvent, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { TStop } from "utils/types";
import StopItem from "./StopItem";

interface StopItemListProps {
  list: TStop[] | null;
  onReorder?: (newOrder: TStop[]) => void;
}

const StopItemList = ({ list, onReorder }: StopItemListProps) => {
  if (!list || list.length === 0) {
    return (
      <div className="text-gray-500 text-center mt-4">정류장이 없습니다.</div>
    );
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = list.findIndex((item) => item.number === active.id);
      const newIndex = list.findIndex((item) => item.number === over.id);

      const newList = [...list];
      const [movedItem] = newList.splice(oldIndex, 1);
      newList.splice(newIndex, 0, movedItem);

      //   onReorder?.(newList);
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext
        items={list.map((stop) => stop.number)}
        strategy={verticalListSortingStrategy}
      >
        <div className="mt-4 space-y-2">
          {list.map((stop) => (
            <StopItem key={stop.number} id={stop.number} stop={stop} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default StopItemList;
