function Input({
  type,
  name,
  id,
}: {
  type: string;
  name: string;
  id: string;
}) {
  return (
    <input type={type} id={id} name={name} required className={"bg-transparent outline-none border-1 border-white/60 rounded-md px-3"} />
  );
}

export { Input };
