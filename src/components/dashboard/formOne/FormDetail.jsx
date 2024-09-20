import { MdOutlineMenu } from "react-icons/md";
import "./formDetail.scss";
import { useContext, useEffect, useRef, useState } from "react";
import { SidebarContext } from "../../../context/SidebarContext";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { addDays } from "date-fns";
import { DateRange } from "react-date-range";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const FormDetail = () => {
  const { openSidebar } = useContext(SidebarContext);

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const [showDatePicker, setShowDatePicker] = useState(false);
  const dateRangeRef = useRef(null);

  const handleInputClick = () => {
    setShowDatePicker(true);
  };

  const handleClickOutside = (event) => {
    if (dateRangeRef.current && !dateRangeRef.current.contains(event.target)) {
      setShowDatePicker(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="form-area-top">
      <div className="area-top-l">
        <h2 className="area-top-title">Dashboard</h2>
      </div>

      <div className="area-top-l">
        <h2 className="area-top-title">Dashboard</h2>
        <form>
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
      >
        Submit
      </Button>
    </form>
      </div>

    </section>
  );
};

export default FormDetail;