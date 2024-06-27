# Building From Sources

## Linux

### Install prerequisites

```
sudo apt-get install -y build-essential g++ python-dev autotools-dev libicu-dev libbz2-dev cmake git screen checkinstall zlib1g-dev
```

### Download and build Boost

(Assuming you have cloned Zano into `zano` folder. If used different location for Zano, edit line 4 correspondingly)

```
curl -OL https://boostorg.jfrog.io/artifactory/main/release/1.70.0/source/boost_1_70_0.tar.bz2
echo "430ae8354789de4fd19ee52f3b1f739e1fba576f0aded0897c3c2bc00fb38778  boost_1_70_0.tar.bz2" | shasum -c && tar -xjf boost_1_70_0.tar.bz2
rm boost_1_70_0.tar.bz2 && cd boost_1_70_0
patch -p0 < ../zano/utils/boost_1.70_gcc_8.patch || cd ..
./bootstrap.sh --with-libraries=system,filesystem,thread,date_time,chrono,regex,serialization,atomic,program_options,locale,timer,log
./b2
```

Make sure that you see "The Boost C++ Libraries were successfully built!" message at the end.

### Install OpenSSL

Please, make sure the paths correspond to your environment (\`/home/user/')

```
curl -OL https://www.openssl.org/source/openssl-1.1.1t.tar.gz
echo "a06b067b7e3bd6a2cb52a06f087ff13346ce7360  openssl-1.1.1t.tar.gz" | shasum -c && tar xzf openssl-1.1.1t.tar.gz
cd openssl-1.1.1t/
./config --prefix=/home/user/openssl --openssldir=/home/user/openssl shared zlib
make
make test
make install

```

### Checkout Zano from github

```
git clone --recursive https://github.com/hyle-team/zano.git
```

### Set environment variables

For instance, by adding the following lines to \~/.bashrc

Server version

```
export BOOST_ROOT=/home/user/boost_1_70_0
export OPENSSL_ROOT_DIR=/home/user/openssl
```

GUI version

```
export BOOST_ROOT=/home/user/boost_1_70_0
export OPENSSL_ROOT_DIR=/home/user/openssl
export QT_PREFIX_PATH=/home/user/Qt5.11.2/5.11.2/gcc_64
```

### Build the binaries

Mainnet:

```
cd zano && mkdir build && cd build
cmake
make -j1 daemon simplewallet
```

Testnet:

```
cd zano && mkdir build && cd build
cmake -D TESTNET=TRUE ..
make -j1 daemon simplewallet
```

### Build GUI

```
cd zano
utils/build_script_linux.sh
```

## Windows

Install required prerequisites (Boost, Qt, CMake, OpenSSL)\
Rename `utils/configure_local_paths.cmd.example` to `utils/configure_local_paths.cmd` and edit paths in this file so they correspond to your environment.

Mainnet: Run one of `utils/configure_win64_msvsNNNN_gui.cmd` according to your MSVC version.

Testnet: Run one of `utils/configure_win64_msvsNNNN_testnet.cmd` according to your MSVC version.

Go to the build folder and open generated Zano.sln in MSVC and build it.

### Build GUI

In order to correctly deploy Qt GUI application, you also need to do the following:

Copy Zano.exe to a folder (e.g. `depoy`). Run `PATH_TO_QT\bin\windeployqt.exe deploy\Zano.exe`. Copy folder `\src\gui\qt-daemon\html` to `deploy\html`. Now you can run `Zano.exe`

## MacOS

Install required prerequisites.\
Set environment variables as stated in `utils/macosx_build_config.command`

```
mkdir build
cd build
cmake -D TESTNET=TRUE ..
make
```

### Build GUI

Create self-signing certificate via Keychain Access:

Run Keychain Access

Choose Keychain Access > Certificate Assistant > Create a Certificate

Use “Zano” (without quotes) as certificate name

Choose “Code Signing” in “Certificate Type” field

Press “Create”, then “Done”

Make sure the certificate was added to keychain "System". If not—move it to "System"

Double click the certificate you've just added, enter the trust section and under "When using this certificate" select "Always trust"

Unfold the certificate in Keychain Access window and double click the underlying private key "Zano". Select "Access Control" tab, then select "Allow all applications to access this item". Click "Save Changes"

Revise building script, comment out unwanted steps and run it: utils/build_script_mac_osx.sh

The application should be here: /buid_mac_osx_64/release/src
