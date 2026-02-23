import { rows } from "../constants/metadata";
import { Grass } from "./Grass";
import { Row } from "./Row";

export const Map = () => {
  return (
    <>
      <Grass rowIndex={0} />
      {rows.map((rowData, index) => (
        <Row key={index} rowIndex={index + 1} rowData={rowData} />
      ))}
    </>
  );
}