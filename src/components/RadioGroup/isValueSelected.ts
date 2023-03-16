export default function isValueSelected(value: string | undefined, candidate: string) {
  if (candidate === undefined || value === undefined) {
    return false;
  }

  return value === candidate;
}
