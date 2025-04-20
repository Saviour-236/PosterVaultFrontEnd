import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from '@mui/material/TextField';
import { FilterAction, Filters } from "../reusableComponents/posts";
import { Box, OutlinedInput } from '@mui/material';
import CategoriesButton from '../reusableComponents/Buttons/categoriesButton';

interface ToolBarProps {
    filters: Filters;
    dispatchFilters: React.Dispatch<FilterAction>;
  }

const ToolBar = ({filters  , dispatchFilters }:ToolBarProps)  => {
console.log("filters ", filters)
  return  (
    <Box sx={{padding:"10px" , display:'flex' , gap:"20px",justifyContent: 'flex-end' }}>
        <OutlinedInput 
        value={filters?.price?.min}
        placeholder='Search here....'
        onChange={(e:any) => {
            dispatchFilters({ type: "MINPRICE", value: e.target.value?.toString() || "" });
        }}
        sx={{ borderRadius: '10px',}}
        />
        <CategoriesButton />
        <LocalizationProvider dateAdapter={AdapterDayjs}  >
            <DatePicker
                label="Start Date"
                value={filters?.date?.startDate}
                onChange={(newValue:any) => {
                    console.log("newValue " ,newValue.toString())
                    dispatchFilters({ type: "STARTDATE", value: newValue});
                }}
                sx={{
                    '& label.MuiInputLabel-shrink': {
                      fontSize: '16px',
                      fontWeight: 700,
                    //   paddingX:"5px"
                    },
                    '& .MuiOutlinedInput-root': {
                    borderRadius: '10px',
                    },
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
                sx={{
                    '& label.MuiInputLabel-shrink': {
                      fontSize: '16px',
                      fontWeight: 700,
                    //   paddingX:"5    px"
                    },
                    '& .MuiOutlinedInput-root': {
                    borderRadius: '10px',
                    },
                  }}
            />
        </LocalizationProvider>
    </Box>
  )
 
};

export default ToolBar;
