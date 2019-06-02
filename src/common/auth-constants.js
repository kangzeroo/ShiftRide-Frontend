export const GOOGLE_MAPS_ACCESS_TOKEN = (() => {
  return process.env.NODE_ENV === "production"
    ? "AIzaSyCqRSFjFtjnRaUqx76pZrcwutuQeijwRhM"
    : "AIzaSyCfvYLaULon0YW_jya1--RmGA5ayYibPjE";
})();
