const COMMON_CLASS_NAMES =
  "bg-transparent outline-none border-1 border-white/60 rounded-md px-3";

function Input({
  type,
  name,
  id,
  value = "",
}: {
  type: string;
  name: string;
  id: string;
  value?: string;
}) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      required
      className={COMMON_CLASS_NAMES}
      value={value}
    />
  );
}

type SelectOptions = {
  value: string;
  label: string;
};

function Select({
  options,
  name,
  id,
  defaultSelected = "",
}: {
  options: SelectOptions[];
  name: string;
  id: string;
  defaultSelected?: string;
}) {
  return (
    <select
      className={COMMON_CLASS_NAMES}
      name={name}
      id={id}
      defaultValue={defaultSelected}
    >
      {options.map((option, idx) => (
        <option
          key={`${option.label}_${idx}`}
          value={option.value}
          className="text-black"
        >
          {option.label}
        </option>
      ))}
    </select>
  );
}

export { Input, Select };
