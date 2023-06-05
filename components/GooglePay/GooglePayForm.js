// Google Pay Component
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/auth';
import React, { Component } from 'react';
import GooglePayButton from '@google-pay/button-react';
import round from '../../components/round';
const GooglePayForm = ({ orderInfo }) => {
    const { user } = useAuth({ middleware: 'auth' }); //redirect tới đăng nhập nếu chưa đăng nhập
    const router = useRouter();
    const { checkoutId } = router.query; // lấy checkoutId từ URL, trả về một string
    const [checkoutData, setCheckoutData] = useState({}); // khởi tạo state checkoutData với giá trị mặc định là object rỗng chua dữ liệu của checkout
    const [order, setOrder] = useState({}); // khởi tạo state totalPrice với giá trị mặc định là 0
    useEffect(() => {
        if (checkoutId) {
            // kiểm tra checkoutId có tồn tại hay không
            const postData = async () => {
                const response = await fetch('/api/getCheckoutData', {
                    method: 'POST',
                    body: JSON.stringify({ id: checkoutId }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const data = await response.json();
                setCheckoutData(data[0]); // Kết quả trả về là mảng với 1 phần tử duy nhất và lấy phần tử đó
            };
            postData();
        }
    }, [router.query.id, router.isReady, checkoutId]); // chỉ chạy khi checkoutId thay đổi
    return (
          <div className="mt-5 flex flex-col items-center justify-center gap-8 lg:flex-row">
        <div className="button">
          <GooglePayButton
            environment="TEST"
            buttonSizeMode="fill"
            paymentRequest={{
              apiVersion: 2,
              apiVersionMinor: 0,
              allowedPaymentMethods: [
                {
                  type: 'CARD',
                  parameters: {
                    allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                    allowedCardNetworks: ['MASTERCARD', 'VISA'],
                  },
                  tokenizationSpecification: {
                    type: 'PAYMENT_GATEWAY',
                    parameters: {
                      gateway: 'ietech',
                      gatewayMerchantId: checkoutData.plan_id,
                    },
                  },
                },
              ],
              merchantInfo: {
                merchantId: checkoutData.plan_id,
                merchantName: checkoutData.plan_name,
              },
              transactionInfo: {
                totalPriceStatus: 'FINAL',
                totalPriceLabel: 'Total',
                totalPrice: orderInfo.total,
                currencyCode: 'USD',
                countryCode: 'US',
              },
              shippingAddressRequired: true,
              callbackIntents: ['PAYMENT_AUTHORIZATION'],
            }}
            onLoadPaymentData={(paymentRequest) => {
              console.log('Success', paymentRequest);
            }}
            onPaymentAuthorized={(paymentData) => {
              console.log('Payment Authorised Success', paymentData);
              return { transactionState: 'SUCCESS' };
            }}
            onPaymentDataChanged={(paymentData) => {
              console.log('On Payment Data Changed', paymentData);
              return {};
            }}
            existingPaymentMethodRequired="false"
            buttonColor="black"
            buttonType="buy"
          />
        </div>
        </div>
    );
};
export default GooglePayForm;