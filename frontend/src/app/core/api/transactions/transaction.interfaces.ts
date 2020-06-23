import { TokenBalance } from '../addresses/address.interfaces';

export interface Transaction {
    transactionHash: string;
    from: string;
    to: string;
    quantity: number;
    blockHeight: number;
    timeStamp: string;
    status: string;
    inputParameters: any;
}
