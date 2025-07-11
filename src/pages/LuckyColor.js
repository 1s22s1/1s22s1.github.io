import { Button, Grid } from "@mui/material";

const LuckyColor = () => {
    const fortuneTelling = () => {
        console.log("call");
    }

    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            style={{ height: '100vh' }}
        >
            <Button variant="outlined" onClick={fortuneTelling}>占う</Button>
        </Grid>
    )
}

export default LuckyColor;
