import { NextResponse } from 'next/server';
import DepositWalletTransaction from "../../../../Modal/Wallet/DepositWalletTransaction";
import USDT_Wallets from "../../../../Modal/Wallets/USDT/USDT_Wallets";
import initDB from "../../../../helper/initDB";

initDB()

export async function POST(request) {

    const { ids, Type, Amount, tokentype, network, status, address, hash } = await request.json();

    console.log({ ids, Type, Amount, tokentype, network, status, address, hash })

    if (!ids || !Type || !Amount || !tokentype || !network || !status ) return NextResponse.json({ message: "Please Provide All Data", status: false });

    let Find_User_USDT_Wallets = await USDT_Wallets.findOne({ RecordOwner: ids }).lean()

    await DepositWalletTransaction.create({
        RecordOwner: ids,
        Type,
        Amount,
        tokentype,
        network,
        status,
        address,
        hash
    })
    

    let Convert_Types = Number(Amount)

    let Static_USDT_Value = 10

    let USDTamount = (Number(Static_USDT_Value) / 10 ** 18);

    let tokenPrice = 0.01

    var ethPriceInUSD = Number(USDTamount) / 10 ** 8;

    // Calculation For USDT

    let inputValue = Convert_Types

    var USDT_UPDATE_VALUE = 0

    if (tokentype == "USDT") {
        USDT_UPDATE_VALUE = inputValue / tokenPrice;
    }

    if (tokentype == "USDC") {
        USDT_UPDATE_VALUE = inputValue / tokenPrice;

    }

    if (tokentype == "BNB" || tokentype == "ETH") {
        let oneEthInToken = ethPriceInUSD / tokenPrice;

        USDT_UPDATE_VALUE = inputValue * oneEthInToken;
    }

  //  console.log({USDT_UPDATE_VALUE})

    await USDT_Wallets.findByIdAndUpdate({ _id: Find_User_USDT_Wallets._id }, { $inc: { Deposit_Wallet_USDT:tokentype== "BNB" ? USDT_UPDATE_VALUE:inputValue } })

    return NextResponse.json({ message: "Transaction Saved", status: true });

}