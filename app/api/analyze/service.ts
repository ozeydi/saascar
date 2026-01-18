import { VehicleDetails, AnalysisResult } from '@/types/analysis';

export function generateAnalysis(vehicle: VehicleDetails): AnalysisResult {
  const year = parseInt(vehicle.year) || 2020;
  const mileage = parseInt(vehicle.mileage.replace(/,/g, '')) || 50000;
  const price = parseInt(vehicle.price.replace(/,/g, '')) || 15000;

  const currentYear = new Date().getFullYear();
  const vehicleAge = currentYear - year;

  let priceCheck: string;
  if (price < 5000) {
    priceCheck =
      'This vehicle appears to be priced below market average. Verify the condition carefully before purchasing.';
  } else if (price > 50000) {
    priceCheck =
      'This is a premium-priced vehicle. Ensure all features and condition justify the asking price.';
  } else {
    priceCheck =
      'This vehicle is fairly priced based on typical market values for similar models.';
  }

  const mechanicalRisks: string[] = [];

  if (vehicleAge > 10) {
    mechanicalRisks.push(
      'Older vehicle - inspect suspension and steering components',
    );
  }
  if (mileage > 100000) {
    mechanicalRisks.push(
      'High mileage - check for transmission wear and engine compression',
    );
  }
  if (vehicle.engine.toLowerCase().includes('turbo')) {
    mechanicalRisks.push(
      'Turbocharged engine - verify turbo condition and oil change history',
    );
  }
  if (vehicle.fuelType.toLowerCase() === 'diesel') {
    mechanicalRisks.push(
      'Diesel engine - check DPF filter and injector condition',
    );
  }
  if (vehicleAge > 5 && mileage > 60000) {
    mechanicalRisks.push('Check timing belt/chain service history');
  }
  if (mechanicalRisks.length === 0) {
    mechanicalRisks.push(
      'No major mechanical concerns identified based on provided details',
    );
  }

  const expertAdvice: string[] = [
    `Request full service history for this ${vehicle.make} ${vehicle.model}`,
    'Perform a cold start test to check for engine issues',
    'Inspect all fluids (oil, coolant, brake, transmission)',
    'Check for uneven tire wear indicating alignment issues',
    'Test all electrical systems including lights and AC',
  ];

  if (vehicleAge > 7) {
    expertAdvice.push(
      'Consider a pre-purchase inspection by a certified mechanic',
    );
  }
  if (mileage > 80000) {
    expertAdvice.push('Verify brake pad and rotor condition');
  }

  return {
    vehicle,
    priceCheck,
    mechanicalRisks,
    expertAdvice,
  };
}
