const FOLDERS: Record<string, string | undefined> = {
  "primary-1-2": process.env.DRIVE_FOLDER_PRIMARY_12,
  "primary-3": process.env.DRIVE_FOLDER_PRIMARY_3,
  "primary-4": process.env.DRIVE_FOLDER_PRIMARY_4,
};

export async function getImages(folder: string) {
  const folderId = FOLDERS[folder];
  if (!folderId) return [];

  const res = await fetch(
    `https://www.googleapis.com/drive/v3/files` +
      `?q='${folderId}'+in+parents+and+mimeType+contains+'image/'` +
      `&fields=files(id,name,createdTime)` +
      `&orderBy=createdTime` +
      `&key=${process.env.GOOGLE_API_KEY}`,
    { next: { revalidate: 60 } }
  );
  const data = await res.json();
  return data.files ?? [];
}

export function getDriveImageUrl(fileId: string) {
  return `https://drive.google.com/thumbnail?id=${fileId}&sz=s0`;
}

export function getDriveThumbnailUrl(fileId: string) {
  return `https://drive.google.com/thumbnail?id=${fileId}&sz=w800`;
}
