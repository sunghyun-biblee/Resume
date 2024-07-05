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
    <li className="mb-2 px-1 tracking-tight">
      <div className="flex justify-between">
        <div className="flex items-end">
          <h2 className="text-xl font-semibold">{item.title}</h2>
          {item.summary && (
            <span className="text-gray-500 inline-block ml-2 ">
              {item.summary}
            </span>
          )}
        </div>
        <span className="text-gray-400 font-light">{item.date}</span>
      </div>
    </li>
  );
};
