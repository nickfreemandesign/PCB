interface Resistor {
  type: 'resistor';
  description?: string;
  tolerance: number;
  stability: number;
  reliability: number;
  voltage_coefficient: number;
  noise: number;
  temperature_rating: number;
  thermal_resistance: number;
  temperature_coefficient_of_resistance: number;
}

interface Capacitor {
  type: 'capacitor';
  description?: string;
  nominal_capacitance: number;
  working_voltage: number;
  tolerance: number;
  working_temperature: number;
  termperature_coefficient: number;
}

interface Transistor {
  type: 'transistor';
  description?: string;
  current_gain: number;
  collector_emitter_voltage: number;
  emitter_base_voltage: number;
  collector_current: number;
}
