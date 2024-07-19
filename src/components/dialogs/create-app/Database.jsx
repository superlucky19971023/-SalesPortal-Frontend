// React Imports
import { useState } from "react";

// MUI Imports
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";

// Component Imports
import CustomAvatar from "@core/components/mui/Avatar";
import CustomTextField from "@core/components/mui/TextField";
import DirectionalIcon from "@components/DirectionalIcon";

// Config Imports
import themeConfig from "@configs/themeConfig";

const DataBase = ({ activeStep, isLastStep, handleNext, handlePrev }) => {
  // States
  const [value, setValue] = useState("firebase");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <Typography variant="h5">Flag The Order</Typography>
        <div
          onClick={() => setValue("firebase")}
          className="flex items-center justify-between cursor-pointer gap-4"
        >
          <div className="flex items-center gap-3">
            <CustomAvatar
              skin="light"
              color="warning"
              variant="rounded"
              size={46}
            >
              <img
                src="/images/illustrations/quotation/1.png"
                alt="firebase"
                height={30}
                width={30}
              />
            </CustomAvatar>
            <div className="flex flex-col gap-1">
              <Typography color="text.primary" className="font-medium">
                Door_1
              </Typography>
              <Typography variant="body2">Door_1</Typography>
            </div>
          </div>
          <Radio
            value="firebase"
            onChange={handleChange}
            checked={value === "firebase"}
          />
        </div>
        <div
          onClick={() => setValue("aws")}
          className="flex items-center justify-between cursor-pointer gap-4"
        >
          <div className="flex items-center gap-3">
            <CustomAvatar
              skin="light"
              color="secondary"
              variant="rounded"
              size={46}
            >
              <img
                src="/images/illustrations/quotation/3.png"
                alt="aws"
                height={30}
                width={30}
              />
            </CustomAvatar>
            <div className="flex flex-col gap-1">
              <Typography color="text.primary" className="font-medium">
                Door_2
              </Typography>
              <Typography variant="body2">Door_2</Typography>
            </div>
          </div>
          <Radio
            value="aws"
            onChange={handleChange}
            checked={value === "aws"}
          />
        </div>
        <div
          onClick={() => setValue("sql")}
          className="flex items-center justify-between cursor-pointer gap-4"
        >
          <div className="flex items-center gap-3">
            <CustomAvatar skin="light" color="info" variant="rounded" size={46}>
              <CustomAvatar
                skin="light"
                color="secondary"
                variant="rounded"
                size={46}
              >
                <img
                  src="/images/illustrations/quotation/5.png"
                  alt="aws"
                  height={30}
                  width={30}
                />
              </CustomAvatar>
            </CustomAvatar>
            <div className="flex flex-col gap-1">
              <Typography color="text.primary" className="font-medium">
                Door_3
              </Typography>
              <Typography variant="body2">Door_3</Typography>
            </div>
          </div>
          <Radio
            value="sql"
            onChange={handleChange}
            checked={value === "sql"}
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Button
          variant="tonal"
          color="secondary"
          disabled={activeStep === 0}
          onClick={handlePrev}
          startIcon={
            <DirectionalIcon
              ltrIconClass="tabler-arrow-left"
              rtlIconClass="tabler-arrow-right"
            />
          }
        >
          Previous
        </Button>
        <Button
          variant="contained"
          color={isLastStep ? "success" : "primary"}
          onClick={handleNext}
          endIcon={
            isLastStep ? (
              <i className="tabler-check" />
            ) : (
              <DirectionalIcon
                ltrIconClass="tabler-arrow-right"
                rtlIconClass="tabler-arrow-left"
              />
            )
          }
        >
          {isLastStep ? "Submit" : "Next"}
        </Button>
      </div>
    </div>
  );
};

export default DataBase;
