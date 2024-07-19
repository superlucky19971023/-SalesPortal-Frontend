// React Imports
import { useState } from "react";

// MUI Imports
import Radio from "@mui/material/Radio";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// Component Imports
import CustomAvatar from "@core/components/mui/Avatar";
import CustomTextField from "@core/components/mui/TextField";
import DirectionalIcon from "@components/DirectionalIcon";

// Config Imports
import themeConfig from "@configs/themeConfig";

const Details = ({ activeStep, isLastStep, handleNext, handlePrev }) => {
  // States
  const [value, setValue] = useState("crm");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <Typography variant="h5">Send For Authorization</Typography>
        <CustomTextField
          fullWidth
          label="Confirm Quotation"
          placeholder="confirm quotation"
        />
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

export default Details;
