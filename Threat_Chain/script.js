'use strict';

const { Contract } = require("fabric-shim")

class ThreatContract extends Contract {
    async saveThreat(ctx, id, info){
        console.info(`Saving threat with ID: ${id}`);
        await ctx.stub.putState(id, Buffer.from(info));

        return `Threat with ID: ${id} saved successfully.`;
    }

    async getThreat(ctx, id) {
        const result = await ctx.stub.getState(id);
        if(!result || result.length === 0) {
            throw new Error(`Threat with ID: ${id} does not exist.`);
        }

        return result.toString();
    }
}

module.exports = ThreatContract;

