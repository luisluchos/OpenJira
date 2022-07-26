import { Box, Button, TextField } from "@mui/material";
import React, { ChangeEvent, useContext, useState } from "react";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { EntriesContext } from "../../context/entries";
import { UIContext } from "../../context/ui";

export const NewEntry = () => {
  const { addNewEntry } = useContext(EntriesContext);
  const { openEntryForm, entryFormOpen } = useContext(UIContext);

  const [inputValue, setInputValue] = useState("");
  const [touched, setTouched] = useState(false);

  const onTextFieldChanged = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  const onSave = () => {
    if (inputValue.length === 0) return;
    console.log("save", inputValue);
    addNewEntry(inputValue);
    openEntryForm(false);
    setTouched(false);
    setInputValue("");
  };

  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
      {entryFormOpen ? (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1 }}
            placeholder="New entry"
            autoFocus
            multiline
            label="new Entry"
            error={inputValue.length <= 0 && touched}
            helperText={inputValue.length <= 0 && touched ? "Please enter a description" : ""}
            value={inputValue}
            onChange={onTextFieldChanged}
            onBlur={() => setTouched(true)}
          />
          <Box display="flex" justifyContent="space-around">
            <Button
              variant="outlined"
              color="secondary"
              endIcon={<CancelOutlinedIcon />}
              onClick={() => openEntryForm(false)}
            >
              Discard
            </Button>
            <Button variant="outlined" endIcon={<SaveOutlinedIcon />} onClick={onSave}>
              Save
            </Button>
          </Box>
        </>
      ) : (
        <Button
          variant="outlined"
          startIcon={<AddCircleOutlineOutlinedIcon />}
          fullWidth
          onClick={() => openEntryForm(true)}
        >
          Add Task
        </Button>
      )}
    </Box>
  );
};
