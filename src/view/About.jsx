import { Button, Stack } from "@mui/material";
import { useReducer } from "react";

const is = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "Inc":
      return { count: state.count + 1 };
    case "Dec":
      return { count: state.count - 1 };
    case "incByVal":
      return { count: state.count + action.payload };
    case "DecByVal":
      return { count: state.count - action.payload };
    default:
      return state;
  }
};

const About = () => {
  const [state, dispatch] = useReducer(reducer, is);
  const no = 100;
  return (
    <>
      <h1>UseReducer use Counter</h1>
      <h2>Count:{state.count}</h2>
      <Stack direction="row" gap={1}>
        <Button
          variant="contained"
          size="small"
          onClick={() => dispatch({ type: "Inc" })}
        >
          Inc
        </Button>
        <Button
          variant="contained"
          size="small"
          onClick={() => dispatch({ type: "Dec" })}
        >
          Dec
        </Button>
        <Button
          variant="contained"
          size="small"
          onClick={() => dispatch({ type: "incByVal", payload: no })}
        >
          {"IncressBy" + no}{" "}
        </Button>
        <Button
          variant="contained"
          size="small"
          onClick={() => dispatch({ type: "DecByVal", payload: 50 })}
        >
          {"DecreseBy" + 50}{" "}
        </Button>
      </Stack>
    </>
  );
};
export default About;
