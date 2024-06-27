---
sidebar_position: 4
---

# Install a Zano CLI Wallet (Ubuntu)

**Step 1**

Go to the official site: [https://zano.org](https://zano.org) and navigate to the downloads section

**Step 2**

Download Linux (Ubuntu 16.04+) CLI Wallet

![alt install-zano-cli-wallet-step-3](../../../static/img/use/install-zano-cli-wallet-ubuntu/install-zano-cli-wallet-step-3.png 'install-zano-cli-wallet-step-3')

**Step 3**

Right click the file and select Properties

![alt install-zano-cli-wallet-step-4](../../../static/img/use/install-zano-cli-wallet-ubuntu/install-zano-cli-wallet-step-4.png 'install-zano-cli-wallet-step-4')

**Step 4**

Copy the file name

![alt install-zano-cli-wallet-step-5](../../../static/img/use/install-zano-cli-wallet-ubuntu/install-zano-cli-wallet-step-5.png 'install-zano-cli-wallet-step-5')

**Step 5**

Open a terminal in this directory & validate the authenticity of the file by running a checksum (XXX represents your version):

```
sha256sum zano-linux-x64-v<XXX>.tar.bz2
```

(Results should match release notes from Download page)

![alt install-zano-cli-wallet-step-6-1](../../../static/img/use/install-zano-cli-wallet-ubuntu/install-zano-cli-wallet-step-6-1.png 'install-zano-cli-wallet-step-6-1') ![alt install-zano-cli-wallet-step-6-2](../../../static/img/use/install-zano-cli-wallet-ubuntu/install-zano-cli-wallet-step-6-2.png 'install-zano-cli-wallet-step-6-2')

**Step 6**

If checksums match, decompress & extract the .tar.bz2 file:

```
tar -xvjf zano-linux-x64-release-devtools-v1.5.0.143[336fac2].tar.bz2
```

![alt install-zano-cli-wallet-step-7](../../../static/img/use/install-zano-cli-wallet-ubuntu/install-zano-cli-wallet-step-7.png 'install-zano-cli-wallet-step-7')

**Steps 7-9**

1. Delete your original .tar.bz2 file
2. Move the Zano folder to a location of your choice
3. Within the Zano directory, open a terminal and run the daemon to start the node and download the blockchain:

```
./zanod
```

![alt install-zano-cli-wallet-step-8-10-1](../../../static/img/use/install-zano-cli-wallet-ubuntu/install-zano-cli-wallet-step-8-10-1.png 'install-zano-cli-wallet-step-8-10-1') ![alt install-zano-cli-wallet-step-8-10-2](../../../static/img/use/install-zano-cli-wallet-ubuntu/install-zano-cli-wallet-step-8-10-2.png 'install-zano-cli-wallet-step-8-10-2')

**Step 11**

Wait for the blockchain to download and sync. This may take quite a few hours, depending on your download speed. And leave the daemon running! We’ll need that to create our new wallet.

![alt install-zano-cli-wallet-step-11](../../../static/img/use/install-zano-cli-wallet-ubuntu/install-zano-cli-wallet-step-11.png 'install-zano-cli-wallet-step-11')

**Step 12**

Once sync is complete, open another terminal in the Zano directory with the simplewalletbinary—that's our CLI wallet executable. Give command:

```
./simplewallet --generate-new-wallet=name.wallet
```

Replace “name” with your new wallet’s name, e.g.,:

```
./simplewallet --generate-new-wallet=zanocli.wallet
```

![alt install-zano-cli-wallet-step-12](../../../static/img/use/install-zano-cli-wallet-ubuntu/install-zano-cli-wallet-step-12.png 'install-zano-cli-wallet-step-12')

**Step 13**

When asked, enter a password for your wallet. You should use a password generator, found in password managers such as KeePass.

![alt install-zano-cli-wallet-step-13](../../../static/img/use/install-zano-cli-wallet-ubuntu/install-zano-cli-wallet-step-13.png 'install-zano-cli-wallet-step-13')

**Steps 14-15**

1. To open your new wallet, give the following command in the same terminal (again, substituting "name"):

```
./simplewallet --wallet-file name.wallet
```

1. Enter your password, when prompted. Notice that the wallet displays your receive address after “Opened wallet.” You will use this to fund your new wallet.

![alt install-zano-cli-wallet-step-15](../../../static/img/use/install-zano-cli-wallet-ubuntu/install-zano-cli-wallet-step-15.png 'install-zano-cli-wallet-step-15')

**Steps 16-17**

1. Now we must get our wallet’s seed phrase, as well as set an additional password for the seed itself. Give the command:

```
show_seed
```

1. Again, when prompted provide a password for the seed phrase you’re about to get. Confirm the password, and be sure to save both it and your seed phrase!!

![alt install-zano-cli-wallet-step-17](../../../static/img/use/install-zano-cli-wallet-ubuntu/install-zano-cli-wallet-step-17.png 'install-zano-cli-wallet-step-17')

**You've successfully installed your new Zano Wallet!**
