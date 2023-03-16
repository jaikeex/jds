export default function isValueSelected(value: string | string[] | undefined, candidate: string) {
  if (candidate === undefined || value === undefined) {
    return false;
  }

  if (Array.isArray(value)) {
    return value.indexOf(candidate) >= 0;
  }

  return value === candidate;
}
