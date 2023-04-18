// Code generated by wunderctl. DO NOT EDIT.

export type JSONValue = string | number | boolean | JSONObject | Array<JSONValue>;

export type JSONObject = { [key: string]: JSONValue };
import type { GraphQLError } from "@wundergraph/sdk/client";

export interface TestResponse {
	data?: TestResponseData;
	errors?: GraphQLError[];
}

export interface TestResponseData {
	db_findManyTour: {
		id: number;
		name: string;
	}[];
}