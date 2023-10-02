export const formatTitle = (string, length) => {
  let text = string.slice(0, length)
  return `${text}...`
};
