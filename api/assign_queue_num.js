export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");

  res.status(200).json({
    api_request_id: "poc-" + Date.now()
  });
}
