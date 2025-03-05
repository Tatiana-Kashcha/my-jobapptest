import qs from "qs";

export function parseQueryString(search: string) {
  return qs.parse(search, { ignoreQueryPrefix: true, comma: true });
}
