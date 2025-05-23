"use client"

import Image from "next/image"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  {
    name: 'Jan',
    income:4000,
    expense:2000,
  },
  {
    name: 'Feb',
    income:5000,
    expense:2000,
  },
  {
    name: 'Mar',
    income:6000,
    expense:2000,
  },
  {
    name: 'Apr',
    income:7000,
    expense:2000,
  },
  {
    name: 'May',
    income:8000,
    expense:2000,
  },
  {
    name: 'Jun',
    income:9000,
    expense:2000,
  },
  {
    name: 'Jul',
    income:4000,
    expense:2000,
  },
  {
    name: 'Aug',
    income:2000,
    expense:2000,
  },
  {
    name: 'Sep',
    income:5000,
    expense:2000,
  },
  {
    name: 'Oct',
    income:9000,
    expense:2000,
  },
  {
    name: 'Nov',
    income:4000,
    expense:2000,
  },
  {
    name: 'Dec',
    income:7000,
    expense:2000,
  },

];

const FinanceChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
            {/* title */}
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold'>Finance</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20}/>
            </div>
            <ResponsiveContainer width="100%" height="90%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" stroke="#ddd"/>
                <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} tickMargin={15}/>
                <YAxis axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} tickMargin={10}/>
                <Tooltip />
                <Legend align='center' verticalAlign='top' wrapperStyle={{paddingTop:"10px", paddingBottom:"30px"}}/>
                <Line type="monotone" dataKey="income" stroke="#C3EBFA" strokeWidth={5} />
                <Line type="monotone" dataKey="expense" stroke="#CFCEFF" strokeWidth={5}/>
                </LineChart>
            </ResponsiveContainer>
    </div>
  )
}

export default FinanceChart