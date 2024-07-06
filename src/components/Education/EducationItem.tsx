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
        <div className="flex items-center">
          <h2 className="text-base font-medium">{item.title}</h2>
          {item.summary && (
            <p className="text-gray-500 inline-block ml-2 text-sm">
              {item.summary}
            </p>
          )}
        </div>
        <span className="text-gray-400 font-light text-sm">{item.date}</span>
      </div>
    </li>
  );
};
