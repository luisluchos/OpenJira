import React, { ChangeEvent, useState, useMemo } from "react";
import { Layout } from "../../components/layouts/Layout";
import {
  Card,
  Grid,
  CardHeader,
  TextField,
  CardContent,
  CardActions,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  capitalize,
  IconButton,
} from "@mui/material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { EntryStatus } from "../../interfaces";
import { log } from "console";
import { GetServerSideProps } from "next";
import { isValidObjectId } from "mongoose";

const validStatus: EntryStatus[] = ["pending", "in-progress", "finished"];

interface Props {
  id: string;
}

const EntryPage = (props: Props) => {
  console.log(props);
  const [inputValue, setInputValue] = useState("");
  const [status, setStatus] = useState<EntryStatus>("pending");
  const [touched, setTouched] = useState(false);

  //memorizamos el valor para que no estemos todo el rato validado  el input
  const isNotValid = useMemo(() => touched && inputValue.length <= 0, [touched, inputValue]);

  const onInputChanged = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  const onStatusChanged = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setStatus(event.target.value as EntryStatus);
  };

  const onSave = () => {
    console.log("save", inputValue, status);
  };

  return (
    <Layout title="....">
      <Grid container justifyContent="center" sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardHeader title={`Entrada: ${inputValue}`} subheader={`Creada hace x minutos`} />
            <CardContent>
              <TextField
                sx={{ marginTop: 2, marginBottom: 2 }}
                label="New entry"
                fullWidth
                placeholder="New Entry"
                autoFocus
                multiline
                onBlur={() => setTouched(true)}
                onChange={onInputChanged}
                helperText={isNotValid ? "Please enter a description" : ""}
                error={isNotValid}
              />
              <FormControl>
                <FormLabel>Status:</FormLabel>
                <RadioGroup row value={status} onChange={onStatusChanged}>
                  {validStatus.map((status) => (
                    <FormControlLabel
                      key={status}
                      value={status}
                      control={<Radio />}
                      label={capitalize(status)}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </CardContent>

            <CardActions>
              <Button
                onClick={onSave}
                disabled={inputValue.length < 1}
                variant="contained"
                fullWidth
                endIcon={<SaveOutlinedIcon />}
              >
                Save
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <IconButton sx={{ position: "fixed", bottom: 30, right: 30, backgroundColor: "error.main" }}>
        <DeleteForeverOutlinedIcon />
      </IconButton>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.params!.id;

  //si no es un id valido,de momgoose redirigimos a la pagina de error

  if (!isValidObjectId(id)) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }


  return {
    props: { id },
  };
};

export default EntryPage;
