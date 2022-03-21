export enum PCBComponentType {
  RESISTOR = 'resistor',
  TRANSISTOR = 'transistor',
  CAPACITOR = 'capacitor',
}

export enum VALID_TYPES {
  NUMBER = '[object Number]',
  STRING = '[object String]',
}

export const MANDATORY_TRANSISTOR_PROPERTIES = [
  ['type', VALID_TYPES.STRING],
  ['current_gain', VALID_TYPES.NUMBER],
  ['collector_emitter_voltage', VALID_TYPES.NUMBER],
  ['emitter_base_voltage', VALID_TYPES.NUMBER],
  ['collector_current', VALID_TYPES.NUMBER],
];

export const MANDATORY_CAPACITOR_PROPERTIES = [
  ['type', VALID_TYPES.STRING],
  ['nominal_capacitance', VALID_TYPES.NUMBER],
  ['working_voltage', VALID_TYPES.NUMBER],
  ['tolerance', VALID_TYPES.NUMBER],
  ['working_temperature', VALID_TYPES.NUMBER],
  ['termperature_coefficient', VALID_TYPES.NUMBER],
];

export const MANDATORY_RESISTOR_PROPERTIES = [
  ['type', VALID_TYPES.STRING],
  ['tolerance', VALID_TYPES.NUMBER],
  ['stability', VALID_TYPES.NUMBER],
  ['reliability', VALID_TYPES.NUMBER],
  ['voltage_coefficient', VALID_TYPES.NUMBER],
  ['noise', VALID_TYPES.NUMBER],
  ['temperature_rating', VALID_TYPES.NUMBER],
  ['thermal_resistance', VALID_TYPES.NUMBER],
  ['temperature_coefficient_of_resistance', VALID_TYPES.NUMBER],
];

export const PCBComponentProperties = {
  resistor: MANDATORY_RESISTOR_PROPERTIES,
  transistor: MANDATORY_TRANSISTOR_PROPERTIES,
  capacitor: MANDATORY_CAPACITOR_PROPERTIES,
};
