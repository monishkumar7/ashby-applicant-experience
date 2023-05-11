import { useState, useEffect } from 'react';

type DropdownSelectorProps = {
  label: string;
  elements: string[];
  preSelected: string;
  onValueChange: (value: string) => void;
};

export default function DropdownSelector({
  label,
  elements,
  preSelected,
  onValueChange
}: DropdownSelectorProps) {
  const [userSelected, setUserSelected] = useState(preSelected);

  useEffect(() => {
    setUserSelected(preSelected);
  }, [preSelected]);

  const handleSelected = (element: string) => {
    setUserSelected(element);
    onValueChange(element);
  };

  return (
    <div>
      <p className="section-header mb-1">{label}</p>
      <div className="flex space-x-4 whitespace-nowrap overflow-x-auto max-w-full">
        {elements.map((element) => (
          <div onClick={() => handleSelected(element)}>
            {userSelected === element ? (
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
