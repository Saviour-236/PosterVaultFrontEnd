import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { FilterAction, Filters } from "../reusableComponents/posts";
import { Box, OutlinedInput } from '@mui/material';
import CategoriesButton from '../reusableComponents/Buttons/categoriesButton';

interface ToolBarProps {
    filters: Filters;
    dispatchFilters: React.Dispatch<FilterAction>;
  }

const ToolBar = ({filters  , dispatchFilters }:ToolBarProps)  => {
// console.log("filters ", filters)
  return  (
    <Box sx={{padding:"10px" , display:'flex' , gap:"10px",justifyContent: 'flex-end' }}>
        <OutlinedInput 
        value={filters?.price?.min}
        placeholder='Search here....'
        onChange={(e:any) => {
            dispatchFilters({ type: "MINPRICE", value: e.target.value?.toString() || "" });
        }}
        sx={{ borderRadius: '10px',}}
        />
        <CategoriesButton dispatchFilters={dispatchFilters}/>
        <LocalizationProvider dateAdapter={AdapterDayjs}  >
            <DatePicker
                label="Start Date"
                value={filters?.date?.startDate}
                onChange={(newValue:any) => {
                    dispatchFilters({ type: "STARTDATE", value: newValue.toString()});
                }}
                sx={{
                    '& label.MuiInputLabel-shrink': {
                      fontSize: '16px',
                      fontWeight: 700,
                      transform: 'translate(15px, -4px) scale(0.85)'
                    },
                    '& .MuiOutlinedInput-root': {
                    borderRadius: '10px',
                    top: '5px',   // Move it up or down
                    left: '5px',   
                    },
                    '& .MuiInputBase-input': {
                        padding: '10px',
                        maxWidth:"80px"
                    }
                  }}
             />
            <DatePicker
                label="End Date"
                value={filters?.date?.endDate}
                onChange={(newValue:any) => {
                    dispatchFilters({ type: "ENDDATE", value: newValue });
                }}
                sx={{
                    '& label.MuiInputLabel-shrink': {
                      fontSize: '16px',
                      fontWeight: 700,
                      transform: 'translate(15px, -4px) scale(0.85)'
                    },
                    '& .MuiOutlinedInput-root': {
                    borderRadius: '10px',
                    top: '5px',   // Move it up or down
                    left: '5px',     
                    },
                    '& .MuiInputBase-input': {
                        padding: '10px',
                        maxWidth:"80px"
                    }
                  }}
            />
        </LocalizationProvider>
    </Box>
  )
 
};

export default ToolBar;
