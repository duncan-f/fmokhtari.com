export function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '-')
    .replace(/--+/g, '-')
    .replace(/^-+/g, '')
    .replace(/-+$/g, '');
}

export function dateFormat(date) {
  return new Date(date).toLocaleDateString('en-us', {
    timeZone: "UTC",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}
