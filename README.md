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
  console.log(
    `The player ${p.playerid} with ip ${GetPlayerRawIp(
      p.playerid
    )} has connected to the server`
  );
});

OnPlayerSpawn((p: SampPlayer): void => {
  const { w, x, y, z } = GetPlayerRotationQuat(p.playerid);
  console.log(w, x, y, z);
});
```
