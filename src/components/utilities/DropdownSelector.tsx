import { useState } from 'react';

type DropdownSelectorProps = {
  label: string;
  elements: string[];
  defaultSelected: string;
  onValueChange: (value: string) => void;
};

export default function DropdownSelector({
  label,
  elements,
  defaultSelected,
  onValueChange
}: DropdownSelectorProps) {
  const [selected, setSelected] = useState(defaultSelected);

  const handleSelected = (element: string) => {
    setSelected(element);
    onValueChange(element);
  };

  return (
    <div>
      <p className="section-header mb-1">{label}</p>
      <div className="flex space-x-4 whitespace-nowrap overflow-x-auto max-w-full">
        {elements.map((element) => (
          <div onClick={() => handleSelected(element)}>
            {selected === element ? (
              <p className="rounded-xl bg-ashby-700 text-white text-center px-4">
                {element}
              </p>
            ) : (
              <p className="rounded-xl bg-ashby-100 text-center px-4">
                {element}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
