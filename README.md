# Debris

Debris is a highly personalized and lightweight application, served as an alternative to Roblox's traditional Debris service.

## Installation

### 📦 — NPM:

```
npm i @rbxts/debris
```

### 🧶 — Yarn:

```
yarn add @rbxts/debris
```

### 📀 — pnPM:

```
pnpm add @rbxts/debris
```

## Cleanser API

### Types

```ts
type Object<T> = object | thread | RBXScriptConnection | Instance | Array<T> | [] | ItemCache<T>;

type ItemCache<T> = [T];
```

### `Debris.RemoveObject`

```ts
function RemoveObject<T extends Object<Array<T>>>(object: Object<T>, objectClass: string): T;
```

Destroy the specified debris object.

### `Debris.AddObject`

```ts
function AddObject<T extends Object<Array<T>>>(object: Object<T>, lifetime: number): ItemCache<T>;
```

Add the specified debris object.

### `Debris.AddObjectArray`

```ts
function AddObjectArray<T extends Array<Object<Array<T>>>>(
	objects: Array<Object<Array<T>>>,
	lifetime: number,
): ItemCache<T>;
```

Add the specified debris objects.

### `Debris.RetrieveDebris`

```ts
function RetrieveDebris<T extends Object<Array<T>>>(object: Object<T>): ItemCache<T>;
```

Retrieve the specified debris instance's table.

### `Debris.RetrieveAllDebris`

```ts
function RetrieveAllDebris<T extends Array<defined>>(): ItemCache<T>;
```

Retrieve all debris instances.

## Example

```ts
// Services
import { Workspace } from "@rbxts/services";

// Modules
import { Debris } from "@rbxts/debris";

// Functions
const Part = new Instance("Part");
Part.Name = "Part";
Part.Position = new Vector3(0, 5, 0);
Part.Size = new Vector3(5, 1, 5);
Part.Parent = Workspace;

Debris.AddObject(Part, math.huge);
task.wait(3);
Debris.RemoveObject(Part, "Part");
```
