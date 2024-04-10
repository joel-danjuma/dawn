import React from "react";
import { Checkbox, CheckboxGroup } from "@nextui-org/react";

const items = [
  {
    title: "Seeker",
    description: "Committed to personal development and seeks new information.",
  },
  {
    title: "Career Changer",
    description: "Approaches learning from a market-oriented perspective",
  },
  {
    title: "Craftsman",
    description: "Self-directed learner who values depth over breadth.",
  },
  {
    title: "Achiever",
    description:
      "Collaborative learner who prioritizes group-oriented learning.",
  },
  {
    title: "Enchanter",
    description:
      "Values experiential education and prioritizes group-based learning.",
  },
  {
    title: "Innovator",
    description: "Prioritizes creativity and problem-solving.",
  },
  {
    title: "Global Citizen",
    description: "Values cultural exchange and international collaboration.",
  },
  {
    title: "Self-Starter",
    description: "Highly motivated and driven to succeed.",
  },
];

export const CustomCheckbox = ({selected, setSelected}: {setSelected: (selected: string) => void, selected: string}) => {

  const handleCheckboxChange = (itemTitle: string) => {
    // If the item is already selected, clear the selection
    if (selected === itemTitle) {
      setSelected("");
    } else {
      // Otherwise, select the new item
      setSelected(itemTitle);
    }
  };

  return (
    <div className="grid grid-flow-row grid-cols-2 gap-6 max-w-full place-items-center ">
      <>
        {items.map((item, i) => (
          <Checkbox
            key={i}
            isDisabled={selected !== "" && selected !== item.title}
            className="flex items-center w-full h-fit lg:justify-start justify-center lg:col-span-1 col-span-full cursor-pointer rounded-lg gap-2 border-2 border-transparent lg:w-[300px] lg:h-[80px] bg-content1"
            value={item.title}
            checked={selected === item.title}
            onChange={() => handleCheckboxChange(item.title)}
          >
            <div className="flex-col justify-start items-start gap-2">
              <h3 className="text-sm font-bold">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          </Checkbox>
        ))}
      </>
    </div>
  );
};
