import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from '@mui/material/TextField';
import { FilterAction, Filters } from "../reusableComponents/posts";
import { Box, OutlinedInput } from '@mui/material';

interface ToolBarProps {
    filters: Filters;
    dispatchFilters: React.Dispatch<FilterAction>;
  }

const ToolBar = ({filters  , dispatchFilters }:ToolBarProps)  => {
console.log("filters ", filters)
  return  (
    <Box>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                label="Start Date"
                value={filters?.date?.startDate}
                onChange={(newValue:any) => {
                    console.log("newValue " ,newValue.toString())
                    dispatchFilters({ type: "STARTDATE", value: newValue});
                }}
                renderInput={(params:any) => <TextField {...params} />}
            />
            <DatePicker
                label="End Date"
                value={filters?.date?.endDate}
                onChange={(newValue:any) => {
                    dispatchFilters({ type: "ENDDATE", value: newValue });
                }}
                renderInput={(params:any) => <TextField {...params} />}
            />
        </LocalizationProvider>
        <OutlinedInput 
        value={filters?.price?.min}
        onChange={(e:any) => {
            dispatchFilters({ type: "MINPRICE", value: e.target.value?.toString() || "" });
        }}
        />
    </Box>
  )
 
};

export default ToolBar;
