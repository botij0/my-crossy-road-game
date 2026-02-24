import type { Row } from "../types/RowTypes";
import { Road } from "./Road";
import { Truck } from "./Truck";

type Props = {
  rowIndex: number;
  rowData: Extract<Row, { type: "truck" }>;
}

export const TruckLane = ({ rowIndex, rowData }: Props) => {
  return (
    <Road rowIndex={rowIndex}>
      {rowData.vehicles.map((vehicle, index) => (
        <Truck
          key={index}
          rowIndex={rowIndex}
          initialTileIndex={vehicle.initialTileIndex}
          direction={rowData.direction}
          speed={rowData.speed}
          color={vehicle.color}
        />
      ))}
    </Road>
  )
}
