# How to launch a confidential asset

:::info As of the time of writing, asset creation is only supported by the CLI wallet (simplewallet).

Binaries and support for the GUI wallet is expected soon.

:::

:::tip Feel free to skip to the Creating asset part you're using pre-built binaries available here https://docs.zano.org/docs/testnet-builds

:::

## Building a Testnet Wallet

### Linux

**Install prerequisites**

```
sudo apt-get install -y build-essential g++ python-dev autotools-dev libicu-dev libbz2-dev cmake git screen checkinstall zlib1g-dev
```

**Download and build Boost**

```
curl -OL https://boostorg.jfrog.io/artifactory/main/release/1.70.0/source/boost_1_70_0.tar.bz2
echo "430ae8354789de4fd19ee52f3b1f739e1fba576f0aded0897c3c2bc00fb38778  boost_1_70_0.tar.bz2" | shasum -c && tar -xjf boost_1_70_0.tar.bz2
cd boost_1_70_0
./bootstrap.sh --with-libraries=system,filesystem,thread,date_time,chrono,regex,serialization,atomic,program_options,locale,timer,log
./b2
```

**Install OpenSSL**

Please, make sure the paths correspond to your environment (`/home/user/')

```
curl -OL https://www.openssl.org/source/openssl-1.1.1t.tar.gz
echo "a06b067b7e3bd6a2cb52a06f087ff13346ce7360  openssl-1.1.1t.tar.gz" | shasum -c && tar xzf openssl-1.1.1t.tar.gz 
cd openssl-1.1.1t/
./config --prefix=/home/user/openssl --openssldir=/home/user/openssl shared zlib
make
make test
make install
```

**Checkout Zano from github (branch `cryptoassets`)**

```
git clone --recursive https://github.com/hyle-team/zano.git -b cryptoassets
```

**Build the binaries for the testnet**

```
cd zano && mkdir build && cd build
cmake -D TESTNET=TRUE ..
make -j1 daemon simplewallet
```

### Windows

Install required prerequisites (Boost, Qt, CMake, OpenSSL)<br/>
Rename `utils/configure_local_paths.cmd.example` to `utils/configure_local_paths.cmd` and edit paths in this file so they correspond to your environment.<br/>
Run one of `utils/configure_win64_msvsNNNN_testnet`.cmd according to your MSVC version.<br/>
Go to the build folder and open generated Zano.sln in MSVC<br/>
Build it.<br/>

### MacOS

Install required prerequisites.
Set environment variables as stated in `utils/macosx_build_config.command`

```
mkdir build
cd build
cmake -D TESTNET=TRUE ..
make
```

## Creating the Asset

To deploy a new asset on the Zano blockchain, you need to prepare a JSON-formatted file with asset parameters. Here’s an example:

```
{
  "ticker": "CT",
  "full_name": "Confidential token",
  "total_max_supply": 100000000000000000,
  "current_supply": 1000000000000000,
  "decimal_point": 12,
  "meta_info": ""
}
```

Then run the following command specifying the route to the file:

```
deploy_new_asset <asset specs file location>
```

You should see a confirmation message upon successful execution

![alt launch-asset-confirmation-message](../../../static/img/launch-asset-confirmation-message.png "launch-asset-confirmation-message")



## Other Asset Commands

### Whitelisting

By default, new assets are not whitelisted and won’t show up in the wallets beside deployer. This feature prevents spam and the cluttering of the wallet with unsolicited tokens. It also allows use cases where the asset id is only shared between a closed group of users and others are unable to access the balance in that asset even if they have it in the wallet.

To add it to your wallet, it needs to be explicitly added to the allow list using the following command:

```
add_custom_asset_id <asset id>
```

The Zano dev team will also maintain a shared whitelist of assets enabled by default.

### Transfer

To transfer an asset, the simplewallet uses the same command as a native coin transfer, but you’ll need to specify the asset id before the receiving address.

```
transfer <mixin count> [asset id:]<receiving address> <amount>
```

Here’s an example:

```
transfer 10 e03a140b8447d2895290022b25c06bdabea514e2475ae56ce5bcbc554ab9865c:ZxBrXwuFw9MPCgS9tmgfhu6mrCq21GEjKgEUEtEQtF8ccPiXTxLaMtqKPJHPXVzBq5e4YatGCrR8v9tBf4Fbv5F32YWQUwCVN 100
```

### Checking balance

To check the balance, use the following command:

```
balance
```

![alt lauch-asset-check-balance](../../../static/img/lauch-asset-check-balance.png "lauch-asset-check-balance")

However, the wallet will not automatically refresh. To see any updates or changes to your balance, you'll need to manually refresh the wallet with the following command:

```
refresh
```
