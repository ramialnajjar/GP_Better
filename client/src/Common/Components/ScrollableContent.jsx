import { styled } from "@mui/system";

// Third Party
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

const ScrollableContent = styled(PerfectScrollbar)({
  height: "100%",
  padding: "3rem",
  overflow: "auto",
});

export default ScrollableContent;
