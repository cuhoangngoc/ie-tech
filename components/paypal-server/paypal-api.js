import fetch from 'node-fetch';

const CLIENT_ID =
  'AWf-EdhDbLXEqYbE8cQV8Ts4PEKDtriEI2Szi8fAZ3JYZj-t4B9doR-1codd1_WY5mNuVr3iJYG2Sysv';
const APP_SECRET =
  'EEAWcmcusLpDH8NvFGtds4L99jQz2_bTpOIZCIBmel_lM2POO6bg7XgCvhOjZAU13ol-khuBvUHGgPqI';

console.log(CLIENT_ID, APP_SECRET);
const base = 'https://api-m.sandbox.paypal.com';

export async function createOrder(data) {
  const accessToken = await generateAccessToken();
  const url = `${base}/v2/checkout/orders`;
  const response = await fetch(url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: data.product.cost,
          },
        },
      ],
    }),
  });

  return handleResponse(response);
}

export async function capturePayment(orderId) {
  const accessToken = await generateAccessToken();
  const url = `${base}/v2/checkout/orders/${orderId}/capture`;
  const response = await fetch(url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return handleResponse(response);
}

export async function generateAccessToken() {
  const auth = Buffer.from(CLIENT_ID + ':' + APP_SECRET).toString('base64');
  const response = await fetch(`${base}/v1/oauth2/token`, {
    method: 'post',
    body: 'grant_type=client_credentials',
    headers: {
      Authorization: `Basic ${auth}`,
    },
  });

  const jsonData = await handleResponse(response);
  return jsonData.access_token;
}

async function handleResponse(response) {
  if (response.status === 200 || response.status === 201) {
    return response.json();
  }

  const errorMessage = await response.text();
  throw new Error(errorMessage);
}
