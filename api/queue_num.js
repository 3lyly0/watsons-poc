export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");

  res.status(200).json({
    queue_number: 50,
    entry_time: Date.now(),
    event_id: "WatsonsPH",
    status: 1
  });
}
