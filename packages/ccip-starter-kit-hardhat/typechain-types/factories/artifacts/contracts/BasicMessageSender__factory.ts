/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  BasicMessageSender,
  BasicMessageSenderInterface,
} from "../../../artifacts/contracts/BasicMessageSender";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        internalType: "address",
        name: "link",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "FailedToWithdrawEth",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "messageId",
        type: "bytes32",
      },
    ],
    name: "MessageSent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "OwnershipTransferRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "destinationChainSelector",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "string",
        name: "messageText",
        type: "string",
      },
      {
        internalType: "enum BasicMessageSender.PayFeesIn",
        name: "payFeesIn",
        type: "uint8",
      },
    ],
    name: "send",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "withdrawToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60c06040523480156200001157600080fd5b5060405162001e2038038062001e2083398181016040528101906200003791906200033f565b338060008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603620000ac576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000a390620003e7565b60405180910390fd5b816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161462000133576200013281620001a660201b60201c565b5b5050508173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff168152505050506200047b565b3373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160362000217576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200020e9062000459565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127860405160405180910390a350565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200030782620002da565b9050919050565b6200031981620002fa565b81146200032557600080fd5b50565b60008151905062000339816200030e565b92915050565b60008060408385031215620003595762000358620002d5565b5b6000620003698582860162000328565b92505060206200037c8582860162000328565b9150509250929050565b600082825260208201905092915050565b7f43616e6e6f7420736574206f776e657220746f207a65726f0000000000000000600082015250565b6000620003cf60188362000386565b9150620003dc8262000397565b602082019050919050565b600060208201905081810360008301526200040281620003c0565b9050919050565b7f43616e6e6f74207472616e7366657220746f2073656c66000000000000000000600082015250565b60006200044160178362000386565b91506200044e8262000409565b602082019050919050565b60006020820190508181036000830152620004748162000432565b9050919050565b60805160a051611963620004bd60003960008181610230015261034f0152600081816102840152818161038b0152818161040e01526104b301526119636000f3fe6080604052600436106100595760003560e01c80632c101b17146100655780633aeac4e11461008e57806351cff8d9146100b757806379ba5097146100e05780638da5cb5b146100f7578063f2fde38b1461012257610060565b3661006057005b600080fd5b34801561007157600080fd5b5061008c60048036038101906100879190611002565b61014b565b005b34801561009a57600080fd5b506100b560048036038101906100b09190611085565b610593565b005b3480156100c357600080fd5b506100de60048036038101906100d991906110c5565b610649565b005b3480156100ec57600080fd5b506100f561070d565b005b34801561010357600080fd5b5061010c6108a2565b6040516101199190611101565b60405180910390f35b34801561012e57600080fd5b50610149600480360381019061014491906110c5565b6108cb565b005b60006040518060a00160405280856040516020016101699190611101565b60405160208183030381529060405281526020018460405160200161018e919061119b565b6040516020818303038152906040528152602001600067ffffffffffffffff8111156101bd576101bc610eb2565b5b6040519080825280602002602001820160405280156101f657816020015b6101e3610db5565b8152602001906001900390816101db5790505b50815260200160018081111561020f5761020e6111bd565b5b846001811115610222576102216111bd565b5b1461022e576000610250565b7f00000000000000000000000000000000000000000000000000000000000000005b73ffffffffffffffffffffffffffffffffffffffff16815260200160405180602001604052806000815250815250905060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166320487ded87846040518363ffffffff1660e01b81526004016102dd9291906113e1565b602060405180830381865afa1580156102fa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061031e919061143d565b90506000600180811115610335576103346111bd565b5b846001811115610348576103476111bd565b5b036104b1577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663095ea7b37f0000000000000000000000000000000000000000000000000000000000000000846040518363ffffffff1660e01b81526004016103c8929190611479565b6020604051808303816000875af11580156103e7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061040b91906114da565b507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166396f4e9f988856040518363ffffffff1660e01b81526004016104679291906113e1565b6020604051808303816000875af1158015610486573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104aa919061153d565b9050610553565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166396f4e9f98389866040518463ffffffff1660e01b815260040161050d9291906113e1565b60206040518083038185885af115801561052b573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610550919061153d565b90505b7f54791b38f3859327992a1ca0590ad3c0f08feba98d1a4f56ab0dca74d203392a816040516105829190611579565b60405180910390a150505050505050565b61059b6108df565b60008173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016105d69190611101565b602060405180830381865afa1580156105f3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610617919061143d565b905061064483828473ffffffffffffffffffffffffffffffffffffffff1661096f9092919063ffffffff16565b505050565b6106516108df565b600047905060008273ffffffffffffffffffffffffffffffffffffffff168260405161067c906115c5565b60006040518083038185875af1925050503d80600081146106b9576040519150601f19603f3d011682016040523d82523d6000602084013e6106be565b606091505b5050905080610708573383836040517f9d11f5630000000000000000000000000000000000000000000000000000000081526004016106ff939291906115da565b60405180910390fd5b505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461079d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107949061165d565b60405180910390fd5b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a350565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6108d36108df565b6108dc816109f5565b50565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461096d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610964906116c9565b60405180910390fd5b565b6109f08363a9059cbb60e01b848460405160240161098e929190611479565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610b21565b505050565b3373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610a63576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a5a90611735565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127860405160405180910390a350565b6000610b83826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610be89092919063ffffffff16565b9050600081511115610be35780806020019051810190610ba391906114da565b610be2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bd9906117c7565b60405180910390fd5b5b505050565b6060610bf78484600085610c00565b90509392505050565b606082471015610c45576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c3c90611859565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051610c6e91906118aa565b60006040518083038185875af1925050503d8060008114610cab576040519150601f19603f3d011682016040523d82523d6000602084013e610cb0565b606091505b5091509150610cc187838387610ccd565b92505050949350505050565b60608315610d2f576000835103610d2757610ce785610d42565b610d26576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d1d9061190d565b60405180910390fd5b5b829050610d3a565b610d398383610d65565b5b949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600082511115610d785781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dac919061119b565b60405180910390fd5b6040518060400160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b6000604051905090565b600080fd5b600080fd5b600067ffffffffffffffff82169050919050565b610e1681610df9565b8114610e2157600080fd5b50565b600081359050610e3381610e0d565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610e6482610e39565b9050919050565b610e7481610e59565b8114610e7f57600080fd5b50565b600081359050610e9181610e6b565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610eea82610ea1565b810181811067ffffffffffffffff82111715610f0957610f08610eb2565b5b80604052505050565b6000610f1c610de5565b9050610f288282610ee1565b919050565b600067ffffffffffffffff821115610f4857610f47610eb2565b5b610f5182610ea1565b9050602081019050919050565b82818337600083830152505050565b6000610f80610f7b84610f2d565b610f12565b905082815260208101848484011115610f9c57610f9b610e9c565b5b610fa7848285610f5e565b509392505050565b600082601f830112610fc457610fc3610e97565b5b8135610fd4848260208601610f6d565b91505092915050565b60028110610fea57600080fd5b50565b600081359050610ffc81610fdd565b92915050565b6000806000806080858703121561101c5761101b610def565b5b600061102a87828801610e24565b945050602061103b87828801610e82565b935050604085013567ffffffffffffffff81111561105c5761105b610df4565b5b61106887828801610faf565b925050606061107987828801610fed565b91505092959194509250565b6000806040838503121561109c5761109b610def565b5b60006110aa85828601610e82565b92505060206110bb85828601610e82565b9150509250929050565b6000602082840312156110db576110da610def565b5b60006110e984828501610e82565b91505092915050565b6110fb81610e59565b82525050565b600060208201905061111660008301846110f2565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561115657808201518184015260208101905061113b565b60008484015250505050565b600061116d8261111c565b6111778185611127565b9350611187818560208601611138565b61119081610ea1565b840191505092915050565b600060208201905081810360008301526111b58184611162565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6111f581610df9565b82525050565b600081519050919050565b600082825260208201905092915050565b6000611222826111fb565b61122c8185611206565b935061123c818560208601611138565b61124581610ea1565b840191505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61128581610e59565b82525050565b6000819050919050565b61129e8161128b565b82525050565b6040820160008201516112ba600085018261127c565b5060208201516112cd6020850182611295565b50505050565b60006112df83836112a4565b60408301905092915050565b6000602082019050919050565b600061130382611250565b61130d818561125b565b93506113188361126c565b8060005b8381101561134957815161133088826112d3565b975061133b836112eb565b92505060018101905061131c565b5085935050505092915050565b600060a08301600083015184820360008601526113738282611217565b9150506020830151848203602086015261138d8282611217565b915050604083015184820360408601526113a782826112f8565b91505060608301516113bc606086018261127c565b50608083015184820360808601526113d48282611217565b9150508091505092915050565b60006040820190506113f660008301856111ec565b81810360208301526114088184611356565b90509392505050565b61141a8161128b565b811461142557600080fd5b50565b60008151905061143781611411565b92915050565b60006020828403121561145357611452610def565b5b600061146184828501611428565b91505092915050565b6114738161128b565b82525050565b600060408201905061148e60008301856110f2565b61149b602083018461146a565b9392505050565b60008115159050919050565b6114b7816114a2565b81146114c257600080fd5b50565b6000815190506114d4816114ae565b92915050565b6000602082840312156114f0576114ef610def565b5b60006114fe848285016114c5565b91505092915050565b6000819050919050565b61151a81611507565b811461152557600080fd5b50565b60008151905061153781611511565b92915050565b60006020828403121561155357611552610def565b5b600061156184828501611528565b91505092915050565b61157381611507565b82525050565b600060208201905061158e600083018461156a565b92915050565b600081905092915050565b50565b60006115af600083611594565b91506115ba8261159f565b600082019050919050565b60006115d0826115a2565b9150819050919050565b60006060820190506115ef60008301866110f2565b6115fc60208301856110f2565b611609604083018461146a565b949350505050565b7f4d7573742062652070726f706f736564206f776e657200000000000000000000600082015250565b6000611647601683611127565b915061165282611611565b602082019050919050565b600060208201905081810360008301526116768161163a565b9050919050565b7f4f6e6c792063616c6c61626c65206279206f776e657200000000000000000000600082015250565b60006116b3601683611127565b91506116be8261167d565b602082019050919050565b600060208201905081810360008301526116e2816116a6565b9050919050565b7f43616e6e6f74207472616e7366657220746f2073656c66000000000000000000600082015250565b600061171f601783611127565b915061172a826116e9565b602082019050919050565b6000602082019050818103600083015261174e81611712565b9050919050565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b60006117b1602a83611127565b91506117bc82611755565b604082019050919050565b600060208201905081810360008301526117e0816117a4565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b6000611843602683611127565b915061184e826117e7565b604082019050919050565b6000602082019050818103600083015261187281611836565b9050919050565b6000611884826111fb565b61188e8185611594565b935061189e818560208601611138565b80840191505092915050565b60006118b68284611879565b915081905092915050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b60006118f7601d83611127565b9150611902826118c1565b602082019050919050565b60006020820190508181036000830152611926816118ea565b905091905056fea2646970667358221220cd8142ce0b065a43747131b8b45202ef755882842d8c8782118d6ecf1f0f173864736f6c63430008130033";

type BasicMessageSenderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BasicMessageSenderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BasicMessageSender__factory extends ContractFactory {
  constructor(...args: BasicMessageSenderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    router: PromiseOrValue<string>,
    link: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BasicMessageSender> {
    return super.deploy(
      router,
      link,
      overrides || {}
    ) as Promise<BasicMessageSender>;
  }
  override getDeployTransaction(
    router: PromiseOrValue<string>,
    link: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(router, link, overrides || {});
  }
  override attach(address: string): BasicMessageSender {
    return super.attach(address) as BasicMessageSender;
  }
  override connect(signer: Signer): BasicMessageSender__factory {
    return super.connect(signer) as BasicMessageSender__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BasicMessageSenderInterface {
    return new utils.Interface(_abi) as BasicMessageSenderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BasicMessageSender {
    return new Contract(address, _abi, signerOrProvider) as BasicMessageSender;
  }
}
