// MUI Imports
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// Component Imports
import DirectionalIcon from "@components/DirectionalIcon";

const Submit = ({ activeStep, isLastStep, handleNext, handlePrev }) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <Typography variant="h5">Cancel Order</Typography>
        <Button fullWidth>Really Cancel?</Button>
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
              <i className="tablerr-check" />
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

export default Submit;
