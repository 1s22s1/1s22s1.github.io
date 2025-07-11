import { Button, Grid } from "@mui/material";

const LuckyColor = () => {
    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            style={{ height: '100vh' }}
        >
            <Button variant="outlined">占う</Button>
        </Grid>
    )
}

export default LuckyColor;
