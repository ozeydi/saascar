export interface VehicleDetails {
  make: string;
  model: string;
  year: string;
  engine: string;
  fuelType: string;
  mileage: string;
  price: string;
  country: string;
  city: string;
}

export interface AnalysisResult {
  vehicle: VehicleDetails;
  priceCheck: string;
  mechanicalRisks: string[];
  expertAdvice: string[];
}
