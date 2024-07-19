// React Imports
import { useState } from "react";

// MUI Imports
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";
import CustomTextField from "@core/components/mui/TextField";

// Component Imports
import CustomAvatar from "@core/components/mui/Avatar";
import DirectionalIcon from "@components/DirectionalIcon";

const FrameWork = ({ activeStep, isLastStep, handleNext, handlePrev }) => {
  // States
  const [value, setValue] = useState("react");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <Typography variant="h5">Create Contract</Typography>
      </div>
      <div className="flex items-center gap-2.5 is-fit bg-actionHover rounded plb-[5px] pli-2.5">
        <img
          height={20}
          alt="contract_signature.pdf"
          src="/images/icons/pdf-document.png"
        />
        <Typography className="font-medium">contract_signature.pdf</Typography>
        <Button>Attachment</Button>
      </div>
      <div className="flex flex-col gap-4">
        <CustomTextField
          fullWidth
          label="Enter SMS or mail"
          placeholder="enter SMS or Mail"
        />
        <Button>Confirm</Button>
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

export default FrameWork;
