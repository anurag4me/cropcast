import React from 'react';
import { Button, Typography } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import { usePrediction } from '../context/Prediction';

export const PredictionForm = () => {
    const { handleSubmit, commodity, setCommodity } = usePrediction()
    return (<form onSubmit={(e)=>handleSubmit(e)} className="space-y-4">
    <div className="space-y-2">
      <Typography className='text-sm font-semibold'>Commodity</Typography>
      <Select label="Select a crop commodity" value={commodity} onChange={(value) => setCommodity(value)} required>
          <Option value="wheat">Wheat</Option>
          <Option value="corn">Corn</Option>
          <Option value="soybeans">Soybeans</Option>
          <Option value="rice">Rice</Option>
      </Select>
    </div>
    <div className="space-y-2">
    <Typography className='text-sm font-semibold'>Quantity (tons)</Typography>
      <Input id="quantity" type="number" required/>
    </div>
    <div className="space-y-2">
    <Typography className='text-sm font-semibold'>Harvest Date</Typography>
      <Input id="harvest-date" type="date" required />
    </div>
    <Button type="submit" className="w-full">Predict Price</Button>
  </form>
);
}