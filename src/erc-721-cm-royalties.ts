import { BigInt } from "@graphprotocol/graph-ts/common/numbers";

import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  ConsecutiveTransfer as ConsecutiveTransferEvent,
  DefaultRoyaltySet as DefaultRoyaltySetEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  SetActiveStage as SetActiveStageEvent,
  SetBaseURI as SetBaseURIEvent,
  SetCosigner as SetCosignerEvent,
  SetCrossmintAddress as SetCrossmintAddressEvent,
  SetGlobalWalletLimit as SetGlobalWalletLimitEvent,
  SetMaxMintableSupply as SetMaxMintableSupplyEvent,
  SetMintCurrency as SetMintCurrencyEvent,
  SetMintable as SetMintableEvent,
  SetTimestampExpirySeconds as SetTimestampExpirySecondsEvent,
  TokenRoyaltySet as TokenRoyaltySetEvent,
  Transfer as TransferEvent,
  TransferValidatorUpdated as TransferValidatorUpdatedEvent,
  UpdateStage as UpdateStageEvent,
  Withdraw as WithdrawEvent,
  WithdrawERC20 as WithdrawERC20Event,
  ERC721CMRoyalties as TokenContract,
} from "../generated/ERC721CMRoyalties/ERC721CMRoyalties";
import {
  Approval,
  ApprovalForAll,
  ConsecutiveTransfer,
  DefaultRoyaltySet,
  OwnershipTransferred,
  SetActiveStage,
  SetBaseURI,
  SetCosigner,
  SetCrossmintAddress,
  SetGlobalWalletLimit,
  SetMaxMintableSupply,
  SetMintCurrency,
  SetMintable,
  SetTimestampExpirySeconds,
  TokenRoyaltySet,
  Transfer,
  TransferValidatorUpdated,
  UpdateStage,
  Withdraw,
  WithdrawERC20,
  Token,
  User,
} from "../generated/schema";

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.owner = event.params.owner;
  entity.approved = event.params.approved;
  entity.tokenId = event.params.tokenId;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.owner = event.params.owner;
  entity.operator = event.params.operator;
  entity.approved = event.params.approved;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleConsecutiveTransfer(
  event: ConsecutiveTransferEvent
): void {
  let entity = new ConsecutiveTransfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.fromTokenId = event.params.fromTokenId;
  entity.toTokenId = event.params.toTokenId;
  entity.from = event.params.from;
  entity.to = event.params.to;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleDefaultRoyaltySet(event: DefaultRoyaltySetEvent): void {
  let entity = new DefaultRoyaltySet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.receiver = event.params.receiver;
  entity.feeNumerator = event.params.feeNumerator;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
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

export function handleSetActiveStage(event: SetActiveStageEvent): void {
  let entity = new SetActiveStage(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.activeStage = event.params.activeStage;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleSetBaseURI(event: SetBaseURIEvent): void {
  let entity = new SetBaseURI(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.baseURI = event.params.baseURI;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleSetCosigner(event: SetCosignerEvent): void {
  let entity = new SetCosigner(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.cosigner = event.params.cosigner;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleSetCrossmintAddress(
  event: SetCrossmintAddressEvent
): void {
  let entity = new SetCrossmintAddress(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.crossmintAddress = event.params.crossmintAddress;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleSetGlobalWalletLimit(
  event: SetGlobalWalletLimitEvent
): void {
  let entity = new SetGlobalWalletLimit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.globalWalletLimit = event.params.globalWalletLimit;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleSetMaxMintableSupply(
  event: SetMaxMintableSupplyEvent
): void {
  let entity = new SetMaxMintableSupply(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.maxMintableSupply = event.params.maxMintableSupply;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleSetMintCurrency(event: SetMintCurrencyEvent): void {
  let entity = new SetMintCurrency(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.mintCurrency = event.params.mintCurrency;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleSetMintable(event: SetMintableEvent): void {
  let entity = new SetMintable(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.mintable = event.params.mintable;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleSetTimestampExpirySeconds(
  event: SetTimestampExpirySecondsEvent
): void {
  let entity = new SetTimestampExpirySeconds(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.expiry = event.params.expiry;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleTokenRoyaltySet(event: TokenRoyaltySetEvent): void {
  let entity = new TokenRoyaltySet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.tokenId = event.params.tokenId;
  entity.receiver = event.params.receiver;
  entity.feeNumerator = event.params.feeNumerator;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.from = event.params.from;
  entity.to = event.params.to;
  entity.tokenId = event.params.tokenId;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();

  let token = Token.load(event.params.tokenId.toString());
  let tokenContract = TokenContract.bind(event.address);

  if (token == null) {
    token = new Token(event.params.tokenId.toString());
    token.creator = event.params.to.toHexString();
    token.tokenID = event.params.tokenId;
    token.createdAtTimestamp = event.block.timestamp;
    token.name = tokenContract.name();
  }

  if (tokenContract.tokenURI(event.params.tokenId) != token.tokenURI) {
    token.tokenURI = tokenContract.tokenURI(event.params.tokenId);
  }
  token.owner = event.params.to.toHexString();
  token.save();

  let user = User.load(event.params.to.toHexString());
  if (user == null) {
    user = new User(event.params.to.toHexString());
    user.save();
  }
}

export function handleTransferValidatorUpdated(
  event: TransferValidatorUpdatedEvent
): void {
  let entity = new TransferValidatorUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.oldValidator = event.params.oldValidator;
  entity.newValidator = event.params.newValidator;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleUpdateStage(event: UpdateStageEvent): void {
  let entity = new UpdateStage(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.stage = event.params.stage;
  entity.price = event.params.price;
  entity.mintFee = event.params.mintFee;
  entity.walletLimit = event.params.walletLimit;
  entity.merkleRoot = event.params.merkleRoot;
  entity.maxStageSupply = event.params.maxStageSupply;
  entity.startTimeUnixSeconds = event.params.startTimeUnixSeconds;
  entity.endTimeUnixSeconds = event.params.endTimeUnixSeconds;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleWithdraw(event: WithdrawEvent): void {
  let entity = new Withdraw(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.value = event.params.value;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleWithdrawERC20(event: WithdrawERC20Event): void {
  let entity = new WithdrawERC20(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.mintCurrency = event.params.mintCurrency;
  entity.value = event.params.value;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
