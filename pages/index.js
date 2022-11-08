import { useDispatch } from "react-redux";
import { UsersComponent } from "../features/users/UsersComponent";

export default function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <UsersComponent />
    </>
  );
}
