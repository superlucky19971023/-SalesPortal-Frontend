"use client";

// React Imports
import { useState } from "react";
import Link from "next/link";

// MUI Imports
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import useMediaQuery from "@mui/material/useMediaQuery";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

// Third-party Imports
import classnames from "classnames";

// Component Imports
import AddCustomerDrawer, { initialFormData } from "./AddCustomerDrawer";
import Logo from "@components/layout/shared/Logo";
import CustomTextField from "@core/components/mui/TextField";
import { TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 4,
  px: 14,
  pb: 4,
};

const AddAction = ({ resData }) => {
  // States
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(1);
  const [selectData, setSelectData] = useState(null);
  const [formData, setFormData] = useState(initialFormData);
  const [modalVisible, setVisibleModal] = useState(false);
  const [url, setUrl] = useState("");
  const [statusOrder, setStatusOrder] = useState(false);
  const [statusFavor, setStatusFavor] = useState(false);
  const [statusCart, setStatusCart] = useState(false);

  // Hooks
  const isBelowMdScreen = useMediaQuery((theme) =>
    theme.breakpoints.down("md")
  );

  const onFormSubmit = (data) => {
    setFormData(data);
  };

  const showModal = (item) => {
    setSelectData(item);
    setUrl(item.url);
    setVisibleModal(true);
  };

  const closeModal = () => {
    setVisibleModal(false);
  };

  return (
    <>
      <Card>
        <CardContent className="sm:!p-12">
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <div className="p-6 bg-actionHover rounded">
                <div className="flex justify-between gap-4 flex-col sm:flex-row">
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-2.5">
                      <Logo />
                    </div>
                    <div>
                      <Typography color="text.primary">
                        This is field of product details
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12}>
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
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <img
                        src={item.url}
                        onClick={() => showModal(item)}
                        style={{
                          cursor: "pointer",
                        }}
                        className="object-contain bs-[100px] md:bs-[150px] lg:bs-[200px] mbs-10 md:mbs-14 lg:mbs-20"
                      />
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="default"
                      component={Link}
                      target="_blank"
                      href={`https://google.com/${item.id}`}
                    >
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
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
          </Grid>
        </CardContent>
      </Card>
      <AddCustomerDrawer
        open={open}
        setOpen={setOpen}
        onFormSubmit={onFormSubmit}
      />
      <Modal
        open={modalVisible}
        onClose={closeModal}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 1200 }}>
          <Grid
            container
            spacing={4}
          >
            <Grid item xs={6} style={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
              <img
                src={url}
                className="object-contain bs-[300px] md:bs-[350px] lg:bs-[400px] mbs-10 md:mbs-14 lg:mbs-20"
                style={{
                  display: "flex",
                  justifyContent: "center"
                }}
              />
            </Grid>
            <Grid item xs={6} style={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
              <div className="flex justify-between flex-col gap-4 flex-wrap sm:flex-row">
                <div className="flex flex-col gap-4">
                  {selectData?.id ? (
                    <div>
                      <Typography>{selectData?.name}</Typography>
                      <Typography>{selectData?.company}</Typography>
                      <Typography>{selectData?.address}</Typography>
                      <Typography>{selectData?.contact}</Typography>
                      <Typography>{selectData?.companyEmail}</Typography>
                    </div>
                  ) : (
                    <div>
                      <Typography>{formData?.name}</Typography>
                      <Typography>{formData?.company}</Typography>
                      <Typography>{formData?.address}</Typography>
                      <Typography>{formData?.contactNumber}</Typography>
                      <Typography>{formData?.email}</Typography>
                    </div>
                  )}
                </div>
              </div>{" "}
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
};

export default AddAction;
