import { useFormContext } from "react-hook-form";

type Props = {
  options: readonly string[];
  defaultMessage: string;
  label: string;
  name: string;
};

function Select({ options, defaultMessage, label, name }: Props) {
  const { register, formState, getFieldState } = useFormContext();
  const { error } = getFieldState(name, formState);
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <select
        {...register(name)}
        className="form-select"
        aria-label="Default select example"
      >
        <option>{defaultMessage}</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      {error?.message && <p className="text-danger">{error?.message}</p>}
    </div>
  );
}

export default Select;
