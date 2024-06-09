import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import "./App.css";
import "./Calculator.css"; // Optional, for styling
import { useEffect, useState } from "react";

function App() {
  const [displayValue, setDisplayValue] = useState("");
  const appendNumber = (number) => {
    setDisplayValue((prev) => {
      if (prev === "0" && number !== ".") {
        return number;
      } else {
        return prev + number;
      }
    });
  };
  const clearDisplay = () => {
    setDisplayValue("0");
  };

  const deleteNumber = () => {
    setDisplayValue((prev) => {
      const newValue = prev.slice(0, -1);
      return newValue === "" ? "0" : newValue;
    });
  };

  const compute = () => {
    try {
      setDisplayValue((prev) => eval(prev).toString());
    } catch {
      setDisplayValue("Error");
    }
  };

  useEffect(() => {
    // This effect runs when displayValue changes
  }, [displayValue]);
  return (
    // <div className="App">
    //   <h1>Calculator App</h1>
    //   <div className="calculator">
    //     <div id="display" className="display">
    //       {/* <input
    //         type="text"
    //         value={displayValue == "" ? 0 : displayValue}
    //         onChange={(e) => setDisplayValue(e.target.value)}
    //       /> */}
    //       {displayValue === "" ? 0 : displayValue}
    //     </div>
    //     <div className="buttons">
    //       <button onClick={() => appendNumber("1")}>1</button>
    //       <button onClick={() => appendNumber("2")}>2</button>
    //       <button onClick={() => appendNumber("3")}>3</button>
    //       <button onClick={() => appendNumber("4")}>4</button>
    //       <button onClick={() => appendNumber("5")}>5</button>
    //       <button onClick={() => appendNumber("6")}>6</button>
    //       <button onClick={() => appendNumber("7")}>7</button>
    //       <button onClick={() => appendNumber("8")}>8</button>
    //       <button onClick={() => appendNumber("9")}>9</button>
    //       <button onClick={() => appendNumber("0")}>0</button>
    //       <button onClick={() => appendNumber(".")}>.</button>
    //       <button onClick={clearDisplay}>C</button>
    //       <button onClick={deleteNumber}>DEL</button>
    //       <button onClick={() => appendNumber("+")}>+</button>
    //       <button onClick={() => appendNumber("-")}>-</button>
    //       <button onClick={() => appendNumber("*")}>*</button>
    //       <button onClick={() => appendNumber("/")}>/</button>
    //       <button onClick={compute}>=</button>
    //     </div>
    //   </div>
    // </div>
    <Container maxWidth="xs">
      <Typography variant="h3" align="center" gutterBottom>
        Calculator App
      </Typography>
      <Paper elevation={3} className="calculator">
        <Box className="display" p={2} mb={2}>
          <Typography variant="h4" align="right">
            {displayValue === "" ? 0 : displayValue}
          </Typography>
        </Box>
        <Grid container spacing={1} className="buttons" sx={{justifyContent:'space-around', justifyItems:'center'}}>
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", "+"].map((label) => (
            <Grid item xs={3} key={label}>
              <Button variant="contained" fullWidth onClick={() => appendNumber(label)}>
                {label}
              </Button>
            </Grid>
          ))}
          
          {["-", "*", "/"].map((label) => (
            <Grid item xs={3} key={label}>
              <Button variant="contained" fullWidth onClick={() => appendNumber(label)}>
                {label}
              </Button>
            </Grid>
          ))}
         <Grid item xs={3}>
            <Button variant="contained" fullWidth onClick={clearDisplay}>
              C
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" fullWidth onClick={deleteNumber}>
              DEL
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" fullWidth onClick={compute}>
              =
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default App;
