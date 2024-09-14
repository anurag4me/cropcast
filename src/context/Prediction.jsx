import { useContext, createContext, useState } from "react";

export const PredictionContext = createContext(null);

export default function PredictionProvider({ children }) {
  const [prediction, setPrediction] = useState(null);
  const [showForm, setShowForm] = useState(true);
  const [commodity, setCommodity] = useState("");
  const [graphData, setGraphData] = useState([]);

  const generateGraphData = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months.map((month) => ({
      month,
      price: Math.random() * 1000 + 500, // Random price between 500 and 1500
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Mock API call - replace with actual API call in a real application
    setTimeout(() => {
      const predictedPrice = Math.random() * 1000 + 500; // Random price between 500 and 1500
      setPrediction(predictedPrice);
      setGraphData(generateGraphData());
      setShowForm(false);
    }, 1000);
  };

  const handleReset = () => {
    setPrediction(null);
    setShowForm(true);
    setGraphData([]);
  };
  return (
    <PredictionContext.Provider
      value={{
        prediction,
        showForm,
        commodity,
        graphData,
        setCommodity,
        handleSubmit,
        handleReset,
      }}
    >
      {children}
    </PredictionContext.Provider>
  );
}

export const usePrediction = () => {
  return useContext(PredictionContext);
};
