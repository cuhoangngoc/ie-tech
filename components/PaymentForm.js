import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useState } from 'react';
import { showErrorToast, showSuccessToast } from './Toast';

const CARD_OPTIONS = {
  iconStyle: 'solid',
  hidePostalCode: true,
  style: {
    base: {
      // iconColor: '#c4f0ff',
      // color: '#000',
      fontWeight: 800,
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': {
        color: '#fce883',
      },
      '::placeholder': {
        color: '#9BA4B5',
      },
    },
    invalid: {
      iconColor: '#D21312',
      color: '#D21312',
    },
  },
};

const PaymentForm = ({ orderInfo: { user_id, total, plan_id, duration } }) => {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post(`../api/payment/save-payment`, {
          total,
          id,
          user_id,
          plan_id,
          duration,
        });

        if (response.status !== 200) {
          showSuccessToast('Thanh toán thất bại');
          return;
        }

        setSuccess(true);
        showSuccessToast('Thanh toán thành công');
      } catch (err) {
        console.log(`Error: ${err}`);
      }
    }
  };

  return (
    <>
      {!success ? (
        <form onSubmit={handleSubmit} className="my-10 mx-auto max-w-lg rounded-xl bg-white">
          {/* <fieldset className="FormGroup">
            <div className="FormRow">
              <CardElement options={CARD_OPTIONS} />
            </div>
          </fieldset> */}
          <div className="p-4">
            <CardElement options={CARD_OPTIONS} />
            <span className="mx-auto mt-2">Tổng cộng: {total ? total : 0}$</span>
          </div>

          <button
            type="submit"
            disabled={!stripe}
            className="block w-full bg-indigo-600 p-2 text-center text-white transition-all duration-200 hover:bg-indigo-700"
          >
            Thanh toán
          </button>
        </form>
      ) : (
        <div>payment success</div>
      )}
    </>
  );
};

export default PaymentForm;
