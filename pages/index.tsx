import { Typography } from "@mui/material";
import type { NextPage } from "next";
import { Layout } from "../components/layouts";

const HomePage: NextPage = () => {
  return (
    <div>
      <Layout title={"OpenJira"}>
        <Typography variant="h1" color="primary">
          Holaaaa
        </Typography>
      </Layout>
    </div>
  );
};

export default HomePage;
