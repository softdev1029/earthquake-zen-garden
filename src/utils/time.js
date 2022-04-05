export const formatDate = (timestamp) => {
  var options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  return new Date(timestamp).toLocaleDateString("en-US", options);
};
