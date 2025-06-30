const fs = require('fs');
const path = require('path');

const possiblePaths = [
  path.resolve(__dirname, '../pancakeswap/artifacts/deployed-tokens.json'),
  path.resolve(__dirname, '../pancakeswap/deployed-tokens.json')
];

let deployedTokensPath = null;
for (const p of possiblePaths) {
  if (fs.existsSync(p)) {
    deployedTokensPath = p;
    break;
  }
}

if (!deployedTokensPath) {
  console.error('deployed-tokens.json not found in artifacts or pancakeswap root. Please deploy tokens first.');
  process.exit(1);
}

const frontendConfigPath = path.resolve(__dirname, '../frontend/swap-ui/src/data/addresses.curvestand.ts');

const deployed = JSON.parse(fs.readFileSync(deployedTokensPath, 'utf8'));
let configText = fs.readFileSync(frontendConfigPath, 'utf8');

function formatToken(token) {
  return `    {
      'address': '${token.address}',
      'address_spl': '${token.address_spl}',
      'name': '${token.name}',
      'symbol': '${token.symbol}',
      'decimals': ${token.decimals}
    }`;
}

// Replace tokensV1
if (deployed.tokensV1) {
  const tokensV1Block = deployed.tokensV1.map(formatToken).join(',\n');
  configText = configText.replace(/'tokensV1': \[[\s\S]*?\],/, `'tokensV1': [\n${tokensV1Block}\n  ],`);
}
// Replace tokensV2
if (deployed.tokensV2) {
  const tokensV2Block = deployed.tokensV2.map(formatToken).join(',\n');
  configText = configText.replace(/'tokensV2': \[[\s\S]*?\],/, `'tokensV2': [\n${tokensV2Block}\n  ],`);
}

fs.writeFileSync(frontendConfigPath, configText, 'utf8');
console.log('Frontend token config updated with deployed token addresses!'); 