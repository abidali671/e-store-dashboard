type Primitive = string | number | boolean | undefined | null;
type JSONArray = JSONValue[];
type JSONObject = { [key: string]: JSONValue };

export type JSONValue = Primitive | JSONArray | JSONObject;
