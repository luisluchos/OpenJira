import { CardHeader, Grid, Card, CardContent } from "@mui/material";
import type { NextPage } from "next";
import { Layout } from "../components/layouts";
import { EntryList } from "../components/ui/EntryList";
import { NewEntry } from '../components/ui/NewEntry';

const HomePage: NextPage = () => {
  return (
    <div>
      <Layout title={"OpenJira"}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Card sx={{ height: "calc(100vh - 100px)" }}>
              <CardHeader title="Pending" />
              <NewEntry/>
              <EntryList status="pending" />
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Card sx={{ height: "calc(100vh - 100px)" }}>
              <CardHeader title="Progress" />
              <EntryList status="in-progress" />
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Card sx={{ height: "calc(100vh - 100px)" }}>
              <CardHeader title="Done" />
              <EntryList status="finished" />
            </Card>
          </Grid>
        </Grid>
      </Layout>
    </div>
  );
};

export default HomePage;
