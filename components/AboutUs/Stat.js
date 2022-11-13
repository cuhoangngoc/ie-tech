
import React from 'react';
import CountUp from 'react-countup';
const Stat = () => (
  <div className="bg-white px-4 py-16 mx-auto sm:max-w-2xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20">
    <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
      <div className="text-center md:border-r">
        <h6 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          <CountUp start={0} end={100} duration={1} />+
        </h6>
        <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
          Khách hàng tích cực
        </p>
      </div>
      <div className="text-center md:border-r">
        <h6 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"><CountUp start={0} end={850} duration={1} />+</h6>
        <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
          dự án hoàn thành
        </p>
      </div>
      <div className="text-center md:border-r">
        <h6 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"><CountUp start={0} end={25} duration={1} />+ </h6>
        <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
          cố vấn nhóm
        </p>
      </div>
      <div className="text-center">
        <h6 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"><CountUp start={0} end={10} duration={1} />+</h6>
        <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
          năm vinh quang
        </p>
      </div>
    </div>
  </div>
)
export default Stat