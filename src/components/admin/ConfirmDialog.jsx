"use client";

import { useEffect, useRef } from "react";

/**
 * A modal yes/no confirmation on the native <dialog> element, which handles
 * focus trapping, the backdrop and Escape for us. Focus starts on the cancel
 * button so that pressing Enter by accident does not confirm.
 */
export default function ConfirmDialog({
  open,
  title,
  children,
  confirmLabel = "Yes",
  cancelLabel = "No",
  busy = false,
  busyLabel = "Working…",
  error = "",
  onConfirm,
  onCancel,
}) {
  const dialogRef = useRef(null);
  const cancelRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      cancelRef.current?.focus();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      className="adm-dialog"
      aria-labelledby="adm-dialog-title"
      onCancel={(event) => {
        // Escape key: keep React in charge of whether the dialog is open.
        event.preventDefault();
        if (!busy) onCancel();
      }}
    >
      <h2 id="adm-dialog-title" className="adm-dialogTitle">{title}</h2>
      <div className="adm-dialogBody">{children}</div>

      {error && <p className="adm-alert" role="alert">{error}</p>}

      <div className="adm-dialogActions">
        <button ref={cancelRef} type="button" className="adm-button" onClick={onCancel} disabled={busy}>
          {cancelLabel}
        </button>
        <button type="button" className="adm-button adm-button--primary" onClick={onConfirm} disabled={busy}>
          {busy ? busyLabel : confirmLabel}
        </button>
      </div>
    </dialog>
  );
}
