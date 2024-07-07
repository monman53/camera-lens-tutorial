import type { Vec } from "./math"

export type LightPoint = { type: "Point", c: Vec, wavelengths: number[] }
export type LightParallel = { type: "Parallel", s: Vec, t: Vec, wavelengths: number[] }
export type LightType = LightPoint | LightParallel

export type LensPlane = {
    x: number,
    r: number,
    h: number,
    na: number,
    nb: number,
}

export type Lens = {
    planes: LensPlane[]
    aperture: number,
}

export type LensGroup = {
    lenses: Lens[],
    selected: boolean,
}

export type Ray = {
    s: Vec,
    v: Vec,
    wavelength: number,
    idx: number,
}