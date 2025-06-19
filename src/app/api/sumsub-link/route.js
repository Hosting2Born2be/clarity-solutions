import crypto from "crypto";

export async function POST() {
  const APP_TOKEN = process.env.SUMSUB_APP_TOKEN;
  const SECRET_KEY = process.env.SUMSUB_SECRET_KEY;

  const method = "POST";
  const urlPath = "/resources/sdkIntegrations/levels/-/websdkLink";
  const bodyData = {
    ttlInSecs: 3600,
    levelName: "Entity - Simplified Onboarding",
  };
  const body = JSON.stringify(bodyData);
  const ts = Math.floor(Date.now() / 1000); // seconds since Unix Epoch

  // Concatenate the string to sign
  const stringToSign = ts + method + urlPath + body;

  // Create signature
  const signature = crypto
    .createHmac("sha256", SECRET_KEY)
    .update(stringToSign)
    .digest("hex");

  const res = await fetch(`https://api.sumsub.com${urlPath}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      "X-App-Token": APP_TOKEN,
      "X-App-Access-Sig": signature,
      "X-App-Access-Ts": ts.toString(),
    },
    body,
  });

  const json = await res.json();

  return new Response(JSON.stringify(json), {
    status: res.status,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
