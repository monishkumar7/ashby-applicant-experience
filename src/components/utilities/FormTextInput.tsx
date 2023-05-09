import { useField } from 'formik';

type TextInputProps = {
  label: string;
  name: string;
  type: string;
  placeholder: string;
};

export default function FormTextInput({ label, ...props }: TextInputProps) {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col space-y-1">
      <label
        className="text-sm font-semibold text-gray-500"
        htmlFor={props.name}
      >
        {label}
      </label>
      <input
        className="rounded border-[0.5px] border-ashby-100 px-2 py-1"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-right text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
}
