export default function handler(req, res) {
  res
    .status(200)
    .setHeader("Access-Control-Allow-Origin", "*")
    .setHeader("Access-Control-Allow-Headers", "*")
    .setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS")
    .json({
      queue_number: 50,
      entry_time: Date.now(),
      event_id: "WatsonsPH",
      status: 1
    });
}
