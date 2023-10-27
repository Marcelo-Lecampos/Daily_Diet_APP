import { PencilSimpleLineIcon, PlusIcon, TrashIcon } from "@components/Icons";

export const getIcon = (icon: string) => {
  switch (icon) {
    case "PLUS":
      return <PlusIcon />;

    case "PENCIL":
      return <PencilSimpleLineIcon />;

    case "TRASH":
      return <TrashIcon />;

    default:
      return;
  }
};
