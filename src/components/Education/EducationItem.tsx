import React from "react";

interface IEducationType {
  item: {
    title: string;
    date: string;
    summary: string | null;
  };
}
export const EducationItem = ({ item }: IEducationType) => {
  return (
    <li className="mb-7 px-1 tracking-tight">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold">{item.title}</h2>
        <span className="text-gray-400 font-medium">{item.date}</span>
      </div>
      {item.summary && (
        <span className="text-gray-500 pl-1 pt-2 inline-block ">
          {item.summary}
        </span>
      )}
    </li>
  );
};
