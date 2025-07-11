import { Button, Grid } from "@mui/material";

const LuckyColor = () => {
    const fortuneTelling = () => {
        console.log("call");
    }

    const text = "今日のラッキーカラーは、(r, g, b)です。"

    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            style={{ height: '100vh' }}
        >
            <div>
                <Button variant="outlined" onClick={fortuneTelling}>占う</Button>

                <p>{text}</p>
            </div>
        </Grid>
    )
}

export default LuckyColor;
