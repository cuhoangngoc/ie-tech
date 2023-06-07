import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/auth';
import React, { Component } from 'react';
import GooglePayButton from '@google-pay/button-react';
import round from '../round';
const GooglePay = ({ orderInfo }) => {
  const savePayment = async (paymentData) => {
    // hàm xử lý khi thanh toán thành công
    const { id } = paymentData; // lấy id của payment
    const { total, plan_id, duration } = checkoutData; // lấy giá trị total từ state
    const { id: user_id } = user; // lấy id của user từ state
    const response = await fetch('/api/payment/save-payment', {
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
    <GooglePayButton
      environment="TEST"
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
          totalPrice: round(orderInfo.total, 2).toString(),
          currencyCode: 'USD',
          countryCode: 'US',
        },
      }}
      onLoadPaymentData={(paymentRequest) => {
        console.log('Success', paymentRequest);
        savePayment(paymentRequest);
      }}
      onError={(error) => {
        console.log('Error', error);
      }}
      existingPaymentMethodRequired={false}
      buttonColor="black"
      buttonType="buy"
      buttonSizeMode="fill"
    />
  );
};
export default GooglePay;
