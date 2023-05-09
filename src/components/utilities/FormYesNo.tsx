import { useField } from 'formik';

type TextInputProps = {
  question: string;
  questionDetails: string;
  name: string;
};

export default function FormYesNo({
  question,
  questionDetails,
  ...props
}: TextInputProps) {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col space-y-1">
      <label
        className="text-sm font-semibold text-gray-500"
        htmlFor={props.name}
      >
        {question} <br />
        <span className="font-normal">{questionDetails}</span>
      </label>
      <div className="flex space-x-2 w-full">
        <div className="basis-0 grow">
          <input
            {...field}
            {...props}
            type="radio"
            value="Yes"
            className="hidden peer"
            name={props.name}
            id={props.name + '-yes'}
          />
          <label htmlFor={props.name + '-yes'} className="radio-button">
            Yes
          </label>
        </div>
        <div className="basis-0 grow">
          <input
            {...field}
            {...props}
            type="radio"
            value="No"
            className="hidden peer"
            name={props.name}
            id={props.name + '-no'}
          />
          <label htmlFor={props.name + '-no'} className="radio-button">
            No
          </label>
        </div>
      </div>
      {meta.touched && meta.error ? (
        <div className="text-right text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
}
