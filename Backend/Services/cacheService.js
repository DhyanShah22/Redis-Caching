const { getRedisClient } = require('../Config/redisConfig');

const getCache = async (key) => {
    const client = getRedisClient();
    try {
        const data = await client.get(key);
        return data;
    } catch (err) {
        console.error('Redis GET error:', err);
        throw err;
    }
};

const setCache = async (key, value, expiration = 3600) => {
    const client = getRedisClient();
    try {
        await client.setEx(key, expiration, JSON.stringify(value));
    } catch (err) {
        console.error('Redis SET error:', err);
        throw err;
    }
};

module.exports = {
    getCache,
    setCache,
};
