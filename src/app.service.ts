import { Injectable } from '@nestjs/common';
import { PCBComponentType } from './constants';

const validateType = (property, expectedType) =>
  Object.prototype.toString.call(property) === expectedType;

@Injectable()
export class PCBService {
  public determineComponent(PCBComponent): PCBComponentType | null {
    const AVAILABLE_COMPONENT_TYPES = Object.values(
      PCBComponentType,
    ) as PCBComponentType[];
    const containsType = PCBComponent && PCBComponent.type;
    if (!containsType) return null;
    const isValidType = AVAILABLE_COMPONENT_TYPES.includes(PCBComponent.type);
    const componentType = AVAILABLE_COMPONENT_TYPES.find(
      (type) => type === PCBComponent.type,
    );
    return containsType && isValidType ? componentType : null;
  }

  public validateComponent(component, mandatoryProperties): boolean {
    const hasProperties = mandatoryProperties
      .map(([property]) => component.hasOwnProperty(property))
      .every((itemExists) => itemExists);

    if (!hasProperties) return false;

    const propertiesAreValid = mandatoryProperties
      .map(([property, expectedType]) =>
        validateType(component[property], expectedType),
      )
      .every((itemIsValid) => itemIsValid);

    if (!propertiesAreValid) return false;

    return true;
  }
}
