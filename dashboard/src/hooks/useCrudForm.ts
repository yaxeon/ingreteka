import { useState } from "react";

type ReloadFn = () => void;

export interface CrudFormProps {
  id: string;
  onClose: ReloadFn;
}

export const mapId = <T extends Array<{ id: string }> | null | undefined>(
  field: T
): string[] => (field ? field.map(({ id }) => id) : []);

export const useCrudForm = (reload: ReloadFn) => {
  const EMPTY_ID = "000000000000000000000000";
  const [id, setId] = useState(EMPTY_ID);
  const [visible, setVisible] = useState(false);

  function onCreate() {
    setId(EMPTY_ID);
    setVisible(true);
  }

  function onUpdate(id: string) {
    setId(id);
    setVisible(true);
  }

  function onClose() {
    setId(EMPTY_ID);
    setVisible(false);
    reload();
  }

  return {
    onCreate,
    onUpdate,
    onClose,
    visible,
    id
  };
};
