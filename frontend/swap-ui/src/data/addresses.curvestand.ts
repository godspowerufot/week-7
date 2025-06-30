export const addressesCurvestand = {
  'tokensV1': [
    {
      'address': '0xGOOD0000000000000000000000000000000000001',
      'address_spl': 'GOOD_SPL_ADDRESS',
      'name': 'Goodness Token',
      'symbol': 'GOOD',
      'decimals': 9
    },
    {
      'address': '0xWEB30000000000000000000000000000000000002',
      'address_spl': 'WEB3_SPL_ADDRESS',
      'name': 'Web3 Power',
      'symbol': 'WEB3',
      'decimals': 9
    },
    {
      'address': '0xGIFT0000000000000000000000000000000000003',
      'address_spl': 'GIFT_SPL_ADDRESS',
      'name': 'Gift Token',
      'symbol': 'GIFT',
      'decimals': 6
    }
  ],
  'tokensV2': [
    {
      'address': '0xGOOD0000000000000000000000000000000000004',
      'address_spl': 'GOODV2_SPL_ADDRESS',
      'name': 'Goodness Token v2',
      'symbol': 'GOODv2',
      'decimals': 9
    },
    {
      'address': '0xWEB30000000000000000000000000000000000005',
      'address_spl': 'WEB3V2_SPL_ADDRESS',
      'name': 'Web3 Power v2',
      'symbol': 'WEB3v2',
      'decimals': 9
    }
  ],
  'swap': {
    'neonTokenTransfer': '0xb3bFD57D36D09209fFF3B5D4052c9c271FE11AAc',
    'router': '0xC3529Db933f3D28323CD825c666CBBAf5BDbF7f8',
    'factory': '0x1Be1a24E9BF504b35901c1b76fBf77766D6b7647',
    'pairs': {
      'good/web3': {
        'pair': '0xPAIRGOODWEB3',
        'a': '0xGOOD0000000000000000000000000000000000001',
        'b': '0xWEB30000000000000000000000000000000000002'
      },
      'good/gift': {
        'pair': '0xPAIRGOODGIFT',
        'a': '0xGOOD0000000000000000000000000000000000001',
        'b': '0xGIFT0000000000000000000000000000000000003'
      }
    }
  }
};
