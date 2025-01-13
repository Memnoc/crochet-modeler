export type BasicShape = "sphere" | "cylinder" | "cone" | "flat-circle";

export interface ShapeDimensions {
  radius: number;
  height?: number;
  taperRatio?: number; // for cones
}

export interface ShapeConfig {
  type: BasicShape;
  dimensions?: ShapeDimensions;
  position?: Position;
}

export interface ShepeConfig {
  type: BasicShape;
  dimensions: ShapeDimensions;
  position?: Position;
}

export interface Position {
  x: number;
  y: number;
  z: number;
}

export interface StitchCount {
  round: number;
  stitches: number;
  instructions: string;
}

export interface Pattern {
  shapes: ShapeConfig[];
  stitchCounts: StitchCount[];
  difficulty: "beginner" | "intermediate" | "advanced";
  materials: {
    yarnWeight: string;
    hookSize: string;
    yardage: number;
  };
}