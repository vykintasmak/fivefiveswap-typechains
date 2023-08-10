/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface PairInterface extends utils.Interface {
  functions: {
    "supportsInterface(bytes4)": FunctionFragment;
    "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "getReserves()": FunctionFragment;
    "mint(address)": FunctionFragment;
    "burn(address)": FunctionFragment;
    "swap(uint256,uint256,address,bytes)": FunctionFragment;
    "skim(address)": FunctionFragment;
    "sync()": FunctionFragment;
    "name()": FunctionFragment;
    "symbol()": FunctionFragment;
    "decimals()": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "allowance(address,address)": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "version()": FunctionFragment;
    "salt()": FunctionFragment;
    "nonces(address)": FunctionFragment;
    "factory()": FunctionFragment;
    "token0()": FunctionFragment;
    "token0Id()": FunctionFragment;
    "token1()": FunctionFragment;
    "price0CumulativeLast()": FunctionFragment;
    "price1CumulativeLast()": FunctionFragment;
    "kLast()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "supportsInterface"
      | "onERC1155Received"
      | "onERC1155BatchReceived"
      | "transfer"
      | "transferFrom"
      | "approve"
      | "permit"
      | "getReserves"
      | "mint"
      | "burn"
      | "swap"
      | "skim"
      | "sync"
      | "name"
      | "symbol"
      | "decimals"
      | "balanceOf"
      | "allowance"
      | "totalSupply"
      | "version"
      | "salt"
      | "nonces"
      | "factory"
      | "token0"
      | "token0Id"
      | "token1"
      | "price0CumulativeLast"
      | "price1CumulativeLast"
      | "kLast"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155Received",
    values: [string, string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155BatchReceived",
    values: [string, string, BigNumberish[], BigNumberish[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "permit",
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getReserves",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "mint", values: [string]): string;
  encodeFunctionData(functionFragment: "burn", values: [string]): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [BigNumberish, BigNumberish, string, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "skim", values: [string]): string;
  encodeFunctionData(functionFragment: "sync", values?: undefined): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "allowance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;
  encodeFunctionData(functionFragment: "salt", values?: undefined): string;
  encodeFunctionData(functionFragment: "nonces", values: [string]): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(functionFragment: "token0", values?: undefined): string;
  encodeFunctionData(functionFragment: "token0Id", values?: undefined): string;
  encodeFunctionData(functionFragment: "token1", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "price0CumulativeLast",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "price1CumulativeLast",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "kLast", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155BatchReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getReserves",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "skim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sync", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "salt", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token0", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token0Id", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token1", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "price0CumulativeLast",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "price1CumulativeLast",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "kLast", data: BytesLike): Result;

  events: {
    "Transfer(address,address,uint256)": EventFragment;
    "Approval(address,address,uint256)": EventFragment;
    "Mint(address,uint256,uint256)": EventFragment;
    "Burn(address,uint256,uint256,address)": EventFragment;
    "Swap(address,uint256,uint256,uint256,uint256,address)": EventFragment;
    "Sync(uint112,uint112)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Mint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Burn"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Swap"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Sync"): EventFragment;
}

export interface TransferEventObject {
  sender: string;
  receiver: string;
  value: BigNumber;
}
export type TransferEvent = TypedEvent<
  [string, string, BigNumber],
  TransferEventObject
>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface ApprovalEventObject {
  owner: string;
  spender: string;
  value: BigNumber;
}
export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber],
  ApprovalEventObject
>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export interface MintEventObject {
  sender: string;
  amount0: BigNumber;
  amount1: BigNumber;
}
export type MintEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  MintEventObject
>;

export type MintEventFilter = TypedEventFilter<MintEvent>;

export interface BurnEventObject {
  sender: string;
  amount0: BigNumber;
  amount1: BigNumber;
  to: string;
}
export type BurnEvent = TypedEvent<
  [string, BigNumber, BigNumber, string],
  BurnEventObject
>;

export type BurnEventFilter = TypedEventFilter<BurnEvent>;

export interface SwapEventObject {
  sender: string;
  amount0In: BigNumber;
  amount1In: BigNumber;
  amount0Out: BigNumber;
  amount1Out: BigNumber;
  to: string;
}
export type SwapEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber, BigNumber, string],
  SwapEventObject
>;

export type SwapEventFilter = TypedEventFilter<SwapEvent>;

export interface SyncEventObject {
  reserve0: BigNumber;
  reserve1: BigNumber;
}
export type SyncEvent = TypedEvent<[BigNumber, BigNumber], SyncEventObject>;

export type SyncEventFilter = TypedEventFilter<SyncEvent>;

export interface Pair extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PairInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    supportsInterface(
      interface_id: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    onERC1155Received(
      _operator: string,
      _from: string,
      _id: BigNumberish,
      _value: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    onERC1155BatchReceived(
      _operator: string,
      _from: string,
      _ids: BigNumberish[],
      _values: BigNumberish[],
      _data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    transfer(
      _to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    transferFrom(
      _from: string,
      _to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    approve(
      _spender: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    permit(
      _owner: string,
      _spender: string,
      _value: BigNumberish,
      _deadline: BigNumberish,
      _v: BigNumberish,
      _r: BytesLike,
      _s: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    getReserves(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, number]>;

    mint(
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    burn(
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    swap(
      amount0Out: BigNumberish,
      amount1Out: BigNumberish,
      to: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    skim(
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    sync(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<[string]>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    balanceOf(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    allowance(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    version(overrides?: CallOverrides): Promise<[string]>;

    salt(overrides?: CallOverrides): Promise<[string]>;

    nonces(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    factory(overrides?: CallOverrides): Promise<[string]>;

    token0(overrides?: CallOverrides): Promise<[string]>;

    token0Id(overrides?: CallOverrides): Promise<[BigNumber]>;

    token1(overrides?: CallOverrides): Promise<[string]>;

    price0CumulativeLast(overrides?: CallOverrides): Promise<[BigNumber]>;

    price1CumulativeLast(overrides?: CallOverrides): Promise<[BigNumber]>;

    kLast(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  supportsInterface(
    interface_id: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  onERC1155Received(
    _operator: string,
    _from: string,
    _id: BigNumberish,
    _value: BigNumberish,
    _data: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  onERC1155BatchReceived(
    _operator: string,
    _from: string,
    _ids: BigNumberish[],
    _values: BigNumberish[],
    _data: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  transfer(
    _to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  transferFrom(
    _from: string,
    _to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  approve(
    _spender: string,
    _value: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  permit(
    _owner: string,
    _spender: string,
    _value: BigNumberish,
    _deadline: BigNumberish,
    _v: BigNumberish,
    _r: BytesLike,
    _s: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  getReserves(
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber, number]>;

  mint(
    to: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  burn(
    to: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  swap(
    amount0Out: BigNumberish,
    amount1Out: BigNumberish,
    to: string,
    data: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  skim(
    to: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  sync(overrides?: Overrides & { from?: string }): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  symbol(overrides?: CallOverrides): Promise<string>;

  decimals(overrides?: CallOverrides): Promise<number>;

  balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  allowance(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  version(overrides?: CallOverrides): Promise<string>;

  salt(overrides?: CallOverrides): Promise<string>;

  nonces(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  factory(overrides?: CallOverrides): Promise<string>;

  token0(overrides?: CallOverrides): Promise<string>;

  token0Id(overrides?: CallOverrides): Promise<BigNumber>;

  token1(overrides?: CallOverrides): Promise<string>;

  price0CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>;

  price1CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>;

  kLast(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    supportsInterface(
      interface_id: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    onERC1155Received(
      _operator: string,
      _from: string,
      _id: BigNumberish,
      _value: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    onERC1155BatchReceived(
      _operator: string,
      _from: string,
      _ids: BigNumberish[],
      _values: BigNumberish[],
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    transfer(
      _to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferFrom(
      _from: string,
      _to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    approve(
      _spender: string,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    permit(
      _owner: string,
      _spender: string,
      _value: BigNumberish,
      _deadline: BigNumberish,
      _v: BigNumberish,
      _r: BytesLike,
      _s: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getReserves(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber, number]>;

    mint(to: string, overrides?: CallOverrides): Promise<BigNumber>;

    burn(
      to: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    swap(
      amount0Out: BigNumberish,
      amount1Out: BigNumberish,
      to: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    skim(to: string, overrides?: CallOverrides): Promise<void>;

    sync(overrides?: CallOverrides): Promise<void>;

    name(overrides?: CallOverrides): Promise<string>;

    symbol(overrides?: CallOverrides): Promise<string>;

    decimals(overrides?: CallOverrides): Promise<number>;

    balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    allowance(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<string>;

    salt(overrides?: CallOverrides): Promise<string>;

    nonces(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<string>;

    token0(overrides?: CallOverrides): Promise<string>;

    token0Id(overrides?: CallOverrides): Promise<BigNumber>;

    token1(overrides?: CallOverrides): Promise<string>;

    price0CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>;

    price1CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>;

    kLast(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "Transfer(address,address,uint256)"(
      sender?: string | null,
      receiver?: string | null,
      value?: null
    ): TransferEventFilter;
    Transfer(
      sender?: string | null,
      receiver?: string | null,
      value?: null
    ): TransferEventFilter;

    "Approval(address,address,uint256)"(
      owner?: string | null,
      spender?: string | null,
      value?: null
    ): ApprovalEventFilter;
    Approval(
      owner?: string | null,
      spender?: string | null,
      value?: null
    ): ApprovalEventFilter;

    "Mint(address,uint256,uint256)"(
      sender?: string | null,
      amount0?: null,
      amount1?: null
    ): MintEventFilter;
    Mint(
      sender?: string | null,
      amount0?: null,
      amount1?: null
    ): MintEventFilter;

    "Burn(address,uint256,uint256,address)"(
      sender?: string | null,
      amount0?: null,
      amount1?: null,
      to?: null
    ): BurnEventFilter;
    Burn(
      sender?: string | null,
      amount0?: null,
      amount1?: null,
      to?: null
    ): BurnEventFilter;

    "Swap(address,uint256,uint256,uint256,uint256,address)"(
      sender?: string | null,
      amount0In?: null,
      amount1In?: null,
      amount0Out?: null,
      amount1Out?: null,
      to?: null
    ): SwapEventFilter;
    Swap(
      sender?: string | null,
      amount0In?: null,
      amount1In?: null,
      amount0Out?: null,
      amount1Out?: null,
      to?: null
    ): SwapEventFilter;

    "Sync(uint112,uint112)"(reserve0?: null, reserve1?: null): SyncEventFilter;
    Sync(reserve0?: null, reserve1?: null): SyncEventFilter;
  };

  estimateGas: {
    supportsInterface(
      interface_id: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    onERC1155Received(
      _operator: string,
      _from: string,
      _id: BigNumberish,
      _value: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    onERC1155BatchReceived(
      _operator: string,
      _from: string,
      _ids: BigNumberish[],
      _values: BigNumberish[],
      _data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    transfer(
      _to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    transferFrom(
      _from: string,
      _to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    approve(
      _spender: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    permit(
      _owner: string,
      _spender: string,
      _value: BigNumberish,
      _deadline: BigNumberish,
      _v: BigNumberish,
      _r: BytesLike,
      _s: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    getReserves(overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    burn(
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    swap(
      amount0Out: BigNumberish,
      amount1Out: BigNumberish,
      to: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    skim(
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    sync(overrides?: Overrides & { from?: string }): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    allowance(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;

    salt(overrides?: CallOverrides): Promise<BigNumber>;

    nonces(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<BigNumber>;

    token0(overrides?: CallOverrides): Promise<BigNumber>;

    token0Id(overrides?: CallOverrides): Promise<BigNumber>;

    token1(overrides?: CallOverrides): Promise<BigNumber>;

    price0CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>;

    price1CumulativeLast(overrides?: CallOverrides): Promise<BigNumber>;

    kLast(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    supportsInterface(
      interface_id: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    onERC1155Received(
      _operator: string,
      _from: string,
      _id: BigNumberish,
      _value: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    onERC1155BatchReceived(
      _operator: string,
      _from: string,
      _ids: BigNumberish[],
      _values: BigNumberish[],
      _data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    transfer(
      _to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    transferFrom(
      _from: string,
      _to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    approve(
      _spender: string,
      _value: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    permit(
      _owner: string,
      _spender: string,
      _value: BigNumberish,
      _deadline: BigNumberish,
      _v: BigNumberish,
      _r: BytesLike,
      _s: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    getReserves(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mint(
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    burn(
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    swap(
      amount0Out: BigNumberish,
      amount1Out: BigNumberish,
      to: string,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    skim(
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    sync(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    balanceOf(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allowance(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    salt(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nonces(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token0(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token0Id(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token1(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    price0CumulativeLast(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    price1CumulativeLast(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    kLast(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
