import Layout from '../../components/Layout/Layout';
import StripeContainer from '../../components/StripeContainer';
import PaypalPayment from '../../components/PaypalPayment/PaypalPayment';
import GooglePay from '../../components/GooglePay/GooglePay';
const { useRouter } = require('next/router');

const Payment = () => {
  const router = useRouter();
  const query = router.query;
  const orderInfo = {
    user_id: query.user_id,
    plan_id: Number(query.plan_id),
    duration: query.duration,
    // làm tròn đến 2 chữ số thập phân
    total: query.total,
  };

  console.log(orderInfo);

  return (
    <Layout>
      <h1 className="ml-10 mt-10 text-xl">
        Bạn đang thực hiện giao dịch cho dịch vụ&nbsp;
        <span className="font-bold">
          {query.plan_name} {query.service_name}
        </span>{' '}
        thời hạn&nbsp; <span className="font-bold">{query.duration} tháng</span> với tổng tiền
        là&nbsp; <span className="font-bold text-green-600">{query.total}$</span>
      </h1>

      <div className="hs-accordion-group mx-auto mt-10 max-w-lg transition-all duration-200">
        <div
          className="hs-accordion active -mt-px border bg-white first:rounded-t-lg last:rounded-b-lg dark:border-gray-700 dark:bg-gray-800"
          id="hs-bordered-heading-one"
        >
          <button
            className="hs-accordion-toggle inline-flex w-full items-center gap-x-3 py-4 px-5 text-left font-semibold text-gray-800 transition hover:text-gray-500 hs-accordion-active:text-blue-600 dark:text-gray-200 dark:hover:text-gray-400 dark:hs-accordion-active:text-blue-500"
            aria-controls="hs-basic-bordered-collapse-one"
          >
            <svg
              className="block h-3 w-3 text-gray-600 group-hover:text-gray-500 hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 dark:text-gray-400"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 8.85999L14.5 8.85998"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M8 15.36L8 2.35999"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <svg
              className="hidden h-3 w-3 text-gray-600 group-hover:text-gray-500 hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 dark:text-gray-400"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 8.85999L14.5 8.85998"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            Thẻ tín dụng / ghi nợ quốc tế
          </button>
          <div
            id="hs-basic-bordered-collapse-one"
            className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
            aria-labelledby="hs-bordered-heading-one"
          >
            <div className="px-5 pb-4">
              <StripeContainer orderInfo={orderInfo} />
            </div>
          </div>
        </div>

        <div
          className="hs-accordion -mt-px border bg-white first:rounded-t-lg last:rounded-b-lg dark:border-gray-700 dark:bg-gray-800"
          id="hs-bordered-heading-two"
        >
          <button
            className="hs-accordion-toggle inline-flex w-full items-center gap-x-3 py-4 px-5 text-left font-semibold text-gray-800 transition hover:text-gray-500 hs-accordion-active:text-blue-600 dark:text-gray-200 dark:hover:text-gray-400 dark:hs-accordion-active:text-blue-500"
            aria-controls="hs-basic-bordered-collapse-two"
          >
            <svg
              className="block h-3 w-3 text-gray-600 group-hover:text-gray-500 hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 dark:text-gray-400"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 8.85999L14.5 8.85998"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M8 15.36L8 2.35999"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <svg
              className="hidden h-3 w-3 text-gray-600 group-hover:text-gray-500 hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 dark:text-gray-400"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 8.85999L14.5 8.85998"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            Ví Paypal
          </button>
          <div
            id="hs-basic-bordered-collapse-two"
            className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
            aria-labelledby="hs-bordered-heading-two"
          >
            <div className="flex justify-center px-5 pb-4">
              <PaypalPayment orderInfo={orderInfo} />
            </div>
          </div>
        </div>

        <div
          className="hs-accordion -mt-px border bg-white first:rounded-t-lg last:rounded-b-lg dark:border-gray-700 dark:bg-gray-800"
          id="hs-bordered-heading-three"
        >
          <button
            className="hs-accordion-toggle inline-flex w-full items-center gap-x-3 py-4 px-5 text-left font-semibold text-gray-800 transition hover:text-gray-500 hs-accordion-active:text-blue-600 dark:text-gray-200 dark:hover:text-gray-400 dark:hs-accordion-active:text-blue-500"
            aria-controls="hs-basic-bordered-collapse-three"
          >
            <svg
              className="block h-3 w-3 text-gray-600 group-hover:text-gray-500 hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 dark:text-gray-400"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 8.85999L14.5 8.85998"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M8 15.36L8 2.35999"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <svg
              className="hidden h-3 w-3 text-gray-600 group-hover:text-gray-500 hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 dark:text-gray-400"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 8.85999L14.5 8.85998"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            Ví Google Pay
          </button>
          <div
            id="hs-basic-bordered-collapse-three"
            className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
            aria-labelledby=" hs-bordered-heading-three"
          >
            <div className="flex justify-center px-5 pb-4">
              <GooglePay orderInfo={orderInfo} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Payment;
