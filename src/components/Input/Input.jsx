import "./Input.css";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


function Input({input, index}){
    return(
        <Box className="Input" key={index} sx={{ marginBottom: '10px' }}>
            <TextField 
                label={input.placeholder} 
                value={input.value} 
                onChange={input.onChange ? input.onChange : null}
                variant="standard"
                sx={{
                    width:'90%'
                }}
                />
        </Box>
    )
}

export default Input;