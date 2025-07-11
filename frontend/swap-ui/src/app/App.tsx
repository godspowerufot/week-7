import { useEffect, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { TransactionData } from '@neonevm/solana-sign';
import Layout from '../layout/Layout.tsx';
import SwapForm from '../swap/SwapForm.tsx';
import FormTabs from '../swap/components/FormTabs/FormTabs.tsx';
import { useProxyConnection } from '../wallet/Connection.tsx';
import { SwapTokenData, UITab } from '../models';
import './App.css';
import {
  approveTokensForSwapTransactionData,
  approveTokenV1Instruction,
  approveTokenV2Instruction,
  pancakeSwapTransactionData,
  transferTokenToNeonTransactionData,
  transferTokenToSolanaTransactionData
} from '../api/swap';
import '../layout/layout.css';

function App() {
  const tabs: UITab[] = [
    // { id: 0, title: 'v1', disabled: false },
    { id: 1, title: 'v1-2', disabled: false },
    { id: 2, title: 'v2', disabled: false }
  ];
  const [tab, setTab] = useState<UITab>(tabs[0]);
  const { publicKey } = useWallet();
  const { getWalletBalance, addresses } = useProxyConnection();

  const v1DataMethod = async (params: SwapTokenData): Promise<TransactionData[]> => {
    const claimTransaction = transferTokenToNeonTransactionData(params);
    const approveSwapTransaction = approveTokensForSwapTransactionData(params);
    const swapTransaction = pancakeSwapTransactionData(params);
    const transferSolanaTransaction = await transferTokenToSolanaTransactionData(params);
    return [claimTransaction, approveSwapTransaction, swapTransaction, transferSolanaTransaction];
  };

  const v2DataMethod = async (params: SwapTokenData): Promise<TransactionData[]> => {
    const approveSwapTransaction = approveTokensForSwapTransactionData(params);
    const swapTransaction = pancakeSwapTransactionData(params);
    return [approveSwapTransaction, swapTransaction];
  };

  const handleSelect = (tab: UITab): void => {
    setTab((_) => tab);
  };

  useEffect(() => {
    getWalletBalance().catch(console.log);
  }, [getWalletBalance, publicKey]);

  return (
    <>
      <Layout>
        <div className='max-w-[624px]'>
          <FormTabs tabs={tabs} tab={tab} selectTab={handleSelect}></FormTabs>
          {tab.id === 0 && (
            <SwapForm
              tokensList={addresses.tokensV1}
              dataMethod={v1DataMethod}
              approveMethod={approveTokenV1Instruction}
            ></SwapForm>
          )}
          {tab.id === 1 && (
            <SwapForm
              tokensList={addresses.tokensV1}
              dataMethod={v2DataMethod}
              approveMethod={approveTokenV2Instruction}
            ></SwapForm>
          )}
          {tab.id === 2 && (
            <SwapForm
              tokensList={addresses.tokensV2}
              dataMethod={v2DataMethod}
              approveMethod={approveTokenV2Instruction}
            ></SwapForm>
          )}
        </div>
      </Layout>
      <div className='gw3-badge'>Powered by GodspowerUfot</div>
    </>
  );
}

export default App;
