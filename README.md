# omp-wrapper

A functional wrapper of the omp new scripting api (natives and callbacks) for samp-node.

## Getting started

```sh
npm install omp-wrapper
```

## Example

```ts
import { GetPlayerRawIp, GetPlayerRotationQuat } from "omp-wrapper";

// In an event
const ip: string = GetPlayerRawIp(playerid);
console.log(`The player ${playerid} with ip ${ip} has connected to the server`);

// In an event
const {
  w: number,
  x: number,
  y: number,
  z: number,
} = GetPlayerRotationQuat(p.playerid);
console.log(w, x, y, z);
```
