export default function formatQueryParams(params?: { [key: string]: any }) {
  if (!params) return "";
  return Object.keys(params)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
    )
    .join("&");
}
