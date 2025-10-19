import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";

interface modal {
  open: boolean;
  onClose: () => void;
}

export function CreateContentModal({ open, onClose }: modal) {
  return (
    <div>
      {open && (
        <div className="w-screen h-screen bg-red-200 fixed top-0 left-0 opacity-70 flex justify-center">
          <div className="flex flex-col justify-center">
            <span className="bg-white opacity-100 p-4 rounded">
              <div className="flex justify-end cursor-pointer" onClick={() => {onClose()}}>
                <CrossIcon />
              </div>
              <div>
                <Input placeholder={"Title"} />
                <Input placeholder={"Title"} />
              </div>
              <div className="flex justify-center">
                <Button variant="primary" text="Submit" />
              </div>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

function Input({ onChange, placeholder }: { onchange: () => void }) {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        className="m-2 px-4 py-2 border rounded"
        onChange={onchange}
      />
    </div>
  );
}
