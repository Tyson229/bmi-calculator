interface InputBoxProps {
  digit: string;
}

const InputBox = ({ digit }: InputBoxProps) => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        inputMode="numeric"
        onChange={(e) => console.log(e)}
        className="relative w-full rounded-xl border-[#D8E2E7] p-4 text-2xl font-bold placeholder:opacity-25"
        placeholder="0"
      />
      <span className="absolute right-4 top-[25%] select-auto text-2xl font-bold text-[#345FF6]">
        {digit}
      </span>
    </div>
  );
};

export default InputBox;
