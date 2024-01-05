import { Box, CircularProgress } from "@mui/material";
const Fallback = () => {
  return (
    <div className="flex justify-center align-middle p-4">
      <Box>
        <CircularProgress />
      </Box>
    </div>
  );
};
export default Fallback;
