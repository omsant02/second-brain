import { useState } from "react";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { CreateContentModal } from "./components/CreateContentModal";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";
import { Sidebar } from "./components/Sidebar";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <Sidebar/>
      <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2">
      <CreateContentModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
      <div className="flex justify-end gap-4">
        <Button
        onClick={() => setModalOpen(true)}
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
    </div>
  );
}

export default App;
