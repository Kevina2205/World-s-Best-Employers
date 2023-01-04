
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';



ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Samsung Electronics', 'Microsoft', 'IBM', 'Alphabet', 'Apple', 'Delta Air Lines', 'Costco Wholesale', 'Adobe', 'Southwest Airlines', 'Dell Technologies', 'Lockheed Martin', 'Cisco Systems', 'BMW Group', 'Amazon', 'Decathlon', 'Adidas', 'AIRBUS', 'Ferrari', 'Fraunhofer Society', 'Reliance Industry', 'Rolex', 'Dassault Group', ' Huawei', 'Bosch', 'Mercedes-Benz Group', 'Rossmann', 'Intuit', 'Safran', 'Pfizer', 'JD.com', 'IKEA', 'Coca-cola', 'Armani Group', 'Honda Motor', '3M', 'Yamaha', 'Nike', 'Siemens', 'Puma', 'UKG', 'Dr.Oetker', 'Mariott International', 'Northrop Grumman', 'Volkswagen Group', 'PayPal', 'Saudi Arabian Oil Company (Saudi Aramco)', 'Tencent Holdings', 'Sanofi', 'Rolls-Royce Holdings', 'Johnson & Johnson', 'Target', 'The Home Depot', 'Hyatt Hotels', 'Boeing', 'Ford Motor', 'Shopify', 'Colgate-Palmolive', 'General Dynamics', 'Philips', 'MTU Aero Engines', 'Chanel', 'Raymond James Financial', 'LOréal', 'Capital One', 'TD Bank Group', 'Oracle', 'Netflix', 'Carl-Zeiss-Stiftung', 'Merck KGaA, Darmstadt, Germany and its affiliates', 'Wacker Chemie', 'ENBW', 'Prada', 'General Motors', 'T Rowe Price', 'Volvo Group', 'Alibaba Group', 'Intel', 'Viatris', 'DM', 'Mitsubishi Electric', 'Pierelli', 'Enel', 'Kempinski Hotels', 'Naval Group', 'Naver', 'Meritz Financial Group', 'Discover Financial Services', 'Sony', 'STIHL', 'Michelin Group', 'Novartis', 'The Hartford', 'SK Group', 'De Longhi', 'DBS Bank', 'Mastercard', 'Electricite de France', 'Verbund', 'Panasonic', 'Emirates'],
  datasets: [
    {
      label: 'Total Employees',
      data: [266673, 221000, 250000, 156500, 154000, 80000, 288000, 25988, 56093, 133000, 114000, 79500, 118909, 1608000, 100000, 61401, 125000, 4556, 30028, 230000, 14000, 12371, 196000, 402600, 172425, 56500, 14200, 76800, 79000, 298717, 208000, 79000, 8000, 211374, 95000, 19895, 73300, 303000, 14000, 15000, 17900, 120000, 90000, 668000, 30900, 70000, 112771, 95000, 44000, 130000, 450000, 30000, 164000, 142000, 26000, 10000, 33800, 100000, 78831, 10000, 28500, 15000, 85252, 52781, 90000, 133000, 11300, 35375, 60334, 14400, 20000, 13140, 157000, 7529, 95000, 254941, 121100, 37000, 66076, 145696, 30690, 66279, 22500, 17373, 4696, 20, 16700, 108900, 20094, 125000, 108000, 18100, 117590, 10000, 33000, 24000, 167157, 3184, 240198, 85219],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};


export default function Chart() {
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false
  };


  return (
    <>
      <div>
        <Pie
        data={data} 
        options={options}
        width={350} height={350}
        />
      </div>
    </>
    
  );
}
