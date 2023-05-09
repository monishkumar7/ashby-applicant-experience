import { useField } from 'formik';

type TextInputProps = {
  label: string;
  name: string;
  options: string[];
};

export default function FormYesNo({
  label,
  options,
  ...props
}: TextInputProps) {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col space-y-1">
      <label
        className="text-sm font-semibold text-gray-500"
        htmlFor={props.name}
      >
        {label}
      </label>
      {options && (
        <div className="flex flex-col space-y-1 w-full">
          {options.map((option, index) => (
            <div className="basis-0 grow">
              <input
                {...field}
                {...props}
                type="radio"
                value={option}
                className="hidden peer"
                name={props.name}
                id={option + index}
              />
              <label htmlFor={option + index} className="radio-group">
                {option}
              </label>
            </div>
          ))}
        </div>
      )}
      {meta.touched && meta.error ? (
        <div className="text-right text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
}
