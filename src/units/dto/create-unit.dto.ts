export class CreateUnitDto {
  customerId: string;
  type: string;
  make: string;
  model: string;
  year?: number;
  vin?: string;
  serialNumber?: string;
}
