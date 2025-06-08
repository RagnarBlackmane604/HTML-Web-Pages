const DropDown = ({ label, options, value, onChange }) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm font-semibold">{label}</label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border px-2 py-1 rounded"
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

export default DropDown;
