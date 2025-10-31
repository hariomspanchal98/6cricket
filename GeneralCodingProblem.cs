using System;
using System.Collections.Generic;

public class Program
{
    public struct Range
    {
        public int Min, Max;
        public Range(int min, int max)
        {
            Min = min;
            Max = max;
        }
    }

    public class Camera
    {
        public Range Distance;
        public Range Light;

        public Camera(Range distance, Range light)
        {
            Distance = distance;
            Light = light;
        }
    }

    public static bool IsSoftwareCameraSufficient(
        Range requiredRange,
        Range requiredLight,
        List<Camera> hardwareCameras)
    {
        for (int d = requiredRange.Min; d <= requiredRange.Max; d++)
        {
            for (int l = requiredLight.Min; l <= requiredLight.Max; l++)
            {
                bool covered = false;

                foreach (var cam in hardwareCameras)
                {
                    if (d >= cam.Distance.Min && d <= cam.Distance.Max &&
                        l >= cam.Light.Min && l <= cam.Light.Max)
                    {
                        covered = true;
                        break;
                    }
                }

                if (!covered) return false;
            }
        }

        return true;
    }

    // Example
    public static void Main()
    {
        var requiredRange = new Range(1, 10);
        var requiredLight = new Range(1, 10);

        var hardwareCameras = new List<Camera>
        {
            new Camera(new Range(1, 5), new Range(1, 10)), // Camera A
            new Camera(new Range(5, 10), new Range(1, 5)), // Camera B
            new Camera(new Range(5, 10), new Range(5, 10)) // Camera C
        };

        bool result = IsSoftwareCameraSufficient(requiredRange, requiredLight, hardwareCameras);

        Console.WriteLine(result ? " Hardware cameras are sufficient for the software camera." : " Hardware cameras are NOT sufficient.");
    }
}
