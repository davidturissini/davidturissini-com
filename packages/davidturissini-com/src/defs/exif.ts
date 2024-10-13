export interface LatLng {
  id: number;
    description: string;
    value: [
      [number, number],
      [number, number],
      [number, number]
    ]
  }

  export interface ExifData {
    GPSLatitude?: LatLng;
    GPSLongitude?: LatLng
  }