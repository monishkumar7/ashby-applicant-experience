import { useState } from 'react';

type DropdownSelectorProps = {
  label: string;
  elements: string[];
  onValueChange: (value: string) => void;
};

export default function DropdownSelector({
  label,
  elements,
  onValueChange
}: DropdownSelectorProps) {
  const [selected, setSelected] = useState('');

  const handleSelected = (element: string) => {
    setSelected(element);
    onValueChange(element);
  };

  return (
    <div>
      <p>{label}</p>
      <div className="flex space-x-4">
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
