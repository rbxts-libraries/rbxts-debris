// Debris.d
// Written by Demo (R0BL0XIAN_D3M0)
// [https://www.roblox.com/users/289025524/profile]
// 06/02/2023

// Types
type Object<T> =
	| object
	| thread
	| RBXScriptConnection
	| Instance
	| Array<T>
	| []
	| ItemCache<T>;

type ItemCache<T> = [T];

/**
	@within Debris

	@function RemoveObject

	@param Object Object -- The debris object.

	@param ObjectClass string -- The supposed object's class type.

	Destroy the specified debris object.

	### Luau:
	```lua
		--// Functions
		--// Placeholder code.
		local Part: Part = Instance.new("Part")
		Part.Name = "Part"
		Part.Position = Vector3.new(0, 5, 0)
		Part.Size = Vector3.new(5, 1, 5)
		Part.Parent = Workspace

		Debris.RemoveObject(Part, "Part")
	```

	### TypeScript:
	```ts
		// Functions
		// Placeholder code.
		const Part = new Instance("Part");
		Part.Name = "Part";
		Part.Position = new Vector3(0, 5, 0);
		Part.Size = new Vector3(5, 1, 5);
		Part.Parent = Workspace;

		Debris.RemoveObject(Part, "Part");
	```
*/
export function RemoveObject<T extends Object<Array<T>>>(
	object: Object<T>,
	objectClass: string
): T;

/**
	@within Debris

	@function AddObject

	@param Object Object -- The debris object.

	@param LifeTime number -- The specified life time.

	@return table -- Return the debris object table.

	Add the specified debris object.

	### Luau:
	```lua
		--// Functions
		--// Placeholder code.
		local Part: Part = Instance.new("Part")
		Part.Name = "Part"
		Part.Position = Vector3.new(0, 5, 0)
		Part.Size = Vector3.new(5, 1, 5)
		Part.Parent = Workspace

		Debris.AddObject(Part, 3)
	```

	### TypeScript:
	```ts
		// Functions
		// Placeholder code.
		const Part = new Instance("Part");
		Part.Name = "Part";
		Part.Position = new Vector3(0, 5, 0);
		Part.Size = new Vector3(5, 1, 5);
		Part.Parent = Workspace;

		Debris.AddObject(Part, 3);
	```
*/
export function AddObject<T extends Object<Array<T>>>(
	object: Object<T>,
	lifetime: number
): ItemCache<T>;

/**
	@within Debris

	@function AddObjectArray

	@param ObjectArray table -- The debris objects.

	@param LifeTime number -- The specified life time.

	Add the specified debris objects.

	### Luau:
	```lua
		--// Functions
		--// Placeholder code.
		local Part: Part = Instance.new("Part")
		Part.Name = "Part"
		Part.Position = Vector3.new(0, 5, 0)
		Part.Size = Vector3.new(5, 1, 5)
		Part.Parent = Workspace

		local part: Part = Instance.new("Part")
		part.Name = "part"
		part.Position = Vector3.new(0, 5, 5)
		part.Size = Vector3.new(5, 1, 5)
		part.Parent = Workspace

		Debris.AddObjectArray({ Part, part }, 3)
	```

	### TypeScript:
	```ts
		// Functions
		// Placeholder code.
		const Part = new Instance("Part");
		Part.Name = "Part";
		Part.Position = new Vector3(0, 5, 0);
		Part.Size = new Vector3(5, 1, 5);
		Part.Parent = Workspace;

		const part = new Instance("Part");
		part.Name = "part";
		part.Position = new Vector3(0, 5, 5);
		part.Size = new Vector3(5, 1, 5);
		part.Parent = Workspace;

		Debris.AddObjectArray([Part, part], 3);
	```
*/
export function AddObjectArray<T extends Array<Object<Array<T>>>>(
	objects: Array<Object<Array<T>>>,
	lifetime: number
): ItemCache<T>;

/**
	@within Debris

	@function RetrieveDebris

	@param Object Object -- The debris object.

	@return table -- Return the debris instance's table.

	Retrieve the specified debris instance's table.

	### Luau:
	```lua
		--// Functions
		--// Placeholder code.
		local Part: Part = Instance.new("Part")
		Part.Name = "Part"
		Part.Position = Vector3.new(0, 5, 0)
		Part.Size = Vector3.new(5, 1, 5)
		Part.Parent = Workspace

		local part: Part = Instance.new("Part")
		part.Name = "part"
		part.Position = Vector3.new(0, 5, 5)
		part.Size = Vector3.new(5, 1, 5)
		part.Parent = Workspace

		local partDebrisTable: { [Instance]: Instance } = Debris.RetrieveDebris(Part)
	```

	### TypeScript:
	```ts
		// Functions
		// Placeholder code.
		const Part = new Instance("Part");
		Part.Name = "Part";
		Part.Position = new Vector3(0, 5, 0);
		Part.Size = new Vector3(5, 1, 5);
		Part.Parent = Workspace;

		const part = new Instance("Part");
		part.Name = "part";
		part.Position = new Vector3(0, 5, 5);
		part.Size = new Vector3(5, 1, 5);
		part.Parent = Workspace;

		const partDebrisTable: Array<typeof Instance> = Debris.RetrieveDebris(Part)
	```
*/
export function RetrieveDebris<T extends Object<Array<T>>>(
	object: Object<T>
): ItemCache<T>;

/**
	@within Debris

	@function RetrieveAllDebris

	@return table -- Return the cached instances table.

	Retrieve all debris instances.

	### Luau:
	```lua
		--// Functions
		--// Placeholder code.
		local partDebrisTable: { [Instance]: Instance } = Debris.RetrieveAllDebris()
	```

	### TypeScript:
	```ts
		// Functions
		// Placeholder code.
		const partDebrisTable: Array<typeof Instance> = Debris.RetrieveAllDebris()
	```
*/
export function RetrieveAllDebris<T extends Array<defined>>(): ItemCache<T>;
