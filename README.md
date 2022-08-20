# omp-wrapper

A wrapper of the omp new scripting api (natives and callbacks) for samp-node.

## Getting started

```
npm i omp-wrapper
```

## Example

```ts
import { OnPlayerConnect, OnPlayerSpawn, SampPlayer } from "samp-node-lib";
import { GetPlayerRawIp, GetPlayerRotationQuat } from "omp-wrapper";

OnPlayerConnect((p: SampPlayer): void => {
  const { playerid: number } = p;
  const ip: string = GetPlayerRawIp(playerid);
  console.log(
    `The player ${playerid} with ip ${ip} has connected to the server`
  );
});

OnPlayerSpawn((p: SampPlayer): void => {
  const {
    w: number,
    x: number,
    y: number,
    z: number,
  } = GetPlayerRotationQuat(p.playerid);
  console.log(w, x, y, z);
});
```
