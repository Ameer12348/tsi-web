import React from "react";
import Select from "react-select";

const CustomSelect = ({
  options,
  onChange,
  className,
  styles,
  value,
  isMulti,
}) => {
  return (
    <Select
      options={options}
      onChange={onChange}
      isSearchable={true}
      className={className}
      value={value}
      isMulti={isMulti}
      styles={{
        control: () => ({
          ...styles,
        }),
      }}
    />
  );
};

export default CustomSelect;
