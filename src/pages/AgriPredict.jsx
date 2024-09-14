import React from "react";
import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { Header } from "../components/Header";
import { PredictionForm } from "../components/PredictionForm";
import { PredictionResult } from "../components/PredictionResult";
import { usePrediction } from "../context/Prediction";

const AgriPredict = () => {
  const { showForm } = usePrediction();
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <Header />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Card className="max-w-4xl mx-auto">
          <CardBody>
            <Typography variant="h2" color="blue-gray" className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight mb-2">
              Predict Commodity Prices
            </Typography>
            <Typography className="text-sm text-muted-foreground mb-12">
              Get price predictions for agricultural commodities
            </Typography>
            {showForm ? <PredictionForm /> : <PredictionResult />}
          </CardBody>
        </Card>
      </main>
    </div>
  );
};

export default AgriPredict;