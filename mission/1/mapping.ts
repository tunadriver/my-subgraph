import { Enlisted as EnlistedEvent } from "../generated/Enlist/Enlist";
import { Enlisted } from "../generated/schema";

export function handleEnlisted(event: EnlistedEvent): void {
     // Create a new Enlisted entity with the transaction hash as the unique ID
     let enlistedEntity = new Enlisted(event.transaction.hash);
 
     // Set entity properties based on event data
     enlistedEntity.account = event.params.user; // Address of the enlisted user
     enlistedEntity.blockNumber = event.block.number; // Block number when event was emitted
     enlistedEntity.blockTimestamp = event.block.timestamp; // Timestamp of the block
     enlistedEntity.transactionHash = event.transaction.hash; // Transaction hash
 
     // Save entity to the Graph database
     enlistedEntity.save();
}
