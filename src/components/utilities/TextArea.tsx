import { useField } from 'formik';

type TextAreaProps = {
  label: string;
  name: string;
  type: string;
  placeholder: string;
};

export default function FormTextArea({ label, ...props }: TextAreaProps) {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col space-y-1">
      <label
        className="text-sm font-semibold text-gray-500"
        htmlFor={props.name}
      >
        {label}
      </label>
      <textarea
        className="rounded border-[0.5px] border-ashby-100 px-2 py-1 resize-none h-24"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-right text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
}
