import React from 'react';
import { Button, Typography } from "@material-tailwind/react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { usePrediction } from '../context/Prediction';

export const PredictionResult = () => {
    const { prediction, commodity, graphData, handleReset } = usePrediction()
    console.log(prediction)
    return (
  <div className="space-y-6">
    <div className="text-center">
      <Typography variant='h5' color="blue-gray" className="font-semibold mb-2">
      Predicted Price for {commodity}
            </Typography>
      <p className="text-4xl font-bold text-green-600">${prediction?.toFixed(2)}</p>
    </div>
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={graphData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#059669" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
    <Button onClick={()=>handleReset()} className="w-full">Predict Another Commodity</Button>
  </div>
);
}