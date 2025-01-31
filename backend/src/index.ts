import app from "./server";
import colors from "colors";
import { PORT } from "./config/Process";

app.listen(PORT, () => {
  console.log(colors.blue.bold(`Server running on port ${PORT}`));
});
