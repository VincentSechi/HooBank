import React from 'react'
import { stats } from '../constants';
import styles from '../style';
const Stats = () => (
  <section className={`${styles.flexCenter}flex-row flex-wrap sm:mb-6 mb-6`}>
    {stats.map((stat) =>(
      <div
        key = {stats.id} 
        className={`flex-1 flex justify-start items-center flex-row m-3`}>
          <h4 className="font-poppins xs:text-[41px] text-[30px] xs:leading-[53px] leading-[43px] font-semibold text-white">{stat.value}</h4>
          <p className="font-poppins xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] font-normal text-gradient uppercase ml-3">{stat.title}</p>
      </div>
    ))}
  </section>
)


export default Stats