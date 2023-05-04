export { default as pathnames } from './pathnames';

export type Primitive = string | number | boolean | undefined | null;
export type JSONArray = JSONValue[];
export type JSONObject = { [key: string]: JSONValue };

export type JSONValue = Primitive | JSONArray | JSONObject;
