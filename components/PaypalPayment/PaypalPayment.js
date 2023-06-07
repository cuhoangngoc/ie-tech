import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const PaypalPayment = ({ orderInfo: { user_id, total, plan_id, duration } }) => {
  const serverUrl = 'http://localhost:8888';

  const createOrder = (data) => {
    // Đơn hàng được tạo trên máy chủ và id đơn hàng được trả về
    return fetch(`${serverUrl}/my-server/create-paypal-order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // sử dụng thông số "body" để tùy ý chuyển thông tin đơn hàng bổ sung
      // like product skus and quantities
      body: JSON.stringify({
        product: {
          // description: "Thanh toán cho gói này",
          cost: '129.99',
        },
      }),
    })
      .then((response) => response.json())
      .then((order) => order.id);
  };
  const onApprove = (data) => {
    // Order is captured on the server and the response is returned to the browser
    return fetch(`${serverUrl}/my-server/capture-paypal-order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        orderID: data.orderID,
      }),
    })
      .then(async (response) => {
        try {
          const { id } = paymentMethod;
          const response = await axios.post(`../api/payment/save-payment`, {
            total,
            id,
            user_id,
            plan_id,
            duration,
          });
        } catch (err) {
          console.log(`Error: ${err}`);
        }
        console.log('Thanh toán thành công');
        return response.json();
      })
      .then((data) => console.log(data));
  };

  const initialOptions = {
    'client-id': 'AW-OAdt6rFHV68MiNHuc6Lb4Sq4PSEBLQJCe4EuZXa_pE20xA1X7zcXJmM0u2VHA8YAxx_v-6FRGAUYD',
    currency: 'USD',
    intent: 'capture',
    // "data-client-token": "abc123xyz==",
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}
      />
    </PayPalScriptProvider>
  );
};

export default PaypalPayment;
