// Google Pay Component
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/auth';
import React, { Component } from 'react';
import GooglePayButton from '@google-pay/button-react';
import round from '../../components/round';
const GooglePayForm = ({ orderInfo }) => {
    const order = orderInfo;
    const handlePayment = async (paymentData) => {
        // hàm xử lý khi thanh toán thành công
        const { id } = paymentData; // lấy id của payment
        const { total, plan_id, duration } = checkoutData; // lấy giá trị total từ state
        const { id: user_id } = user; // lấy id của user từ state
        const response = await fetch('/api/savePayment', {
            method: 'POST',
            body: JSON.stringify({ id, total, user_id, plan_id, duration }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        if (data.status === 'success') {
            // nếu lưu thành công thì chuyển hướng tới trang profile
            router.push('/profile');
        }
    };
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
                      gateway: 'example',
                      gatewayMerchantId: 'exampleGatewayMerchantId',
                    },
                  },
                },
              ],
              merchantInfo: {
                merchantId: '12345678901234567890',
                merchantName: 'Demo Merchant',
              },
              transactionInfo: {
                totalPriceStatus: 'FINAL',
                totalPriceLabel: 'Total',
                totalPrice: order.total,
                currencyCode: 'USD',
                countryCode: 'US',
              },
              shippingAddressRequired: false,
              emailRequired: true,
              callbackIntents: ['PAYMENT_AUTHORIZATION'],
              paymentDataCallbacks: {
                onPaymentAuthorized: (paymentData) => {
                  console.log('Payment Authorised Success', paymentData);
                  handlePayment(paymentData);
                  return { transactionState: 'SUCCESS' };
                },
              },
              PaymentDataRequest: {
                transactionInfo: {
                  totalPriceStatus: 'FINAL',
                  totalPriceLabel: 'Total',
                  totalPrice: order.total,
                  currencyCode: 'USD',
                  countryCode: 'US',
                },
                merchantInfo: {
                  merchantInfo: {
                    merchantId: order.user_id,
                    merchantName: 'Demo Merchant',
                  },
                },
              },
            }}
            onLoadPaymentData={(paymentData) => {
              paymentDataRequest.paymentDataCallbacks;
              console.log('Success', paymentData);
            }}
            onPaymentAuthorized={(paymentData) => {
              console.log('Payment Authorised Success', paymentData);
              handlePayment(paymentData);
              return { transactionState: 'SUCCESS' };
            }}
            existingPaymentMethodRequired="true"
            buttonColor="black"
            buttonType="buy"
          />
        </div>
        </div>
    );
};
export default GooglePayForm;