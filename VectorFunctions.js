/**
 * @author Owen Feldmann <ofeldman@unca.edu>
 * Assignment 2: Vector Operations Tutorial Site
 * Last Modified: 2/4/2022
 * 
 * All functions are limited to R3 exclusively.
 * To work in R2, just set the last value in each vector or point to be zero: [2.3, -6, 0]
 */

/**
 * Adds two vectors in R3: v1 + v2
 * @param {float[]} v1 a vector in R3
 * @param {float[]} v2 a vector in R3
 * @returns {float[]} a vector in R3: v1 + v2
 */
function VectorAddition(v1, v2)
{
	var result = new [null, null, null];
	for(var i = 0; i < 3; i++)
	{
		result[i] = v1[i] + v2[i];
	}
	
	return result;
}

/**
 * Subtractions vectors in R3: v1 - v2
 * @param {*} v1 a vector in R3
 * @param {*} v2 a vector in R3
 * @returns {float[]} a vector in R3: v1 - v2
 */
function VectorSubraction(v1, v2)
{
	return VectorAddition(v1, ScalarVectorMultiplication(-1, v2));
}

/**
 * Multiplies a vector in R3 by a scalar: s * v
 * @param {float} s a scalar
 * @param {float[]} v a vector in R3
 * @returns {float[]} a vector in R3: s * v
 */
function ScalarVectorMultiplication(s, v)
{
	var result = [null, null, null];
	for(var i = 0; i < 3; i++)
	{
		result[i] = v[i] * s;
	}
	
	return result;
}

/**
 * The cross product of two vectors in R3: v1 x v2
 * @param {float[]} v1 a vector in R3
 * @param {float[]} v2 a vector in R3
 * @returns {float[]}a vector in R3: v1 x v2
 */
function CrossProduct(v1, v2)
{
	/**
	 * |	i	v1[0]	v2[0]	|
	 * |	j	v1[1]	v2[1]	|
	 * |	k	v1[2]	v2[2]	|
	 */
	var result = [null, null, null];
	result[0] = (v1[1] * v2[2]) - (v1[2] * v2[1]);
	result[1] = (v1[2] * v2[0]) - (v2[2] * v1[0]);
	result[2] = (v1[0] * v2[1]) - (v2[0] * v1[1]);
	
	return result;
}

/**
 * The dot product of two vectors in R3: v1 * v2
 * @param {float[]} v1 a vector in R3
 * @param {float[]} v2 a vector in R3
 * @returns {float} a scalar: v1 * v2
 */
function DotProduct(v1, v2)
{
	var result = 0;
	for(var i = 0; i < 3; i++)
	{
		result += v1[i] * v2[i];
	}
	
	return result;
}

/**
 * Calculates the magnitude of a vector in R3: |v|
 * @param {float[]} v a vector in R3
 * @returns {float} a scalar: |v|
 */
function Magnitude(v)
{
	return Math.sqrt(DotProduct(v, v));
}

/**
 * Normalizes a vector in R3: v / |v|
 * @param {float[]} v a vector in R3
 * @returns {float[]} a normalized vector in R3: v / |v|
 */
function Normalize(v)
{
	var magnitude = Magnitude(v);
	var result = [null, null, null];
	for(var i = 0; i < 3; i++)
	{
		result[i] = v[i] / magnitude;
	}
	
	return result;
}

/**
 * Subtractions a point from a point to form a vector: v = p2 - p1
 * @param {float[]} p1 a point in R3
 * @param {float[]} p2 a point in R3
 * @returns {float[]} a vector in R3: v = p2 - p1
 */
function PointPointSubtraction(p1, p2)
{
	var result = [null, null, null];
	for(var i = 0; i < 3; i++)
	{
		result[i] = p2[i] - p1[i];
	}
	
	return result;
}