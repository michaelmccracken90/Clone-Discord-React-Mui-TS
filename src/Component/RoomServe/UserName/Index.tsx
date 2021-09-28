import { Box } from "@mui/material";

// Theme 
import theme from '../../../Styles/Theme'

export default function UserName() {
  return (
    <Box sx={{
      height: '52px',
      background: theme.background.user
    }}>
    </Box>
  )
}