export async function onRequestPost(context) {
  // 1. GANTI DENGAN URL WEB APP GOOGLE APPS SCRIPT ANDA
  const GAS_URL = "https://script.google.com/macros/s/AKfycbwa3KsEHD-CXdG7-UGy9QQPxCrvqAYL_W8W-bLumK1-KldSDQFcnGtaIHmBE9YXqGVr/exec";
  
  // 2. Kunci rahasia
  const SECRET_KEY = "x9K2mPq8Vv4Lz7Aw1RcF";

  try {
    const requestData = await context.request.json();
    requestData.api_key = SECRET_KEY;

    const response = await fetch(GAS_URL, {
      method: 'POST',
      body: JSON.stringify(requestData),
      headers: { 'Content-Type': 'text/plain;charset=utf-8' }
    });

    const data = await response.json();
    
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ status: "error", message: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
