import { STATUS_LABELS } from "@/services/stories";

export default function StatusBadge({ status }) {
  return (
    <span className={`adm-badge adm-badge--${status}`}>
      {STATUS_LABELS[status] || status}
    </span>
  );
}
