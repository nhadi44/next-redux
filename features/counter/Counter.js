import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./couterSlicer";

export const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}> + </button>
      <button onClick={() => dispatch(decrement())}> - </button>
    </div>
  );
};
