"use client";

// React Imports
import { useState } from "react";

// MUI Imports
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import TableComponent from "./component";

// Component Imports
import Logo from "@components/layout/shared/Logo";

const AddAction = ({ resData }) => {
  return (
    <>
      <Card>
        <CardContent className="sm:!p-12">
          <Grid item xs={12}>
            <div className="p-6 bg-actionHover rounded">
              <div className="flex justify-between gap-4 flex-col sm:flex-row">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-2.5">
                    <Logo />
                  </div>
                  <div>
                    <Typography color="text.primary">
                      This is field of all customers
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <Divider className="border-dashed" />
            </Grid>
            <Grid item xs={12}>
              <TableComponent
                resData={resData}
              />
            </Grid>
            <Grid item xs={12}>
              <Divider className="border-dashed" />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default AddAction;
