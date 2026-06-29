export type ProjectDestination = {
  label: string;
  url: string;
};

export type ProjectLinkValue = string | ProjectDestination[];

const isProjectDestination = (value: unknown): value is ProjectDestination => {
  if (!value || typeof value !== "object") {
    return false;
  }

  const candidate = value as Partial<ProjectDestination>;
  return (
    typeof candidate.label === "string" &&
    candidate.label.trim().length > 0 &&
    typeof candidate.url === "string" &&
    candidate.url.trim().length > 0
  );
};

export const normalizeProjectLinks = (value: unknown): ProjectDestination[] => {
  if (typeof value === "string") {
    const url = value.trim();
    return url ? [{ label: "View Live", url }] : [];
  }

  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .filter(isProjectDestination)
    .map(({ label, url }) => ({
      label: label.trim(),
      url: url.trim(),
    }))
    .filter(({ label, url }) => label.length > 0 && url.length > 0);
};
