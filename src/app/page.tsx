import { Button } from "@heroui/button";
import { AiFillAndroid } from "react-icons/ai";

export default function Home() {
  return (
    <div>
      <h1>Friend social!!</h1>
      <Button
        color="primary"
        variant="bordered"
        startContent={<AiFillAndroid />}
      >
        {" "}
        add
      </Button>
    </div>
  );
}
