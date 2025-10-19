import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
  return (
    <div className="p-4">
      <div className="flex justify-end gap-4">
        <Button
          variant="primary"
          text="Add content"
          startIcon={<PlusIcon size="md" />}
        ></Button>
        <Button
          variant="secondary"
          text="Share brain"
          startIcon={<ShareIcon size="md" />}
        ></Button>
      </div>
      <div className="flex gap-4">
        <Card
          type="youtube"
          link="https://www.youtube.com/watch?v=4GESesYh3I4"
          title="kirat"
        />
        <Card
          type="youtube"
          link="https://www.youtube.com/watch?v=4GESesYh3I4"
          title="kirat"
        />
      </div>
    </div>
  );
}

export default App;
