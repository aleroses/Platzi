function is_object(subject) {
  return typeof subject === "object";
}

function is_array(subject) {
  return Array.isArray(subject);
}
export { is_object, is_array };
