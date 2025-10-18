import "./App.css";
import { Button } from "./components/ui/Button";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcoc";

function App() {
  return (
    <div>
      hi there
      <Button
        startIcon={<PlusIcon size="md" />}
        variant="primary"
        size="sm"
        onclick={() => {}}
        text="Share"
      />
      <Button startIcon={<ShareIcon size="md" />} variant="secondary" size="sm" onclick={() => {}} text="Share" />
    </div>
  );
}

export default App;
