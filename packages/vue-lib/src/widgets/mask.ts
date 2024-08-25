import { FigureOptions } from "./figure";

type UnitsOptionsType = "userSpaceOnUse" | "objectBoundingBox"

export interface MaskOptions extends FigureOptions {
    width?: number;
    height?: number;
    x?: number;
    y?: number;
    maskUnits?: UnitsOptionsType;
    maskContentUnits?: UnitsOptionsType;
}