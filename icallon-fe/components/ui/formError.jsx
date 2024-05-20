import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export function FormError({ message }) {
  if (!message) return null;

  return (
    <div className="flex bg-red-500/15 p-3 rounded-md items-center gap-x-2 text-sm text-red-500">
        <ExclamationTriangleIcon className="h-4 w-4" />
        <p>{message}</p>
    </div>
  );
}
