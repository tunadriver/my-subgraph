import { BigInt } from "@graphprotocol/graph-ts";
import {
    Approval as ApprovalEvent,
    OwnershipTransferred as OwnershipTransferredEvent,
    Transfer as TransferEvent,
} from "../generated/Moon/Moon";
import { Approval, OwnershipTransferred, Transfer, Holder } from "../generated/schema";

export function handleApproval(event: ApprovalEvent): void {
    let entity = new Approval(
        event.transaction.hash.concatI32(event.logIndex.toI32())
    );
    entity.owner = event.params.owner;
    entity.spender = event.params.spender;
    entity.value = event.params.value;
    entity.blockNumber = event.block.number;
    entity.blockTimestamp = event.block.timestamp;
    entity.transactionHash = event.transaction.hash;
    entity.save();
}

export function handleOwnershipTransferred(event: OwnershipTransferredEvent): void {
    let entity = new OwnershipTransferred(
        event.transaction.hash.concatI32(event.logIndex.toI32())
    );
    entity.previousOwner = event.params.previousOwner;
    entity.newOwner = event.params.newOwner;
    entity.blockNumber = event.block.number;
    entity.blockTimestamp = event.block.timestamp;
    entity.transactionHash = event.transaction.hash;
    entity.save();
}

export function handleTransfer(event: TransferEvent): void {
    // Tạo entity Transfer trước
    let transfer = new Transfer(
        event.transaction.hash.concatI32(event.logIndex.toI32())
    );
    transfer.from = event.params.from;
    transfer.to = event.params.to;
    transfer.value = event.params.value;
    transfer.blockNumber = event.block.number;
    transfer.blockTimestamp = event.block.timestamp;
    transfer.transactionHash = event.transaction.hash;

    // Xử lý sender (from)
    let fromHolder = Holder.load(event.params.from);
    if (!fromHolder) {
        fromHolder = new Holder(event.params.from);
        fromHolder.balance = BigInt.fromI32(0);
        fromHolder.transfers = []; // Khởi tạo danh sách transfers rỗng
    }
    fromHolder.balance = fromHolder.balance.minus(event.params.value);
    fromHolder.blockNumber = event.block.number;
    fromHolder.blockTimestamp = event.block.timestamp;
    fromHolder.transactionHash = event.transaction.hash;
    // Thêm transfer vào danh sách transfers của fromHolder
    let fromTransfers = fromHolder.transfers;
    fromTransfers.push(transfer.id);
    fromHolder.transfers = fromTransfers;

    // Xử lý receiver (to)
    let toHolder = Holder.load(event.params.to);
    if (!toHolder) {
        toHolder = new Holder(event.params.to);
        toHolder.balance = BigInt.fromI32(0);
        toHolder.transfers = []; // Khởi tạo danh sách transfers rỗng
    }
    toHolder.balance = toHolder.balance.plus(event.params.value);
    toHolder.blockNumber = event.block.number;
    toHolder.blockTimestamp = event.block.timestamp;
    toHolder.transactionHash = event.transaction.hash;
    // Thêm transfer vào danh sách transfers của toHolder
    let toTransfers = toHolder.transfers;
    toTransfers.push(transfer.id);
    toHolder.transfers = toTransfers;

    // Lưu tất cả thay đổi
    transfer.save();
    fromHolder.save();
    toHolder.save();
}
