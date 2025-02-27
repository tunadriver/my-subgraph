import {
    CommsEstablished as CommsEstablishedEvent,
    OwnershipTransferred as OwnershipTransferredEvent,
} from "../generated/Comms/Comms";
import { CommsEstablished, OwnershipTransferred } from "../generated/schema";

export function handleCommsEstablished(event: CommsEstablishedEvent): void {
    let entity = new CommsEstablished(event.transaction.hash);

    entity.account = event.params.account;
    entity.isCommsEstablished = event.params.isCommsEstablished;
    entity.blockNumber = event.block.number;
    entity.blockTimestamp = event.block.timestamp;
    entity.transactionHash = event.transaction.hash;

    entity.save();
}

export function handleOwnershipTransferred(event: OwnershipTransferredEvent): void {
    let entity = new OwnershipTransferred(event.transaction.hash);

    entity.previousOwner = event.params.previousOwner;
    entity.newOwner = event.params.newOwner;
    entity.blockNumber = event.block.number;
    entity.blockTimestamp = event.block.timestamp;
    entity.transactionHash = event.transaction.hash;

    entity.save();
}
