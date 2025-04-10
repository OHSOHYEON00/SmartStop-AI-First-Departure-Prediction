import BusIcon from "components/Common/Icon/BusIcon";
import React, { useContext } from "react";
import { SearchContext } from "routes/search";
import { TStop } from "utils/types";

const articleStyle =
  "border-disabled border-[1.5px] rounded-xl flex px-4.5 py-3.25";

const BusItem = ({
  name,
  description,
  track,
  color,
}: {
  name: string;
  description: string;
  track: string;
  color: string;
}) => {
  return (
    <article className={articleStyle}>
      <div className="flex items-center gap-1.75 w-[40%]">
        <div>
          <BusIcon color={color} />
        </div>
        <span className="text-lg font-bold">{name}</span>
      </div>

      <div className="w-[60%]">
        <p className="truncate text-sm font-semibold">{description}</p>
        <p className="truncate text-xs text-desc font-semibold">{track}</p>
      </div>
    </article>
  );
};

export const StopItem = ({ title, number, description }: TStop) => {
  return (
    <article className={`${articleStyle} flex-col`}>
      <p className="text-sm font-medium">{title}</p>
      <div className="font-normal text-desc text-sm">
        <span>{number}</span> |<span>{description}</span>
      </div>
    </article>
  );
};

const busTemp = [
  {
    color: "#3CC344",
    name: "5519",
    description: "서울시 일반버스",
    track: "구로역↔오류동차고지",
  },
  {
    color: "#87C700",
    description: "서울시 마을버스",
    track: "수원시동부차고지↔서부중앙공영지부중앙공영지부중앙공영지",
    name: "구로19",
  },
  {
    color: "#386DE8",
    name: "N19(심야)",
    description: "서울시 심야버스",
    track: "서부공영차고지↔동부공영차고지",
  },
  {
    color: "#FFB200",
    name: "519",
    description: "서울시 순환버스",
    track: "구로역↔오류동차고지",
  },
  {
    color: "#FF4F4F",
    name: "7719",
    description: "서울시 광역버스",
    track: "서부공영차고지↔동부공영차고지",
  },
];

export const stopTemp = [
  {
    title: "수원고등법원.수원고등검찰청.광교호수공원",
    number: "04270",
    description: "원천호수사거리.광교더리브 방향",
  },
  {
    title: "수원고등법원.수원고등검찰청.광교호수공원",
    number: "04276",
    description: "이의초등고교.광교호수마을호반써밋 방향",
  },
  {
    title: "수원고등법원.수원시청",
    number: "04140",
    description: "수원사거리차고지 방향",
  },
  {
    title: "영화아파트.수원고등법원",
    number: "04110",
    description: "광교종합차고지 방향",
  },
];

const ResultList = () => {
  const { isBus } = useContext(SearchContext);

  return (
    <section className="px-6 py-3 flex flex-col gap-1.5">
      {isBus ? (
        <>
          {busTemp.map((bus) => (
            <BusItem
              name={bus.name}
              description={bus.description}
              track={bus.track}
              color={bus.color}
            />
          ))}
        </>
      ) : (
        <>
          {stopTemp.map((stop) => (
            <StopItem {...stop} />
          ))}
        </>
      )}
    </section>
  );
};

export default ResultList;
