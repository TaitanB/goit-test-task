import React, { useState, useEffect } from "react";

const Selected = ({ handleChange, setPageNumber, setUsers }) => {
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    handleChange(selectedOption);
  }, [selectedOption, handleChange]);

  const handleChangeSelect = (event) => {
    const { value } = event.currentTarget;
    // console.log(event.currentTarget.value);
    // console.log(value);
    setSelectedOption(value);
    setPageNumber(1);
    setUsers([]);
  };

  return (
    <label>
      Selected
      <select defaultValue="" onChange={handleChangeSelect}>
        <option value="">Show all</option>
        <option value="false">Follow</option>
        <option value="true">Following</option>
      </select>
    </label>
  );
};

export default Selected;
