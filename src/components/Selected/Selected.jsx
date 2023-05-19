import React, { useState, useEffect } from "react";

import css from "./Selected.module.css";

const Selected = ({ handleChange, setPageNumber, setUsers }) => {
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    handleChange(selectedOption);
  }, [selectedOption, handleChange]);

  const handleChangeSelect = (event) => {
    const { value } = event.currentTarget;
    setSelectedOption(value);
    setPageNumber(1);
    setUsers([]);
  };

  return (
    <label className={css.selectedLabel}>
      Selected
      <select
        defaultValue=""
        onChange={handleChangeSelect}
        className={css.selected}
      >
        <option value="">Show all</option>
        <option value="false">Follow</option>
        <option value="true">Following</option>
      </select>
    </label>
  );
};

export default Selected;
