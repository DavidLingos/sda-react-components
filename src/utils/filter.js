export function filter(values, filterValue) {
  return values.filter((value) => value.toLowerCase().includes(filterValue.toLowerCase()));
}
