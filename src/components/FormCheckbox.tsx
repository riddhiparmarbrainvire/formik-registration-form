import React from "react";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (isChecked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label>{label}</label>
    </div>
  );
};

export default Checkbox;
