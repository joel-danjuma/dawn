const COMMON_CLASS_NAMES =
  "bg-transparent outline-none border-1 border-white/60 rounded-md px-3";

function Input({ type, name, id }: { type: string; name: string; id: string }) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      required
      className={COMMON_CLASS_NAMES}
    />
  );
}

type SelectOptions = {
  value: string;
  label: string;
  selected?: boolean;
};

function Select({
  options,
  name,
  id,
}: {
  options: SelectOptions[];
  name: string;
  id: string;
}) {
  return (
    <select className={COMMON_CLASS_NAMES} name={name} id={id}>
      {options.map((option, idx) => (
        <option
          key={`${option.label}_${idx}`}
          value={option.value}
          selected={option.selected}
          className="text-black"
        >
          {option.label}
        </option>
      ))}
    </select>
  );
}

export { Input, Select };
