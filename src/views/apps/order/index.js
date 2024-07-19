"use client";

// React Imports
import { useState } from "react";

// MUI Imports
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import CreateApp from "@components/dialogs/create-app";
import OpenDialogOnElementClick from "@components/dialogs/OpenDialogOnElementClick";

// Third-party Imports
import classnames from "classnames";

// Component Imports
import Logo from "@components/layout/shared/Logo";
import { CardActions } from "@mui/material";

const AddAction = ({ resData }) => {
  // States
  const [count, setCount] = useState(1);
  const [url, setUrl] = useState("");
  const [statusOrder, setStatusOrder] = useState(false);
  const [statusFavor, setStatusFavor] = useState(false);
  const [statusCart, setStatusCart] = useState(false);

  const buttonProps = {
    variant: "contained",
    children: "Option",
  };

  // Hooks
  const isBelowMdScreen = useMediaQuery((theme) =>
    theme.breakpoints.down("md")
  );
  const isBelowSmScreen = useMediaQuery((theme) =>
    theme.breakpoints.down("sm")
  );

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
                      This is field of order management
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
            <Grid
              item
              xs={12}
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Button onClick={() => setStatusOrder((prev) => !prev)}>
                {statusOrder ? (
                  <i className="tabler-sort-descending" />
                ) : (
                  <i className="tabler-sort-ascending" />
                )}
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Stack spacing={2}>
                <Pagination count={10} color="primary" />
              </Stack>
            </Grid>
            {resData.map((item, index) => (
              <Grid item xs={3} key={index}>
                <Card sx={12}>
                  <CardContent>
                    <Grid container style={{ alignItems: "center" }}>
                      <Grid item xs={10}>
                        <Typography
                          sx={{ fontSize: 14 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          {item.name}
                        </Typography>
                      </Grid>
                      <Grid item xs={1}>
                        <Typography sx={{ fontSize: 14 }}>
                          <Button
                            onClick={() => setStatusFavor((prev) => !prev)}
                          >
                            {statusFavor ? (
                              <i className="tabler-heart" />
                            ) : (
                              <i className="tabler-heart-filled" />
                            )}
                          </Button>
                          <Button
                            onClick={() => setStatusCart((prev) => !prev)}
                          >
                            {statusCart ? (
                              <i className="tabler-shopping-cart" />
                            ) : (
                              <i className="tabler-shopping-cart-filled" />
                            )}
                          </Button>
                        </Typography>
                      </Grid>
                    </Grid>
                    <Typography
                      variant="h5"
                      component="div"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={item.url}
                        className="object-contain bs-[100px] md:bs-[150px] lg:bs-[200px] mbs-10 md:mbs-14 lg:mbs-20"
                      />
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <OpenDialogOnElementClick
                      element={Button}
                      elementProps={buttonProps}
                      dialog={CreateApp}
                    />
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Grid
            item
            xs={12}
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Stack spacing={2}>
              <Pagination count={10} color="primary" />
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Divider className="border-dashed" />
          </Grid>
          <Grid item xs={12}>
            {Array.from(Array(count).keys()).map((item, index) => (
              <div
                key={index}
                className={classnames(
                  "repeater-item flex relative mbe-4 border rounded",
                  {
                    "mbs-8": !isBelowMdScreen,
                    "!mbs-14": index !== 0 && !isBelowMdScreen,
                    "gap-5": isBelowMdScreen,
                  }
                )}
              ></div>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default AddAction;
