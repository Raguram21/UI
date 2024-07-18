import React from 'react'
import { Line} from 'react-chartjs-2'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,PointElement,
  LineElement, } from 'chart.js';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
);

function Header() {
  const data = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        data: [65, 59, 80, 81],
        fill: false,
        backgroundColor: 'white',
        borderColor: 'white',
      },
    ],
  };
  const chart= {
    labels: ['January', 'February', 'March', 'April','may','june','july'],
    datasets: [
      {
        data: [65, 59, 80, 81,91,80,59,65],
        fill: false,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'white',
      },
    ],
  };
    
       
  const line = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
          ticks: {
              color: 'white' // Y-axis label color
          },
          grid: {
              color: 'White' // Y-axis grid line color (optional)
          }
      },
      x: {
          ticks: {
              color: 'white' // X-axis label color
          },
          grid: {
              color: 'white' // X-axis grid line color (optional)
          }
      }
  },
  };
  return (
<>
<div className='flax-col lg:flex mt-5'>
  
        <div className=' w-full mt-4 lg:w-1/3 flex-col h-auto bg-white rounded drop-shadow-md p-3'>
        <div className='bg-gradient-to-r from-cyan-400 to-cyan-500 rounded text-white -translate-y-8'>
        <Line data={data} options={line} className='flex-wrap'/>
        </div>
         <span>Daily Sales</span>
         <p className='text-gray-500 mt-2'>increase in today sales.</p>
         <hr className='mt-4'/>
         <p className='mt-3 flex text-gray-500 text-xs'>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
         <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
         </svg>
         <span className='mx-3'> updated 4 minutes ago</span>
         </p>
        </div>
        <div className='w-full mt-10 lg:w-1/3 lg:mt-4 flex-col h-auto bg-white ml-1 rounded drop-shadow-md p-3'>
        <div className='bg-red-600 rounded text-white -translate-y-8'>
        <Bar data={chart} options={line} className='flex-wrap'/>
        </div>
        <span>Email Subscription</span>
        <p className='text-gray-500 mt-2'>Last Campaign Performance</p>
        <hr className='mt-4'/>
         <p className='mt-3 flex text-gray-500 text-xs'>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
         <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
         </svg>
         <span className='mx-3'> updated 10 days ago</span>
         </p>
        </div>
        <div className='w-full mt-10 lg:w-1/3 lg:mt-4 flex-col h-auto ml-1 bg-white rounded drop-shadow-md p-3'>
        <div className='bg-gradient-to-r from-green-600 to-green-700 rounded text-white -translate-y-8'>
        <Line data={data} options={line} className='flex-wrap'/>
        </div>
        <span>Completed Tasks</span>
        <p className='text-gray-500 mt-2'>Last Campaign Performance</p>
        <hr className='mt-4'/>
         <p className='mt-3 flex text-gray-500 text-xs'>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
         <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
         </svg>
         <span className='mx-3'> campaign sent 26 minutes ago</span>
         </p>
        </div>
        </div>

      </>

  )
}

export default Header
