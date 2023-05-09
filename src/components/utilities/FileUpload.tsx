import { useField } from 'formik';

type FileUploadProps = {
  label: string;
  buttonText: string;
  name: string;
  type: string;
};

export default function FileUpload({ label, ...props }: FileUploadProps) {
  const [field, meta, helpers] = useField(props);
  console.log('\field', field);
  return (
    <div className="flex flex-col space-y-1">
      <p className="text-sm font-semibold text-gray-500">{label}</p>
      {meta.value ? (
        <div className="bg-white flex justify-between px-2 py-1">
          <p className="font-medium">{meta.value.split('\\').pop()}</p>
          <button
            className="text-red-500 text-sm"
            type="button"
            onClick={() => {
              helpers.setValue(null);
            }}
          >
            Remove File
          </button>
        </div>
      ) : (
        <>
          <label
            className="bg-white text-center text-ashby-700 border-[0.5px] rounded border-ashby-700 px-2 py-1"
            htmlFor={props.name + label}
          >
            {props.buttonText}
          </label>
          <input
            id={props.name + label}
            className="hidden"
            {...field}
            {...props}
          />
        </>
      )}

      {meta.touched && meta.error ? (
        <div className="text-right text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
}
