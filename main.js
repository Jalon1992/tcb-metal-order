
async function submitOrder() {
  const form = document.getElementById('orderForm');
  const formData = new FormData(form);
  const payload = {};
  formData.forEach((value, key) => payload[key] = value);
  document.getElementById('status').innerText = 'Sending...';

  try {
    const res = await fetch('https://tcb-order-backend.vercel.app/api/send-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      document.getElementById('status').innerText = '✅ Order sent!';
    } else {
      document.getElementById('status').innerText = '❌ Failed to send.';
    }
  } catch (err) {
    document.getElementById('status').innerText = '❌ Error sending.';
  }
}
