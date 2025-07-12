import { Button, Grid } from "@mui/material";
import { useState } from "react";

const LuckyColor = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    const [clicked, setClicked] = useState(false);

    const fortuneTelling = () => {
        setRed(Math.floor(Math.random() * 256));
        setGreen(Math.floor(Math.random() * 256));
        setBlue(Math.floor(Math.random() * 256));
        setClicked(true);
    }

    const text = `今日のラッキーカラーは、(${red}, ${green}, ${blue})です。`
    const boxStyle = {
        display: "inline-block",
        height: "24px",
        width: "24px",
        margin: "4px",
        backgroundColor: `rgb(${red}, ${green}, ${blue})`
    }

    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            style={{ height: '100vh' }}
        >
            <div>
                <Button variant="outlined" onClick={fortuneTelling}>占う</Button>
                {clicked &&
                    <div style={{ display: "flex", alignItems: "center", marginTop: "12px" }}>
                        <span style={boxStyle} />
                        <span>{text}</span>
                    </div>
                }
            </div>
        </Grid>
    )
}

export default LuckyColor;
