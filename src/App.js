import { useDispatch, useSelector } from "react-redux";
import Enfant from "./components/Enfant";
import { colorAction } from "./redux/action";

function App() {
  const { listColors } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        {listColors.map((color) => {
          return (
            <li
              style={{ color: color, cursor: "pointer" }}
              onClick={() => dispatch(colorAction(color))}
              key={color}
            >
              {color}
            </li>
          );
        })}
      </ul>
      <Enfant />
    </div>
  );
}

export default App;
