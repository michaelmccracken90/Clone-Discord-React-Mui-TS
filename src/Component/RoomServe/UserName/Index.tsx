// Import Component Material UI
import { Box } from "@mui/material";

// Import Context Theme Styled
import theme from '../../../Styles/Theme'

// Export Componenet 
export default function UserName() {
  // HTML Exported
  return (
    <Box sx={{
      height: '52px',
      background: theme.background.user
    }}>
    </Box>
  )
}