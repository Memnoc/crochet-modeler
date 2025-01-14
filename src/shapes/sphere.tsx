import { useState, useEffect, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Slider } from "../components/ui/slider";
import { Button } from "../components/ui/button";
import { Play, Pause, RotateCcw } from "lucide-react";
import type { Point3D, ProjectedPoint, SphereProps } from "../types/shapes";

const SEGMENTS = 20;
const SCALE = 20;
const CENTER_X = 150;
const CENTER_Y = 150;
const PERSPECTIVE = 300;
const MIN_STITCHES = 6;

export function Sphere({ initialRadius = 3, onPatternGenerate }: SphereProps) {
  const [radius, setRadius] = useState<number>(initialRadius);
  const [isRotating, setIsRotating] = useState<boolean>(true);
  const [viewAngle, setViewAngle] = useState<number>(0);
  const controls = useAnimation();

  const generateSpherePoints = useCallback((): Point3D[] => {
    const points: Point3D[] = [];

    for (let lat = 0; lat <= SEGMENTS; lat++) {
      const theta = (lat * Math.PI) / SEGMENTS;
      const sinTheta = Math.sin(theta);
      const cosTheta = Math.cos(theta);

      for (let lng = 0; lng <= SEGMENTS; lng++) {
        const phi = (lng * 2 * Math.PI) / SEGMENTS;
        points.push({
          x: radius * SCALE * sinTheta * Math.cos(phi),
          y: radius * SCALE * sinTheta * Math.sin(phi),
          z: radius * SCALE * cosTheta,
        });
      }
    }
    return points;
  }, [radius]);

  const projectPoints = useCallback(
    (points: Point3D[], angle: number): ProjectedPoint[] => {
      return points.map((point) => {
        const rotatedX = point.x * Math.cos(angle) - point.z * Math.sin(angle);
        const rotatedZ = point.x * Math.sin(angle) + point.z * Math.cos(angle);

        const scale = PERSPECTIVE / (PERSPECTIVE + rotatedZ);
        return {
          x: CENTER_X + rotatedX * scale,
          y: CENTER_Y + point.y * scale,
        };
      });
    },
    [],
  );

  useEffect(() => {
    let isMounted = true;

    const animateRotation = async () => {
      if (!isMounted) return;

      if (isRotating) {
        await controls.start({
          rotate: [0, 360],
          transition: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          },
        });
      } else {
        controls.stop();
      }
    };

    animateRotation().catch(console.error);

    return () => {
      isMounted = false;
    };
  }, [isRotating, controls]);

  const generatePattern = useCallback((): void => {
    const pattern: string[] = [];
    const stitchesAtEquator = Math.floor(radius * 6);

    pattern.push(`Round 1: ${MIN_STITCHES} sc in magic ring (${MIN_STITCHES})`);

    let currentStitches = MIN_STITCHES;
    let roundNum = 2;

    // Increase rounds
    while (currentStitches < stitchesAtEquator) {
      const increases = MIN_STITCHES;
      const newStitches = currentStitches + increases;
      pattern.push(
        `Round ${roundNum}: [inc, sc] ${increases} times (${newStitches})`,
      );
      currentStitches = newStitches;
      roundNum++;
    }

    // Even rounds for sphere shape
    for (let i = 0; i < 2; i++) {
      pattern.push(
        `Round ${roundNum}: sc in each st around (${currentStitches})`,
      );
      roundNum++;
    }

    // Decrease rounds
    while (currentStitches > MIN_STITCHES) {
      const decreases = MIN_STITCHES;
      const newStitches = currentStitches - decreases;
      pattern.push(
        `Round ${roundNum}: [dec, sc] ${decreases} times (${newStitches})`,
      );
      currentStitches = newStitches;
      roundNum++;
    }

    pattern.push(`Round ${roundNum}: dec around (3), slst and fasten off`);

    onPatternGenerate?.(pattern);
  }, [radius, onPatternGenerate]);

  // Memoize points calculation
  const points = generateSpherePoints();
  const projectedPoints = projectPoints(points, viewAngle);

  return (
    <Card className="w-full max-w-md">
      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="radius-slider">
            Radius (inches)
          </label>
          <Slider
            id="radius-slider"
            value={[radius]}
            onValueChange={(values) => setRadius(values[0])}
            min={1}
            max={10}
            step={0.5}
            className="w-full"
          />
        </div>

        <div className="relative border rounded-lg p-4 aspect-square">
          <motion.svg
            width="300"
            height="300"
            animate={controls}
            className="w-full h-full"
          >
            {projectedPoints.map((point, i) => (
              <motion.circle
                key={`point-${i}`}
                cx={point.x}
                cy={point.y}
                r="1"
                className="fill-primary"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.001 }}
              />
            ))}
          </motion.svg>

          <div className="absolute top-2 right-2 space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsRotating(!isRotating)}
              aria-label={isRotating ? "Pause rotation" : "Start rotation"}
            >
              {isRotating ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setViewAngle(0)}
              aria-label="Reset view"
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Button onClick={generatePattern} className="w-full">
          Generate Pattern
        </Button>
      </CardContent>
    </Card>
  );
}
