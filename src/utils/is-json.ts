export function isJSON(content: string) {
  try {
    JSON.parse(content);
    return true;
  } catch (_) {
    return false;
  }
}
