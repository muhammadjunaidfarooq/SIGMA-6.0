import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1705077296278-d82dd5c8662f?q=80&w=1109&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const HOT_URL =
    "https://plus.unsplash.com/premium_photo-1673264933092-a795ddc9f11b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COOL_URL =
    "https://plus.unsplash.com/premium_photo-1732528576973-f0e592a5178e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="cardContainer">
      <Card sx={{ maxWidth: 545 }}>
        <CardMedia
          sx={{ height: 250 }}
          image={
            info.humidity > 80 ? RAIN_URL : info.temp > 18 ? HOT_URL : COOL_URL
          }
          title="green iguana"
        />
        <CardContent> 
          <Typography gutterBottom variant="h5" component="div">
            {info.city_name}, {info.country_name}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            component={"span"}
          >
            <p>Temperature = {info.temp}&deg;C</p>
            <p>Humidity = {info.humidity}</p>
            <p>Minimum Temperature = {info.temp_min}&deg;C</p>
            <p>Maximum Temperature = {info.temp_max}&deg;C</p>
            <p>
              The weather can be described as <i>{info.weather}</i> and feels
              like {info.feels_like}&deg;C.
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
