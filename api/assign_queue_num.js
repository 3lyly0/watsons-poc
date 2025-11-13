export default function handler(req, res) {
  res
    .status(200)
    .setHeader("Access-Control-Allow-Origin", "*")
    .setHeader("Access-Control-Allow-Headers", "*")
    .setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS")
    .json({
      api_request_id: "poc-" + Date.now()
    });
}
